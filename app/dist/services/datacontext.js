System.register(["breeze", "../models/models", "./session", "./get-entity-service", "./registry", "./config.services", "./json-results-adapter", "./github"], function (_export) {
  var breeze, Models, Session, GetEntityService, RegistryList, ServicesConfig, getJsonResultsAdapter, getTags, getRepositories, _createClass, _classCallCheck, REPOSITORY_PATH, PACKAGE_PATH, LOCAL_PATH, DataContext;

  return {
    setters: [function (_breeze) {
      breeze = _breeze["default"];
    }, function (_modelsModels) {
      Models = _modelsModels.Models;
    }, function (_session) {
      Session = _session.Session;
    }, function (_getEntityService) {
      GetEntityService = _getEntityService.GetEntityService;
    }, function (_registry) {
      RegistryList = _registry.RegistryList;
    }, function (_configServices) {
      ServicesConfig = _configServices.ServicesConfig;
    }, function (_jsonResultsAdapter) {
      getJsonResultsAdapter = _jsonResultsAdapter.getJsonResultsAdapter;
    }, function (_github) {
      getTags = _github.getTags;
      getRepositories = _github.getRepositories;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      // TODO: MOVE INTO SESSION VARIABLES
      REPOSITORY_PATH = "api.json";
      PACKAGE_PATH = "package.json";
      LOCAL_PATH = "cache";

      // var REPO = 'aurelia-dependency-injection';
      // var VERSION = '0.5.0';

      DataContext = (function () {
        function DataContext(models, session, getEntityService, registryList, servicesConfig, getJsonResultsAdapter) {
          _classCallCheck(this, DataContext);

          var self = this;
          self.models = models;
          self.session = session;
          self.servicesConfig = servicesConfig;
          self.registryList = registryList;
          this.getEntityService = getEntityService;
          self.loadingData = false;

          var EntityQuery = breeze.EntityQuery;

          var jsonResultsAdapter = getJsonResultsAdapter;

          var dataservice = new breeze.DataService({
            adapterName: "webApi",
            serviceName: servicesConfig.remoteServiceName,
            hasServerMetadata: false,
            jsonResultsAdapter: jsonResultsAdapter
          });
          this.manager = configureBreezeManager(self.models);

          // Go prime the data that will be shared throughout the application
          self.primeData = function () {
            var promise = new Promise(function (resolve) {
              self.loadRepositories().then(function () {
                Promise.all([self.getEntityList("Repository", true, servicesConfig.buildURI("aurelia-" + self.session.currentRepository.name, self.session.currentVersion.tagName, REPOSITORY_PATH)).then(loadApi), self.getEntityList("Package", true, servicesConfig.buildURI("aurelia-" + self.session.currentRepository.name, self.session.currentVersion.tagName, PACKAGE_PATH))]).then(function (resp) {
                  resolve("done");
                });
              });
            });
            return promise;

            function loadApi(response) {
              var json = response.response;
              self.session.repository = response[0];
              self.registryList.createRegistry(self, self.session.repository);
            }
          };

          function configureBreezeManager(models) {
            breeze.NamingConvention.none.setAsDefault();
            breeze.config.initializeAdapterInstance("ajax", "jQuery", true);
            var mgr = new breeze.EntityManager({ dataService: dataservice });
            models.initialize(mgr);
            return mgr;
          }
        }

        _createClass(DataContext, {
          getEntityList: {
            value: function getEntityList(type, forceRemote, path) {
              var self = this;
              self.loadingData = true;
              return self.getEntityService.getEntityList(self.manager, type, forceRemote, path).then(queryCompleted);

              function queryCompleted(data) {
                self.loadingData = false;
                return data;
              }
            }
          },
          getEntityById: {
            value: function getEntityById(type, id, forceRemote) {
              var self = this;
              var path = self.servicesConfig.buildURI("aurelia-" + self.session.currentRepository.name, self.session.currentVersion.tagName, LOCAL_PATH);
              return self.getEntityService.getEntityById(self.manager, type, id, forceRemote, path);
            }
          },
          createEntity: {
            value: function createEntity(type, params) {
              return this.manager.createEntity(type, params);
            }
          },
          loadRepositories: {
            value: function loadRepositories() {
              var self = this;
              return getRepositories().then(function (repos) {
                repos.forEach(function (repo) {
                  getTags(repo);
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
          }
        }, {
          inject: {
            value: function inject() {
              return [Models, Session, GetEntityService, RegistryList, ServicesConfig, getJsonResultsAdapter];
            }
          }
        });

        return DataContext;
      })();

      _export("DataContext", DataContext);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QztpQkFDN0MsQ0FBQyxDQUFDO0FBQ0gsb0JBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlDLG9CQUFJLFlBQVksR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFTLEdBQUcsRUFBRTtBQUM1RCx5QkFBTyxHQUFHLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQztpQkFDaEMsQ0FBQyxDQUFDO0FBQ0gsb0JBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztlQUMvQyxDQUFDLENBQUM7YUFDTjs7O0FBdEZNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUscUJBQXFCLENBQUMsQ0FBQzthQUFFOzs7O2VBRGhILFdBQVc7Ozs2QkEyRmYsV0FBVyIsImZpbGUiOiJzZXJ2aWNlcy9kYXRhY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9