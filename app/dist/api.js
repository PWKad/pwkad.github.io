System.register(["./services/session", "./services/datacontext", "./services/github"], function (_export) {
  var Session, DataContext, getTags, getRepositories, _createClass, _classCallCheck, Docs;

  return {
    setters: [function (_servicesSession) {
      Session = _servicesSession.Session;
    }, function (_servicesDatacontext) {
      DataContext = _servicesDatacontext.DataContext;
    }, function (_servicesGithub) {
      getTags = _servicesGithub.getTags;
      getRepositories = _servicesGithub.getRepositories;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Docs = _export("Docs", (function () {
        function Docs(session, datacontext) {
          _classCallCheck(this, Docs);

          var self = this;
          this.selectedRepository = {};
          this.repository = session.repository;
          this.datacontext = datacontext;
          this.repositories = [];
          this.versions = [];
          this.session = session;
        }

        _createClass(Docs, {
          activate: {
            value: function activate() {
              var self = this;
              return getRepositories().then(function (repos) {
                repos.forEach(function (repo) {
                  getTags(repo);
                  self.repositories.push(repo);
                  self.session.repositories.push(repo);
                });
                var firstRepo = self.session.repositories.filter(function (repo) {
                  return repo.name === "dependency-injection";
                });
                self.session.currentRepository = firstRepo[0];
                var firstVersion = firstRepo[0].releases.filter(function (rel) {
                  return rel.tagName === "0.5.0";
                });
                self.session.currentVersion = firstVersion[0];
              });
            }
          },
          setRepository: {
            value: function setRepository(repo) {
              this.getVersions(repo);
            }
          },
          getVersions: {
            value: function getVersions(repo) {
              var self = this;
              self.versions.splice(0, self.versions.length);
              this.datacontext.getEntityList("Package", false, "local").then(function (results) {
                results.forEach(function (pkg) {
                  if (pkg.name === repo.name) {
                    self.versions.push(pkg.version);
                  }
                });
              });
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [Session, DataContext];
            }
          }
        });

        return Docs;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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