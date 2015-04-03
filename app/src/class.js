import {RegistryList} from './services/registry';
import {Session} from './services/session';
import {DataContext} from './services/datacontext';

export class Class {
  static inject() { return [RegistryList, Session, DataContext]; }
  constructor(regList, session, datacontext) {
    this.registry = regList;
    this.session = session;
    this.datacontext = datacontext;
  }
  toggleVisible(value){
    value.visible = !value.visible;
  }

  activate(classId) {
    var self = this;
    self.classItem = this.datacontext.getEntityById('Class', classId.id, false);
  }
}
