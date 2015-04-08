System.register(["breeze"], function (_export) {
  var breeze, _createClass, _classCallCheck, GetEntityService;

  return {
    setters: [function (_breeze) {
      breeze = _breeze["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      GetEntityService = (function () {
        function GetEntityService() {
          _classCallCheck(this, GetEntityService);
        }

        _createClass(GetEntityService, {
          getEntityList: {
            value: function getEntityList(manager, entityType, _x, endpoint, parentPropertyName, parentPropertyId) {
              var forceRemote = arguments[2] === undefined ? false : arguments[2];

              if (!manager) {
                throw new Error("[manager] cannot be a null parameter");
              }

              // If it is not forceRemote, then try to get this from the local cache
              if (!forceRemote) {
                var results = this.getLocalList(manager, endpoint, entityType, parentPropertyName, parentPropertyId);
                if (results.length > 0) {
                  return Promise.resolve(results);
                }
              }

              var query = breeze.EntityQuery.from(endpoint).toType(entityType);

              return manager.executeQuery(query).then(querySucceeded);

              function querySucceeded(data) {
                return data.results;
              }
            }
          },
          getEntityById: {
            value: function getEntityById(manager, entityType, id, _x, endpoint) {
              var forceRemote = arguments[3] === undefined ? false : arguments[3];

              if (!manager) {
                throw new Error("[manager] cannot be a null parameter");
              }

              // If it is not forceRemote, then try to get this from the local cache
              if (!forceRemote) {
                var results = this.getLocalById(manager, endpoint, entityType, "id", id);
                if (results.length > 0) {
                  return Promise.resolve(results[0]);
                }
              }
            }
          },
          getLocalList: {
            value: function getLocalList(manager, endpoint, entityType, parentPropertyName, parentPropertyId) {
              var query = breeze.EntityQuery.from(endpoint).toType(entityType);
              return manager.executeQueryLocally(query);
            }
          },
          getLocalById: {
            value: function getLocalById(manager, resource, entityType, idPropertyName, id) {
              var query = breeze.EntityQuery.from(resource).where(idPropertyName, "==", id).toType(entityType);
              return manager.executeQueryLocally(query);
            }
          }
        });

        return GetEntityService;
      })();

      _export("GetEntityService", GetEntityService);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2dldC1lbnRpdHktc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQU8sTUFBTSxpQ0FFUCxnQkFBZ0I7Ozs7QUFGZixZQUFNOzs7Ozs7Ozs7QUFFUCxzQkFBZ0I7QUFDVCxpQkFEUCxnQkFBZ0IsR0FDUDtnQ0FEVCxnQkFBZ0I7U0FFbkI7O3FCQUZHLGdCQUFnQjtBQUdwQix1QkFBYTttQkFBQSx1QkFBQyxPQUFPLEVBQUUsVUFBVSxNQUFxQixRQUFRLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUM7a0JBQWxFLFdBQVcsZ0NBQUMsS0FBSzs7QUFDbEQsa0JBQUksQ0FBQyxPQUFPLEVBQUU7QUFBRSxzQkFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO2VBQUU7OztBQUcxRSxrQkFBSSxDQUFDLFdBQVcsRUFBRTtBQUNoQixvQkFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3JHLG9CQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLHlCQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ2pDO2VBQ0Y7O0FBRUQsa0JBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDZCxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7O0FBRXRCLHFCQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDOztBQUV4RCx1QkFBUyxjQUFjLENBQUMsSUFBSSxFQUFFO0FBQzVCLHVCQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7ZUFDckI7YUFDRjs7QUFDRCx1QkFBYTttQkFBQSx1QkFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsTUFBcUIsUUFBUSxFQUFDO2tCQUE1QixXQUFXLGdDQUFDLEtBQUs7O0FBQ3RELGtCQUFJLENBQUMsT0FBTyxFQUFFO0FBQUUsc0JBQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztlQUFFOzs7QUFHMUUsa0JBQUksQ0FBQyxXQUFXLEVBQUU7QUFDaEIsb0JBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pFLG9CQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLHlCQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BDO2VBQ0Y7YUFDRjs7QUFFRCxzQkFBWTttQkFBQSxzQkFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRTtBQUNoRixrQkFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQzFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0QixxQkFBTyxPQUFPLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0M7O0FBRUQsc0JBQVk7bUJBQUEsc0JBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRTtBQUM5RCxrQkFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQzVDLEtBQUssQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUMvQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEIscUJBQU8sT0FBTyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNDOzs7O2VBL0NHLGdCQUFnQjs7O2tDQXFEcEIsZ0JBQWdCIiwiZmlsZSI6InNlcnZpY2VzL2dldC1lbnRpdHktc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9