System.register(["./api", "./packages"], function (_export) {
  var RepositoryConfig, PackageConfig, _createClass, _classCallCheck, Models;

  return {
    setters: [function (_api) {
      RepositoryConfig = _api.RepositoryConfig;
    }, function (_packages) {
      PackageConfig = _packages.PackageConfig;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Models = (function () {
        function Models(apiConfig, packageConfig) {
          _classCallCheck(this, Models);

          this.initialize = function (manager) {
            apiConfig.initialize(manager.metadataStore);
            packageConfig.initialize(manager.metadataStore);
            // lookupConfig.initializeEnums(manager);
          };
        }

        _createClass(Models, null, {
          inject: {
            value: function inject() {
              return [RepositoryConfig, PackageConfig];
            }
          }
        });

        return Models;
      })();

      _export("Models", Models);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9tb2RlbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLGdCQUFnQixFQUNoQixhQUFhLGlDQUVmLE1BQU07Ozs7QUFISixzQkFBZ0IsUUFBaEIsZ0JBQWdCOztBQUNoQixtQkFBYSxhQUFiLGFBQWE7Ozs7Ozs7OztBQUVmLFlBQU07QUFFQyxpQkFGUCxNQUFNLENBRUUsU0FBUyxFQUFFLGFBQWEsRUFBRTtnQ0FGbEMsTUFBTTs7QUFHUixjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsT0FBTyxFQUFFO0FBQ25DLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUM1Qyx5QkFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7O1dBRWpELENBQUE7U0FDRjs7cUJBUkcsTUFBTTtBQUNILGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsQ0FBQzthQUFFOzs7O2VBRHpELE1BQU07Ozt3QkFZVixNQUFNIiwiZmlsZSI6Im1vZGVscy9tb2RlbHMuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==