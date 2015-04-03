import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';
import {Session} from './services/session';
import {API} from './models/api';
import {HttpClient} from 'aurelia-http-client';
import {DataContext} from './services/datacontext';

var url = 'doc/0.0.1/api.json';

export class App {
  static inject() { return [Router, Session, HttpClient, DataContext]; }
  constructor(router, session, http, datacontext) {
    this.router = router;
    this.session = session;
    this.datacontext = datacontext;
    this.http = http;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','docs'],      moduleId: './docs',        nav: true, title:'Docs' },
        { route: 'API/:id',        moduleId: './api',  nav: true },
        { route: 'Repository/:id', moduleId: './repository',  nav: true },
        { route: 'Class/:id',      moduleId: './class',       nav: false },
        { route: 'Method/:id',     moduleId: './method',      nav: false }
      ]);
    });
  }

  activate(){
    return this.datacontext.primeData();
  }
}
