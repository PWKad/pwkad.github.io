import {HttpClient} from 'aurelia-http-client';
import {join} from 'aurelia-path';
import {toIndex} from '../util';
import moment from 'moment';

var apiUrl = 'https://api.github.com/',
    http = {
      api: new HttpClient().configure(builder => builder.withBaseUri(apiUrl)),
      local: new HttpClient(),
    };

function checkLocal() {
  var result = localStorage.getItem('au-docs')
  if (result) {
    return JSON.parse(result);
  } else {
    return false;
  }
}

function getRemote() {
  return Promise.all([
    http.local.get('../registry.json'),
    http.api.get('orgs/aurelia/repos')
      .then(repos => toIndex(repos.content, r => r.full_name), reason => {})
  ])
  .then(result => {
    var registry = result[0].content,
        repoIndex = result[1];
    return registry.map(r => new Repository(r.name, r.fullName, repoIndex[r.fullName]));
  });
}

export function getTags(repo) {
  var tags = localStorage.getItem(repo.fullName)
  if (tags !== null) {
    repo.releases = JSON.parse(tags);
    return repo.releases;
  } else {
    return http.api.get(join(join('repos', repo.fullName), 'releases'))
      .then(releases => {
        repo.releases = releases.content.map(r => new Release(this, r));
        localStorage.setItem(repo.fullName, JSON.stringify(repo.releases));
        return repo.releases
      });
  }
}

export function getRepositories() {
  var result = checkLocal();
  if (result) {
    return Promise.resolve(result);
  } else {
    return getRemote().then(resp => {
      localStorage.setItem('au-docs', JSON.stringify(resp));
      return resp;
    })
  }
}

export class Repository {
  constructor(name, fullName, apiRepo) {
    this.name = name;
    this.fullName = fullName;
    this.releases = [];
    if (apiRepo) {
      this.description = apiRepo.description;
      this.stars = apiRepo.stargazers_count;
      this.lastUpdated = moment(apiRepo.updated_at).toDate();
    } else {
      this.description = null;
      this.stars = null;
      this.lastUpdated = null;
    }
  }

  load() {
    return http.api.get(join(join('repos', this.fullName), 'releases'))
      .then(releases => {
        this.releases = releases.content.map(r => new Release(this, r))
      });
  }
}

export class Release {
  constructor(repository, apiRelease) {
    //this.repository = repository;
    this.name = apiRelease.name;
    this.tagName = apiRelease.tag_name;
    this.body = apiRelease.body;
    this.draft = apiRelease.draft;
    this.prerelease = apiRelease.prerelease;
    this.created = moment(apiRelease.created_at).toDate();
    this.published = moment(apiRelease.published_at).toDate();
  }

  load() {

  }
}
