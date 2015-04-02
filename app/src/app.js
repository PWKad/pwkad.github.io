import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';
import {Session} from './services/session';
import {API} from './models/api';
import {HttpClient} from 'aurelia-http-client';
import {RegistryList} from './services/registry';

var url = 'doc/0.0.1/api.json';

export class App {
  static inject() { return [Router, Session, HttpClient, RegistryList]; }
  constructor(router, session, http, registryList) {
    this.router = router;
    this.session = session;
    this.http = http;
    this.registryList = registryList;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','docs'],      moduleId: './docs',      nav: true, title:'Docs' },
        { route: 'api',            moduleId: './api',       nav: true },
        { route: 'repo/:id',       moduleId: './repo',      nav: false },
        { route: 'class/:id',      moduleId: './class',     nav: false },
        { route: 'method/:id',     moduleId: './method',    nav: false }
      ]);
    });
  }

  activate(){
    return this.http.get(url).then(response => {
      let json = JSON.parse(response.response);
      this.session.api = new API(json);
      this.registryList.createRegistry(this.session.api);
    });
  }
}
