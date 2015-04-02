System.register(["aurelia-http-client"], function (_export) {
  var HttpClient, _createClass, _classCallCheck, RegistryList, Registry;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
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
              list.forEach(function (obj) {
                self.registries.push(new Registry(obj, type, parent));
              });
            }
          },
          createRegistry: {
            value: function createRegistry(api) {
              var self = this;
              var property = "property";
              var repo = "repo";
              var event = "event";
              var method = "method";

              self.registries.push(new Registry(api, repo, "repo"));

              self.addToRegistry(api.classes, "class", api);
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
        }, {
          inject: {
            value: function inject() {
              return [];
            }
          }
        });

        return RegistryList;
      })();

      Registry = function Registry(data, type, parent) {
        _classCallCheck(this, Registry);

        this.name = data.name;
        this.type = type;
        this.parentName = "";
        if (parent && parent.name) {
          this.parentName = parent.name;
          this.tag = this.name;
        } else {
          this.tag = this.name + "#" + this.parentName;
        }
      };

      _export("RegistryList", RegistryList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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