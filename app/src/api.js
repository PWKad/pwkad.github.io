import {Session} from './services/session';
import {DataContext} from './services/datacontext';
import {getTags, getRepositories} from './services/github';

export class Docs{
  static inject() { return [Session, DataContext]; }
  constructor(session, datacontext){
    var self = this;
    this.selectedRepository = {};
    this.repository = session.repository;
    this.datacontext = datacontext;
    this.repositories = [];
    this.versions = [];
    this.session = session;
  }
  activate(){
    var self = this;
    return getRepositories()
      .then(repos => {
        repos.forEach(repo => {
          getTags(repo);
          self.repositories.push(repo);
          self.session.repositories.push(repo);
        });
        var firstRepo = self.session.repositories.filter(function(repo) {
          return repo.name === 'dependency-injection';
        });
        self.session.currentRepository = firstRepo[0];
        var firstVersion = firstRepo[0].releases.filter(function(rel) {
          return rel.tagName === '0.5.0';
        });
        self.session.currentVersion = firstVersion[0];
      });
  }
  setRepository(repo){
    this.getVersions(repo);
  }
  getVersions(repo){
    var self = this;
    self.versions.splice(0, self.versions.length);
    this.datacontext.getEntityList('Package', false, 'local').then(results => {
      results.forEach(pkg => {
        if (pkg.name === repo.name) {
          self.versions.push(pkg.version)
        }
      });
    });
  }
}
