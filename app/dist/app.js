System.register(["aurelia-router", "bootstrap", "./services/session", "./models/api", "aurelia-http-client", "./services/datacontext"], function (_export) {
  var Router, bootstrap, Session, API, HttpClient, DataContext, _createClass, _classCallCheck, url, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_bootstrap) {
      bootstrap = _bootstrap["default"];
    }, function (_servicesSession) {
      Session = _servicesSession.Session;
    }, function (_modelsApi) {
      API = _modelsApi.API;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_servicesDatacontext) {
      DataContext = _servicesDatacontext.DataContext;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "doc/0.0.1/api.json";
      App = _export("App", (function () {
        function App(router, session, http, datacontext) {
          _classCallCheck(this, App);

          this.router = router;
          this.session = session;
          this.datacontext = datacontext;
          this.http = http;
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
              return [Router, Session, HttpClient, DataContext];
            }
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNQLFNBQVMsRUFDUixPQUFPLEVBQ1AsR0FBRyxFQUNILFVBQVUsRUFDVixXQUFXLGlDQUVmLEdBQUcsRUFFTSxHQUFHOzs7O0FBVFIsWUFBTSxrQkFBTixNQUFNOztBQUNQLGVBQVM7O0FBQ1IsYUFBTyxvQkFBUCxPQUFPOztBQUNQLFNBQUcsY0FBSCxHQUFHOztBQUNILGdCQUFVLHNCQUFWLFVBQVU7O0FBQ1YsaUJBQVcsd0JBQVgsV0FBVzs7Ozs7Ozs7O0FBRWYsU0FBRyxHQUFHLG9CQUFvQjtBQUVqQixTQUFHO0FBRUgsaUJBRkEsR0FBRyxDQUVGLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQ0FGckMsR0FBRzs7QUFHWixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUMvQixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUM5QixrQkFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDekIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxNQUFNLENBQUMsRUFBTyxRQUFRLEVBQUUsUUFBUSxFQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLE1BQU0sRUFBRSxFQUMvRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQVMsUUFBUSxFQUFFLE9BQU8sRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQzFELEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxFQUNqRSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQU8sUUFBUSxFQUFFLFNBQVMsRUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQ2xFLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBTSxRQUFRLEVBQUUsVUFBVSxFQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FDbkUsQ0FBQyxDQUFDO1dBQ0osQ0FBQyxDQUFDO1NBQ0o7O3FCQWpCVSxHQUFHO0FBbUJkLGtCQUFRO21CQUFBLG9CQUFFO0FBQ1IscUJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNyQzs7O0FBcEJNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUFFOzs7O2VBRDNELEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=