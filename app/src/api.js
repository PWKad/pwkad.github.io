import {HttpClient} from 'aurelia-http-client';
import {API} from './models/api';

var url = 'doc/0.0.1/api.json';

export class Docs{
  static inject() { return [HttpClient]; }
  constructor(http){
    this.http = http;
    this.pageContent = '';
    this.json = '';
    this.api = {};
  }

  activate(){
    return this.http.get(url).then(response => {
      this.json = JSON.parse(response.response);
      this.api = new API(this.json);
    });
  }

  toggleVisible(value){
    value.visible = !value.visible;
  }
}
