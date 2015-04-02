import {RegistryList} from './services/registry';
import {Session} from './services/session';

export class Property {
  static inject() { return [RegistryList, Session]; }
  constructor(regList, session) {
    this.registry = regList;
    this.session = session;
  }

  activate(objName) {
    var self = this;
    var result = self.registry.registries.filter(function (reglist){
      return reglist.name === objName.id;
    })[0];
    self.property = self.session.api.properties.filter(function (obj) {
      return obj.name === result.name;
    })[0];
  }
}
