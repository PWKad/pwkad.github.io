import {RegistryList} from './services/registry';
import {Session} from './services/session';

export class Event {
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
    self.event = self.session.repository.events.filter(function (obj) {
      return obj.name === result.name;
    })[0];
  }
}
