System.register(["aurelia-router", "bootstrap", "./services/session", "./models/api", "aurelia-http-client", "./services/registry"], function (_export) {
  var Router, bootstrap, Session, API, HttpClient, RegistryList, _createClass, _classCallCheck, url, App;

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
    }, function (_servicesRegistry) {
      RegistryList = _servicesRegistry.RegistryList;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "doc/0.0.1/api.json";
      App = _export("App", (function () {
        function App(router, session, http, registryList) {
          _classCallCheck(this, App);

          this.router = router;
          this.session = session;
          this.http = http;
          this.registryList = registryList;
          this.router.configure(function (config) {
            config.title = "Aurelia";
            config.map([{ route: ["", "docs"], moduleId: "./docs", nav: true, title: "Docs" }, { route: "api", moduleId: "./api", nav: true }, { route: "repo/:id", moduleId: "./repo", nav: false }, { route: "class/:id", moduleId: "./class", nav: false }, { route: "method/:id", moduleId: "./method", nav: false }]);
          });
        }

        _createClass(App, {
          activate: {
            value: function activate() {
              var _this = this;

              return this.http.get(url).then(function (response) {
                var json = JSON.parse(response.response);
                _this.session.api = new API(json);
                _this.registryList.createRegistry(_this.session.api);
              });
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [Router, Session, HttpClient, RegistryList];
            }
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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