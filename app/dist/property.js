System.register(["./services/registry", "./services/session"], function (_export) {
  var RegistryList, Session, _createClass, _classCallCheck, Property;

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

      Property = _export("Property", (function () {
        function Property(regList, session) {
          _classCallCheck(this, Property);

          this.registry = regList;
          this.session = session;
        }

        _createClass(Property, {
          activate: {
            value: function activate(objName) {
              var self = this;
              var result = self.registry.registries.filter(function (reglist) {
                return reglist.name === objName.id;
              })[0];
              self.property = self.session.api.properties.filter(function (obj) {
                return obj.name === result.name;
              })[0];
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [RegistryList, Session];
            }
          }
        });

        return Property;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxZQUFZLEVBQ1osT0FBTyxpQ0FFRixRQUFROzs7O0FBSGIsa0JBQVkscUJBQVosWUFBWTs7QUFDWixhQUFPLG9CQUFQLE9BQU87Ozs7Ozs7OztBQUVGLGNBQVE7QUFFUixpQkFGQSxRQUFRLENBRVAsT0FBTyxFQUFFLE9BQU8sRUFBRTtnQ0FGbkIsUUFBUTs7QUFHakIsY0FBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDeEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3FCQUxVLFFBQVE7QUFPbkIsa0JBQVE7bUJBQUEsa0JBQUMsT0FBTyxFQUFFO0FBQ2hCLGtCQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsa0JBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLE9BQU8sRUFBQztBQUM3RCx1QkFBTyxPQUFPLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxFQUFFLENBQUM7ZUFDcEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ04sa0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRTtBQUNoRSx1QkFBTyxHQUFHLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUM7ZUFDakMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ1A7OztBQWRNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFBRTs7OztlQUR4QyxRQUFRIiwiZmlsZSI6InByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=