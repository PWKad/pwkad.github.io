import {Behavior} from 'aurelia-framework';
import {Session} from './services/session';

export class NavBar {
  static inject() { return [Session]; }
  static metadata(){ return Behavior.withProperty('router'); }
  constructor(session){
    this.session = session;
  }
  setActiveRepository(repo){
    this.session.currentRepository = repo;
  }
  setActiveRelease(release){
    this.session.currentVersion = release;
  }
}
