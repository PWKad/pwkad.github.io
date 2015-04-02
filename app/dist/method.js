System.register(["./services/registry", "./services/session"], function (_export) {
  var RegistryList, Session, _createClass, _classCallCheck, Method;

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

      Method = _export("Method", (function () {
        function Method(regList, session) {
          _classCallCheck(this, Method);

          this.registry = regList;
          this.session = session;
        }

        _createClass(Method, {
          activate: {
            value: function activate(objName) {
              var self = this;
              var result = self.registry.registries.filter(function (reglist) {
                return reglist.name === objName.id;
              })[0];
              self.method = self.session.api.methods.filter(function (obj) {
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

        return Method;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGhvZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsWUFBWSxFQUNaLE9BQU8saUNBRUYsTUFBTTs7OztBQUhYLGtCQUFZLHFCQUFaLFlBQVk7O0FBQ1osYUFBTyxvQkFBUCxPQUFPOzs7Ozs7Ozs7QUFFRixZQUFNO0FBRU4saUJBRkEsTUFBTSxDQUVMLE9BQU8sRUFBRSxPQUFPLEVBQUU7Z0NBRm5CLE1BQU07O0FBR2YsY0FBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDeEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3FCQUxVLE1BQU07QUFPakIsa0JBQVE7bUJBQUEsa0JBQUMsT0FBTyxFQUFFO0FBQ2hCLGtCQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsa0JBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLE9BQU8sRUFBQztBQUM3RCx1QkFBTyxPQUFPLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxFQUFFLENBQUM7ZUFDcEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ04sa0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRTtBQUMzRCx1QkFBTyxHQUFHLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUM7ZUFDakMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ1A7OztBQWRNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFBRTs7OztlQUR4QyxNQUFNIiwiZmlsZSI6Im1ldGhvZC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9