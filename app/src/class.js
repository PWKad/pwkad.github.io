import {RegistryList} from './services/registry';
import {Session} from './services/session';

export class Class {
  static inject() { return [RegistryList, Session]; }
  constructor(regList, session) {
    this.registry = regList;
    this.session = session;
  }

  activate(objName) {
    var self = this;
    var result = self.registry.registries.filter(function (reglist){
      return reglist.name === objName.id;
    });
    self.classItem = result[0];
    self.classItem = self.session.api.classes.filter(function (obj) {
      return obj.name === self.classItem.name;
    })[0];
  }
}
