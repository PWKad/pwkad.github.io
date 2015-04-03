System.register(["breeze"], function (_export) {
  var breeze, _classCallCheck, PackageConfig;

  return {
    setters: [function (_breeze) {
      breeze = _breeze["default"];
    }],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      PackageConfig = function PackageConfig() {
        _classCallCheck(this, PackageConfig);

        var DT = breeze.DataType;
        var Identity = breeze.AutoGeneratedKeyType.Identity;
        this.initialize = function (metadataStore) {

          // Package information
          metadataStore.addEntityType({
            shortName: "Package",
            namespace: "AureliaDocs",
            dataProperties: {
              id: { dataType: "Int32", isPartOfKey: true },
              name: { dataType: "String" },
              description: { dataType: "String" },
              version: { dataType: "Boolean" }
            },
            navigationProperties: {
              repositories: {
                entityTypeName: "RepositoryDTO", isScalar: false,
                associationName: "Package_RepositoryDTOs"
              } }
          });

          metadataStore.addEntityType({
            shortName: "RepositoryDTO",
            namespace: "AureliaDocs",
            dataProperties: {
              id: { dataType: "Int32", isPartOfKey: true },
              name: { dataType: "String" },
              path: { dataType: "String" },
              packageConfigId: { dataType: "Int32" }
            },
            navigationProperties: {
              packageObj: {
                entityTypeName: "Package", isScalar: true,
                associationName: "Package_RepositoryDTOs", foreignKeyNames: ["packageConfigId"]
              }
            }
          });

          metadataStore.registerEntityTypeCtor("Package", null, packageInitializer);
          metadataStore.registerEntityTypeCtor("JspmConfig", null, jspmInitializer);
          metadataStore.registerEntityTypeCtor("RepositoryDTO", null, repoDTOInitializer);

          function packageInitializer(packageObj) {
            packageObj.visible = false;
          }
          function jspmInitializer(jspm) {
            jspm.visible = false;
          }
          function repoDTOInitializer(repo) {
            repo.visible = false;
          }
        };
      };

      _export("PackageConfig", PackageConfig);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wYWNrYWdlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQU8sTUFBTSxtQkFFUCxhQUFhOzs7O0FBRlosWUFBTTs7Ozs7OztBQUVQLG1CQUFhLEdBQ04sU0FEUCxhQUFhLEdBQ0o7OEJBRFQsYUFBYTs7QUFFZixZQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ3pCLFlBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7QUFDcEQsWUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLGFBQWEsRUFBRTs7O0FBR3pDLHVCQUFhLENBQUMsYUFBYSxDQUFDO0FBQzFCLHFCQUFTLEVBQUUsU0FBUztBQUNwQixxQkFBUyxFQUFFLGFBQWE7QUFDeEIsMEJBQWMsRUFBRTtBQUNkLGdCQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7QUFDNUMsa0JBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDNUIseUJBQVcsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDbkMscUJBQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUU7YUFDakM7QUFDRCxnQ0FBb0IsRUFBRTtBQUNwQiwwQkFBWSxFQUFFO0FBQ1osOEJBQWMsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLEtBQUs7QUFDaEQsK0JBQWUsRUFBRSx3QkFBd0I7ZUFDMUMsRUFDRjtXQUNGLENBQUMsQ0FBQzs7QUFFSCx1QkFBYSxDQUFDLGFBQWEsQ0FBQztBQUMxQixxQkFBUyxFQUFFLGVBQWU7QUFDMUIscUJBQVMsRUFBRSxhQUFhO0FBQ3hCLDBCQUFjLEVBQUU7QUFDZCxnQkFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO0FBQzVDLGtCQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQzVCLGtCQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQzVCLDZCQUFlLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO2FBQ3ZDO0FBQ0QsZ0NBQW9CLEVBQUU7QUFDcEIsd0JBQVUsRUFBRTtBQUNWLDhCQUFjLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJO0FBQ3pDLCtCQUFlLEVBQUUsd0JBQXdCLEVBQUUsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7ZUFDaEY7YUFDRjtXQUNGLENBQUMsQ0FBQzs7QUFFSCx1QkFBYSxDQUFDLHNCQUFzQixDQUNsQyxTQUFTLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDdkMsdUJBQWEsQ0FBQyxzQkFBc0IsQ0FDbEMsWUFBWSxFQUFFLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztBQUN2Qyx1QkFBYSxDQUFDLHNCQUFzQixDQUNsQyxlQUFlLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7O0FBRTdDLG1CQUFTLGtCQUFrQixDQUFDLFVBQVUsRUFBRTtBQUN0QyxzQkFBVSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7V0FDNUI7QUFDRCxtQkFBUyxlQUFlLENBQUMsSUFBSSxFQUFFO0FBQzdCLGdCQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztXQUN0QjtBQUNELG1CQUFTLGtCQUFrQixDQUFDLElBQUksRUFBRTtBQUNoQyxnQkFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7V0FDdEI7U0FDRixDQUFBO09BQ0Y7OytCQUlELGFBQWEiLCJmaWxlIjoibW9kZWxzL3BhY2thZ2VzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=