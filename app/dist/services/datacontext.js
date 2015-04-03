System.register(["breeze", "../models/models", "./session", "./get-entity-service", "./registry", "./config.services", "./json-results-adapter"], function (_export) {
  var breeze, Models, Session, GetEntityService, RegistryList, ServicesConfig, getJsonResultsAdapter, _createClass, _classCallCheck, REPOSITORY_PATH, PACKAGE_PATH, LOCAL_PATH, REPO, VERSION, DataContext;

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
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      // TODO: MOVE INTO SESSION VARIABLES
      REPOSITORY_PATH = "api.json";
      PACKAGE_PATH = "package.json";
      LOCAL_PATH = "cache";
      REPO = "aurelia-dependency-injection";
      VERSION = "0.5.0";

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
            var promise = Promise.all([this.getEntityList("Repository", true, servicesConfig.buildURI(REPO, VERSION, REPOSITORY_PATH)).then(loadApi), this.getEntityList("Package", true, servicesConfig.buildURI(REPO, VERSION, PACKAGE_PATH))]);
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
              var path = self.servicesConfig.buildURI(REPO, VERSION, LOCAL_PATH);
              return self.getEntityService.getEntityById(self.manager, type, id, forceRemote, path);
            }
          },
          createEntity: {
            value: function createEntity(type, params) {
              return this.manager.createEntity(type, params);
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
//# sourceMappingURL=data:application/json;base64,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WUFBWSxFQUFFLENBQUM7QUFDNUMsa0JBQU0sQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoRSxnQkFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDakUsa0JBQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkIsbUJBQU8sR0FBRyxDQUFDO1dBQ1o7U0FDRjs7cUJBN0NHLFdBQVc7QUE4Q2YsdUJBQWE7bUJBQUEsdUJBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUM7QUFDcEMsa0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixrQkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEIscUJBQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDOztBQUV2Ryx1QkFBUyxjQUFjLENBQUMsSUFBSSxFQUFDO0FBQzNCLG9CQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUN6Qix1QkFBUSxJQUFJLENBQUM7ZUFDZDthQUNGOztBQUNELHVCQUFhO21CQUFBLHVCQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFDO0FBQ2xDLGtCQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsa0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUE7QUFDbEUscUJBQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3ZGOztBQUNELHNCQUFZO21CQUFBLHNCQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7QUFDeEIscUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2hEOzs7QUE5RE0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFEaEgsV0FBVzs7OzZCQW1FZixXQUFXIiwiZmlsZSI6InNlcnZpY2VzL2RhdGFjb250ZXh0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=