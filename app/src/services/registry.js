import {HttpClient} from 'aurelia-http-client';

class RegistryList {
  static inject() { return []; }
  constructor(){
    this.registryList
    this.registries = [];
  }

  addToRegistry(list, type, parent){
    var self = this;
    list.forEach(function (obj) {
      self.registries.push(new Registry(obj, type, parent));
    });
  }

  createRegistry(api){
    var self = this;
    let property = 'property';
    let repo = 'repo';
    let event = 'event';
    let method = 'method';

    self.registries.push(new Registry(api, repo, 'repo'));

    self.addToRegistry(api.classes, 'class', api);
    api.classes.forEach(function (object) {
      self.addToRegistry(object.properties, property, object);
      self.addToRegistry(object.methods, method, object);
      self.addToRegistry(object.events, event, object);
    });
    self.addToRegistry(api.properties, property, api);
    self.addToRegistry(api.methods, method, api);
    self.addToRegistry(api.events, event, api);
  }

}

class Registry {
  constructor(data, type, parent){
    this.name = data.name;
    this.type = type;
    this.parentName = '';
    if (parent && parent.name) {
      this.parentName = parent.name;
      this.tag = this.name;
    } else {
      this.tag = this.name + '#' + this.parentName;
    }
  }
}


export {
  RegistryList
}