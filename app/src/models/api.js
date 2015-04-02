export class API {
  constructor(obj){
    this.name = obj.name;
    this.description = obj.description;
    this.classes = [];
    this.methods = [];
    this.properties = [];
    this.events = [];
    for (var child of obj.classes) {
      this.classes.push(new Class(child));
    }
    this.properties = [];
    this.events = [];
    this.isConstructor = obj.is_constructor;
    for (var child of obj.properties) {
      this.properties.push(new Property(child));
    }
    for (var child of obj.events) {
      this.events.push(new Event(child));
    }
  }
}

export class Class {
  constructor(obj) {
    this.name = obj.name;
    this.file = obj.file;
    this.line = obj.line;
    this.description = obj.description;
    this.methods = [];
    this.properties = [];
    this.events = [];
    this.isConstructor = obj.is_constructor;
    for (var child of obj.methods) {
      this.methods.push(new Method(child));
    }
    for (var child of obj.properties) {
      this.properties.push(new Property(child));
    }
    for (var child of obj.events) {
      this.events.push(new Event(child));
    }
    this.visible = false;
  }
}

export class Method {
  constructor(obj){
    this.name = obj.name;
    this.line = obj.line;
    this.description = obj.description;
    this.params = [];
    if (obj.params) {
      for (var child of obj.params) {
        this.params.push(new Param(child));
      }
    }
    this.visible = false;
  }
}

export class Param {
  constructor(obj){
    this.name = obj.name;
    this.description = obj.description;
    this.type = obj.type;
  }
}

export class Property {
  constructor(obj){
    this.name = obj.name;
  }
}

export class Event {
  constructor(obj){
    this.name = obj.name;
  }
}