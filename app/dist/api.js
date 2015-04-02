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
          this.api = session.api;
          this.computedRegistries = [];
          this.searchText = "";
          this.dirtyTimes = 0;
          this.registryList = registryList;
        }

        _createClass(Docs, {
          getRegistryHref: {
            value: function getRegistryHref(registry) {
              return "#" + registry.type + "/" + registry.name;
            }
          },
          filterRegistries: {
            value: function filterRegistries(searchString) {
              var self = this;
              var results = self.registryList.registries.filter(function (reg) {
                return reg.tag.toLowerCase().indexOf(searchString) !== -1;
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
                }, 1000);
              }
              self.lastSearchValue = searchstring;
              return self.dirtyTimes > 0;
            }
          },
          activate: {
            value: function activate() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsWUFBWSxFQUNaLE9BQU8saUNBRUYsSUFBSTs7OztBQUhULGtCQUFZLHFCQUFaLFlBQVk7O0FBQ1osYUFBTyxvQkFBUCxPQUFPOzs7Ozs7Ozs7QUFFRixVQUFJO0FBRUosaUJBRkEsSUFBSSxDQUVILFlBQVksRUFBRSxPQUFPLEVBQUM7Z0NBRnZCLElBQUk7O0FBR2IsY0FBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDdEIsY0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZixjQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFDdkIsY0FBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztBQUM3QixjQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUNyQixjQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNwQixjQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztTQUNsQzs7cUJBVlUsSUFBSTtBQVlmLHlCQUFlO21CQUFBLHlCQUFDLFFBQVEsRUFBQztBQUN2QiwyQkFBVyxRQUFRLENBQUMsSUFBSSxTQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUc7YUFDN0M7O0FBRUQsMEJBQWdCO21CQUFBLDBCQUFDLFlBQVksRUFBRTtBQUM3QixrQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLGtCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBUyxHQUFHLEVBQUU7QUFDOUQsdUJBQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7ZUFDM0QsQ0FBQyxDQUFDO0FBQ0gsa0JBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUM7YUFDbkM7O0FBRUcsdUJBQWE7aUJBQUEsWUFBRztBQUNsQixrQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLGtCQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ25DLGtCQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxZQUFZLEVBQUU7QUFDakUsb0JBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO0FBQ3JCLDBCQUFVLENBQUMsWUFBWTtBQUNyQixzQkFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7QUFDckIsc0JBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7QUFDekIsd0JBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNwQywyQkFBTyxJQUFJLENBQUM7bUJBQ2I7aUJBQ0YsRUFBRSxJQUFJLENBQUMsQ0FBQztlQUNWO0FBQ0Qsa0JBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDO0FBQ3BDLHFCQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2FBQzVCOztBQUVELGtCQUFRO21CQUFBLG9CQUFFO0FBQ1Isa0JBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMzQjs7QUFFRCx1QkFBYTttQkFBQSx1QkFBQyxLQUFLLEVBQUM7QUFDbEIsbUJBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ2hDOzs7QUE5Q00sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFOzs7O2VBRHhDLElBQUkiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=