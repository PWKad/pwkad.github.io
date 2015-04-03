System.register(["./services/registry", "./services/session", "./services/datacontext"], function (_export) {
  var RegistryList, Session, DataContext, _createClass, _classCallCheck, Class;

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

      Class = _export("Class", (function () {
        function Class(regList, session, datacontext) {
          _classCallCheck(this, Class);

          this.registry = regList;
          this.session = session;
          this.datacontext = datacontext;
        }

        _createClass(Class, {
          toggleVisible: {
            value: function toggleVisible(value) {
              value.visible = !value.visible;
            }
          },
          activate: {
            value: function activate(classId) {
              var self = this;
              this.datacontext.getEntityById("Class", classId.id, false).then(function (resp) {
                self.classItem = resp;
              });
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [RegistryList, Session, DataContext];
            }
          }
        });

        return Class;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxZQUFZLEVBQ1osT0FBTyxFQUNQLFdBQVcsaUNBRU4sS0FBSzs7OztBQUpWLGtCQUFZLHFCQUFaLFlBQVk7O0FBQ1osYUFBTyxvQkFBUCxPQUFPOztBQUNQLGlCQUFXLHdCQUFYLFdBQVc7Ozs7Ozs7OztBQUVOLFdBQUs7QUFFTCxpQkFGQSxLQUFLLENBRUosT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7Z0NBRmhDLEtBQUs7O0FBR2QsY0FBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDeEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7U0FDaEM7O3FCQU5VLEtBQUs7QUFPaEIsdUJBQWE7bUJBQUEsdUJBQUMsS0FBSyxFQUFDO0FBQ2xCLG1CQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUNoQzs7QUFFRCxrQkFBUTttQkFBQSxrQkFBQyxPQUFPLEVBQUU7QUFDaEIsa0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixrQkFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQ3RFLG9CQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztlQUN2QixDQUFDLENBQUM7YUFDSjs7O0FBZk0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFBRTs7OztlQURyRCxLQUFLIiwiZmlsZSI6ImNsYXNzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=