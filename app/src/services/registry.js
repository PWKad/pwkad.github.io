class RegistryList {
  static inject() { return []; }
  constructor(){
    this.registryList
    this.registries = [];
  }

  addToRegistry(list, type, parent){
    var self = this;
    var parentName = (parent && parent.name) ? parent.name : parent;
    list.forEach(function (obj) {
      self.registries.push(self.datacontext.createEntity('Registry', { id: obj.id, name: obj.name, type: type, parent: parentName }));
    });
  }

  createRegistry(datacontext, repo){
    var self = this;
    let Property = 'Property';
    let Repository = 'Repository';
    let Event = 'Event';
    let Method = 'Method';
    this.datacontext = datacontext;
    self.registries.push(this.datacontext.createEntity('Registry', { id: repo.id, name: repo.name, type: Repository, parent: 'aurelia' }));

    self.addToRegistry(repo.classes, 'Class', repo);
    repo.classes.forEach(function (object) {
      self.addToRegistry(object.properties, Property, object);
      self.addToRegistry(object.methods, Method, object);
      self.addToRegistry(object.events, Event, object);
    });
    self.addToRegistry(repo.properties, Property, repo);
    self.addToRegistry(repo.methods, Method, repo);
    self.addToRegistry(repo.events, Event, repo);
  }
}

export {
  RegistryList
}