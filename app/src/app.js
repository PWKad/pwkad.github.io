import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';
import {Session} from './services/session';
import {API} from './models/api';
import {DataContext} from './services/datacontext';

export class App {
  static inject() { return [Router, Session, DataContext]; }
  constructor(router, session, datacontext) {
    this.router = router;
    this.session = session;
    this.datacontext = datacontext;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','docs'],      moduleId: './docs',        nav: true, title:'Docs' },
        { route: 'API',            moduleId: './api',         nav: true },
        { route: 'Repository/:id', moduleId: './repository',  nav: false },
        { route: 'Class/:id',      moduleId: './class',       nav: false },
        { route: 'Method/:id',     moduleId: './method',      nav: false }
      ]);
    });
  }

  activate(){
    return this.datacontext.primeData();
  }
}
