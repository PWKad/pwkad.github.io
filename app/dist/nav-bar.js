System.register(["aurelia-framework", "./services/session"], function (_export) {
  var Behavior, Session, _createClass, _classCallCheck, NavBar;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_servicesSession) {
      Session = _servicesSession.Session;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NavBar = _export("NavBar", (function () {
        function NavBar(session) {
          _classCallCheck(this, NavBar);

          this.session = session;
        }

        _createClass(NavBar, {
          setActiveRepository: {
            value: function setActiveRepository(repo) {
              this.session.currentRepository = repo;
            }
          },
          setActiveRelease: {
            value: function setActiveRelease(release) {
              this.session.currentVersion = release;
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [Session];
            }
          },
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("router");
            }
          }
        });

        return NavBar;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFFBQVEsRUFDUixPQUFPLGlDQUVGLE1BQU07Ozs7QUFIWCxjQUFRLHFCQUFSLFFBQVE7O0FBQ1IsYUFBTyxvQkFBUCxPQUFPOzs7Ozs7Ozs7QUFFRixZQUFNO0FBR04saUJBSEEsTUFBTSxDQUdMLE9BQU8sRUFBQztnQ0FIVCxNQUFNOztBQUlmLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOztxQkFMVSxNQUFNO0FBTWpCLDZCQUFtQjttQkFBQSw2QkFBQyxJQUFJLEVBQUM7QUFDdkIsa0JBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2FBQ3ZDOztBQUNELDBCQUFnQjttQkFBQSwwQkFBQyxPQUFPLEVBQUM7QUFDdkIsa0JBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQzthQUN2Qzs7O0FBVk0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQUU7O0FBQzlCLGtCQUFRO21CQUFBLG9CQUFFO0FBQUUscUJBQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUFFOzs7O2VBRmpELE1BQU0iLCJmaWxlIjoibmF2LWJhci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9