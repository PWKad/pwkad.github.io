System.register(["./services/registry", "./services/session", "./services/datacontext"], function (_export) {
  var RegistryList, Session, DataContext, _createClass, _classCallCheck, Method;

  return {
    setters: [function (_servicesRegistry) {
      RegistryList = _servicesRegistry.RegistryList;
    }, function (_servicesSession) {
      Session = _servicesSession.Session;
    }, function (_servicesDatacontext) {
      DataContext = _servicesDatacontext.DataContext;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Method = _export("Method", (function () {
        function Method(regList, session, datacontext) {
          _classCallCheck(this, Method);

          this.registry = regList;
          this.session = session;
          this.datacontext = datacontext;
        }

        _createClass(Method, {
          toggleVisible: {
            value: function toggleVisible(value) {
              value.visible = !value.visible;
            }
          },
          activate: {
            value: function activate(methodId) {
              var self = this;
              self.method = this.datacontext.getEntityById("Method", methodId.id, false);
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [RegistryList, Session, DataContext];
            }
          }
        });

        return Method;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGhvZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsWUFBWSxFQUNaLE9BQU8sRUFDUCxXQUFXLGlDQUVOLE1BQU07Ozs7QUFKWCxrQkFBWSxxQkFBWixZQUFZOztBQUNaLGFBQU8sb0JBQVAsT0FBTzs7QUFDUCxpQkFBVyx3QkFBWCxXQUFXOzs7Ozs7Ozs7QUFFTixZQUFNO0FBRU4saUJBRkEsTUFBTSxDQUVMLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO2dDQUZoQyxNQUFNOztBQUdmLGNBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1NBQ2hDOztxQkFOVSxNQUFNO0FBT2pCLHVCQUFhO21CQUFBLHVCQUFDLEtBQUssRUFBQztBQUNsQixtQkFBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDaEM7O0FBQ0Qsa0JBQVE7bUJBQUEsa0JBQUMsUUFBUSxFQUFFO0FBQ2pCLGtCQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsa0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDNUU7OztBQVpNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFEckQsTUFBTSIsImZpbGUiOiJtZXRob2QuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==