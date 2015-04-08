System.register(["aurelia-router", "bootstrap", "./services/session", "./models/api", "./services/datacontext"], function (_export) {
  var Router, bootstrap, Session, API, DataContext, _createClass, _classCallCheck, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_bootstrap) {
      bootstrap = _bootstrap["default"];
    }, function (_servicesSession) {
      Session = _servicesSession.Session;
    }, function (_modelsApi) {
      API = _modelsApi.API;
    }, function (_servicesDatacontext) {
      DataContext = _servicesDatacontext.DataContext;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router, session, datacontext) {
          _classCallCheck(this, App);

          this.router = router;
          this.session = session;
          this.datacontext = datacontext;
          this.router.configure(function (config) {
            config.title = "Aurelia";
            config.map([{ route: ["", "docs"], moduleId: "./docs", nav: true, title: "Docs" }, { route: "API/:id", moduleId: "./api", nav: true }, { route: "Repository/:id", moduleId: "./repository", nav: true }, { route: "Class/:id", moduleId: "./class", nav: false }, { route: "Method/:id", moduleId: "./method", nav: false }]);
          });
        }

        _createClass(App, {
          activate: {
            value: function activate() {
              return this.datacontext.primeData();
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [Router, Session, DataContext];
            }
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNQLFNBQVMsRUFDUixPQUFPLEVBQ1AsR0FBRyxFQUNILFdBQVcsaUNBRU4sR0FBRzs7OztBQU5SLFlBQU0sa0JBQU4sTUFBTTs7QUFDUCxlQUFTOztBQUNSLGFBQU8sb0JBQVAsT0FBTzs7QUFDUCxTQUFHLGNBQUgsR0FBRzs7QUFDSCxpQkFBVyx3QkFBWCxXQUFXOzs7Ozs7Ozs7QUFFTixTQUFHO0FBRUgsaUJBRkEsR0FBRyxDQUVGLE1BQU0sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO2dDQUYvQixHQUFHOztBQUdaLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzlCLGtCQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUN6QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFDLE1BQU0sQ0FBQyxFQUFPLFFBQVEsRUFBRSxRQUFRLEVBQVMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsTUFBTSxFQUFFLEVBQy9FLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBUyxRQUFRLEVBQUUsT0FBTyxFQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFDMUQsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQ2pFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBTyxRQUFRLEVBQUUsU0FBUyxFQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFDbEUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFNLFFBQVEsRUFBRSxVQUFVLEVBQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxDQUNuRSxDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7U0FDSjs7cUJBaEJVLEdBQUc7QUFrQmQsa0JBQVE7bUJBQUEsb0JBQUU7QUFDUixxQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3JDOzs7QUFuQk0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFBRTs7OztlQUQvQyxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9