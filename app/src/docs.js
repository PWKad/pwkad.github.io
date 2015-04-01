import {HttpClient} from 'aurelia-http-client';

var url = 'doc/page.md';

export class Docs{
  static inject() { return [HttpClient]; }
  constructor(http){
    this.http = http;
    this.pageContent = '';
  }

  activate(){
    return this.http.get(url).then(response => {
      this.pageContent = response.response;
    });
  }
}
