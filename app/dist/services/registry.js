System.register([], function (_export) {
  var _createClass, _classCallCheck, RegistryList;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      RegistryList = (function () {
        function RegistryList() {
          _classCallCheck(this, RegistryList);

          this.registryList;
          this.registries = [];
        }

        _createClass(RegistryList, {
          addToRegistry: {
            value: function addToRegistry(list, type, parent) {
              var self = this;
              var parentName = parent && parent.name ? parent.name : parent;
              list.forEach(function (obj) {
                self.registries.push(self.datacontext.createEntity("Registry", { id: obj.id, name: obj.name, type: type, parent: parentName }));
              });
            }
          },
          createRegistry: {
            value: function createRegistry(datacontext, repo) {
              var self = this;
              var Property = "Property";
              var Repository = "Repository";
              var Event = "Event";
              var Method = "Method";
              this.datacontext = datacontext;
              self.registries.push(this.datacontext.createEntity("Registry", { id: repo.id, name: repo.name, type: Repository, parent: "aurelia" }));

              self.addToRegistry(repo.classes, "Class", repo);
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
        }, {
          inject: {
            value: function inject() {
              return [];
            }
          }
        });

        return RegistryList;
      })();

      _export("RegistryList", RegistryList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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