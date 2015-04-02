System.register(["./services/registry", "./services/session"], function (_export) {
  var RegistryList, Session, _createClass, _classCallCheck, Class;

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

      Class = _export("Class", (function () {
        function Class(regList, session) {
          _classCallCheck(this, Class);

          this.registry = regList;
          this.session = session;
        }

        _createClass(Class, {
          activate: {
            value: function activate(objName) {
              var self = this;
              var result = self.registry.registries.filter(function (reglist) {
                return reglist.name === objName.id;
              });
              self.classItem = result[0];
              self.classItem = self.session.api.classes.filter(function (obj) {
                return obj.name === self.classItem.name;
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

        return Class;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxZQUFZLEVBQ1osT0FBTyxpQ0FFRixLQUFLOzs7O0FBSFYsa0JBQVkscUJBQVosWUFBWTs7QUFDWixhQUFPLG9CQUFQLE9BQU87Ozs7Ozs7OztBQUVGLFdBQUs7QUFFTCxpQkFGQSxLQUFLLENBRUosT0FBTyxFQUFFLE9BQU8sRUFBRTtnQ0FGbkIsS0FBSzs7QUFHZCxjQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUN4QixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7cUJBTFUsS0FBSztBQU9oQixrQkFBUTttQkFBQSxrQkFBQyxPQUFPLEVBQUU7QUFDaEIsa0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixrQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsT0FBTyxFQUFDO0FBQzdELHVCQUFPLE9BQU8sQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLEVBQUUsQ0FBQztlQUNwQyxDQUFDLENBQUM7QUFDSCxrQkFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0Isa0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRTtBQUM5RCx1QkFBTyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2VBQ3pDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNQOzs7QUFmTSxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFEeEMsS0FBSyIsImZpbGUiOiJjbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9