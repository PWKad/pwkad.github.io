System.register(["./services/registry", "./services/session"], function (_export) {
  var RegistryList, Session, _createClass, _classCallCheck, Docs;

  return {
    setters: [function (_servicesRegistry) {
      RegistryList = _servicesRegistry.RegistryList;
    }, function (_servicesSession) {
      Session = _servicesSession.Session;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Docs = _export("Docs", (function () {
        function Docs(registryList, session) {
          _classCallCheck(this, Docs);

          this.pageContent = "";
          this.json = "";
          this.repository = session.repository;
          this.computedRegistries = [];
          this.searchText = "";
          this.dirtyTimes = 0;
          this.registryList = registryList;
        }

        _createClass(Docs, {
          getRegistryHref: {
            value: function getRegistryHref(registry) {
              return "#" + registry.type + "/" + registry.id;
            }
          },
          filterRegistries: {
            value: function filterRegistries(searchString) {
              var self = this;
              var results = self.registryList.registries.filter(function (reg) {
                return reg.searchName().toLowerCase().indexOf(searchString) !== -1;
              });
              this.computedRegistries = results;
            }
          },
          searchChanges: {
            get: function () {
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
          },
          activate: {
            value: function activate(repoId) {
              console.log(repoId);
              this.filterRegistries("");
            }
          },
          toggleVisible: {
            value: function toggleVisible(value) {
              value.visible = !value.visible;
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [RegistryList, Session];
            }
          }
        });

        return Docs;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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