System.register(["./services/session", "./services/datacontext"], function (_export) {
  var Session, DataContext, _createClass, _classCallCheck, Docs;

  return {
    setters: [function (_servicesSession) {
      Session = _servicesSession.Session;
    }, function (_servicesDatacontext) {
      DataContext = _servicesDatacontext.DataContext;
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
        }

        _createClass(Docs, {
          activate: {
            value: function activate() {
              var self = this;
              this.datacontext.getEntityList("Repository", false, "local").then(function (results) {
                results.forEach(function (repo) {
                  self.repositories.push(repo);
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsT0FBTyxFQUNQLFdBQVcsaUNBRU4sSUFBSTs7OztBQUhULGFBQU8sb0JBQVAsT0FBTzs7QUFDUCxpQkFBVyx3QkFBWCxXQUFXOzs7Ozs7Ozs7QUFFTixVQUFJO0FBRUosaUJBRkEsSUFBSSxDQUVILE9BQU8sRUFBRSxXQUFXLEVBQUM7Z0NBRnRCLElBQUk7O0FBR2IsY0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLGNBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7QUFDN0IsY0FBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3JDLGNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLGNBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQ3BCOztxQkFUVSxJQUFJO0FBVWYsa0JBQVE7bUJBQUEsb0JBQUU7QUFDUixrQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLGtCQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUMzRSx1QkFBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksRUFBSTtBQUN0QixzQkFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzlCLENBQUMsQ0FBQztlQUNKLENBQUMsQ0FBQzthQUNKOztBQUNELHVCQUFhO21CQUFBLHVCQUFDLElBQUksRUFBQztBQUNqQixrQkFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4Qjs7QUFDRCxxQkFBVzttQkFBQSxxQkFBQyxJQUFJLEVBQUM7QUFDZixrQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLGtCQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5QyxrQkFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDeEUsdUJBQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLEVBQUk7QUFDckIsc0JBQUksR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQzFCLHdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7bUJBQ2hDO2lCQUNGLENBQUMsQ0FBQztlQUNKLENBQUMsQ0FBQzthQUNKOzs7QUE5Qk0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzthQUFFOzs7O2VBRHZDLElBQUkiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=