import {RegistryList} from './services/registry';
import {Session} from './services/session';
import {DataContext} from './services/datacontext';

export class Method {
  static inject() { return [RegistryList, Session, DataContext]; }
  constructor(regList, session, datacontext) {
    this.registry = regList;
    this.session = session;
    this.datacontext = datacontext;
  }
  toggleVisible(value){
    value.visible = !value.visible;
  }
  activate(methodId) {
    var self = this;
    self.method = this.datacontext.getEntityById('Method', methodId.id, false);
  }
}
