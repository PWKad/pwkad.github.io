System.register(["./services/registry", "./services/session"], function (_export) {
  var RegistryList, Session, _createClass, _classCallCheck, Event;

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

      Event = _export("Event", (function () {
        function Event(regList, session) {
          _classCallCheck(this, Event);

          this.registry = regList;
          this.session = session;
        }

        _createClass(Event, {
          activate: {
            value: function activate(objName) {
              var self = this;
              var result = self.registry.registries.filter(function (reglist) {
                return reglist.name === objName.id;
              })[0];
              self.event = self.session.repository.events.filter(function (obj) {
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

        return Event;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxZQUFZLEVBQ1osT0FBTyxpQ0FFRixLQUFLOzs7O0FBSFYsa0JBQVkscUJBQVosWUFBWTs7QUFDWixhQUFPLG9CQUFQLE9BQU87Ozs7Ozs7OztBQUVGLFdBQUs7QUFFTCxpQkFGQSxLQUFLLENBRUosT0FBTyxFQUFFLE9BQU8sRUFBRTtnQ0FGbkIsS0FBSzs7QUFHZCxjQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUN4QixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7cUJBTFUsS0FBSztBQU9oQixrQkFBUTttQkFBQSxrQkFBQyxPQUFPLEVBQUU7QUFDaEIsa0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixrQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsT0FBTyxFQUFDO0FBQzdELHVCQUFPLE9BQU8sQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLEVBQUUsQ0FBQztlQUNwQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDTixrQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFO0FBQ2hFLHVCQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQztlQUNqQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDUDs7O0FBZE0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFOzs7O2VBRHhDLEtBQUsiLCJmaWxlIjoiZXZlbnQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==