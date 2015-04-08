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
  }
  activate(){
    var self = this;
    return getRepositories()
      .then(repos => {
        repos.forEach(repo => {
          getTags(repo);
          self.repositories.push(repo);
        });
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
