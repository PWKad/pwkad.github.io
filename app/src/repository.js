import {RegistryList} from './services/registry';
import {Session} from './services/session';

export class Docs{
  static inject() { return [RegistryList, Session]; }
  constructor(registryList, session){
    this.pageContent = '';
    this.json = '';
    this.repository = session.repository;
    this.computedRegistries = [];
    this.searchText = '';
    this.dirtyTimes = 0;
    this.registryList = registryList;
  }

  getRegistryHref(registry){
    return `#${registry.type}/${registry.id}`;
  }

  filterRegistries(searchString) {
    var self = this;
    var results = self.registryList.registries.filter(function(reg) {
      return reg.searchName().toLowerCase().indexOf(searchString) !== -1;
    });
    this.computedRegistries = results;
  }

  get searchChanges() {
    var self = this;
    var searchstring = self.searchText;
    if (self.lastSearchValue && self.lastSearchValue !== searchstring) {
      self.dirtyTimes += 1;
      setTimeout(function () {
        self.dirtyTimes -= 1;
        if (self.dirtyTimes === 0) {
          self.filterRegistries(searchstring);
          return true;
        }
      }, 100);
    }
    self.lastSearchValue = searchstring;
    return self.dirtyTimes > 0;
  }

  activate(repoId){
    this.filterRegistries('');
  }

  toggleVisible(value){
    value.visible = !value.visible;
  }
}
