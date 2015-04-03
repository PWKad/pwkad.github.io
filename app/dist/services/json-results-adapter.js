System.register(["breeze"], function (_export) {
  var breeze, lastKey;

  _export("getJsonResultsAdapter", getJsonResultsAdapter);

  function getJsonResultsAdapter() {
    return new breeze.JsonResultsAdapter({
      name: "AureliaDocs",

      extractResults: function extractResults(data) {
        var results = data.results;
        if (!results) throw new Error("Unable to resolve 'results' property");
        return results;
      },

      visitNode: function visitNode(node, mappingContext, nodeContext) {
        if (!node) {
          return false;
        }
        if (mappingContext.query.fromEntityType && mappingContext.query.fromEntityType.shortName === "Repository") {
          if (nodeContext.nodeType === "root") {
            node.id = generateKey();
            return { entityType: "Repository" };
          }
          if (nodeContext.navigationProperty) {
            if (nodeContext.navigationProperty.name === "classes") {
              node.isConstructor = node.is_constructor;
              node.id = generateKey();
              return { entityType: "Class" };
            }
            if (nodeContext.navigationProperty.name === "methods") {
              node.id = generateKey();
              return { entityType: "Method" };
            }
            if (nodeContext.navigationProperty.name === "properties") {
              node.id = generateKey();
              return { entityType: "Property" };
            }
            if (nodeContext.navigationProperty.name === "events") {
              node.id = generateKey();
              return { entityType: "Event" };
            }
          }
        }
        if (mappingContext.query.fromEntityType && mappingContext.query.fromEntityType.shortName === "Package") {
          if (nodeContext.nodeType === "root") {
            node.id = generateKey();
            node.repositories = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = Object.keys(node.jspm.dependencies)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                node.repositories.push({
                  name: key,
                  path: node.jspm.dependencies[key],
                  packageConfigId: node.id
                });
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"]) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return { entityType: "Package" };
          }
          if (nodeContext.navigationProperty) {
            if (nodeContext.navigationProperty.name === "repositories") {
              node.id = generateKey();
              return { entityType: "RepositoryDTO" };
            }
          }
        }
      }
    });
    function generateKey() {
      lastKey += 1;
      return lastKey;
    }
  }

  return {
    setters: [function (_breeze) {
      breeze = _breeze["default"];
    }],
    execute: function () {
      "use strict";

      lastKey = 0;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2pzb24tcmVzdWx0cy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBTyxNQUFNLEVBRVQsT0FBTzs7bUNBRUsscUJBQXFCOztBQUE5QixXQUFTLHFCQUFxQixHQUFHO0FBQ3RDLFdBQU8sSUFBSSxNQUFNLENBQUMsa0JBQWtCLENBQUM7QUFDbkMsVUFBSSxFQUFFLGFBQWE7O0FBRW5CLG9CQUFjLEVBQUUsd0JBQVUsSUFBSSxFQUFFO0FBQzlCLFlBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDM0IsWUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7QUFDdEUsZUFBTyxPQUFPLENBQUM7T0FDaEI7O0FBRUQsZUFBUyxFQUFFLG1CQUFVLElBQUksRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFO0FBQ3RELFlBQUksQ0FBQyxJQUFJLEVBQUU7QUFBRSxpQkFBTyxLQUFLLENBQUM7U0FBRTtBQUM1QixZQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsY0FBYyxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsS0FBSyxZQUFZLEVBQUU7QUFDekcsY0FBSSxXQUFXLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtBQUNuQyxnQkFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLEVBQUUsQ0FBQztBQUN4QixtQkFBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsQ0FBQztXQUNyQztBQUNELGNBQUksV0FBVyxDQUFDLGtCQUFrQixFQUFFO0FBQ2xDLGdCQUFJLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQ3JELGtCQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7QUFDekMsa0JBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxFQUFFLENBQUM7QUFDeEIscUJBQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDaEM7QUFDRCxnQkFBSSxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtBQUNyRCxrQkFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLEVBQUUsQ0FBQztBQUN4QixxQkFBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUNqQztBQUNELGdCQUFJLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO0FBQ3hELGtCQUFJLENBQUMsRUFBRSxHQUFHLFdBQVcsRUFBRSxDQUFDO0FBQ3hCLHFCQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQ25DO0FBQ0QsZ0JBQUksV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7QUFDcEQsa0JBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxFQUFFLENBQUM7QUFDeEIscUJBQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDaEM7V0FDRjtTQUNGO0FBQ0QsWUFBSSxjQUFjLENBQUMsS0FBSyxDQUFDLGNBQWMsSUFBSSxjQUFjLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO0FBQ3RHLGNBQUksV0FBVyxDQUFDLFFBQVEsS0FBSyxNQUFNLEVBQUU7QUFDbkMsZ0JBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxFQUFFLENBQUM7QUFDeEIsZ0JBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDOzs7Ozs7QUFDdkIsbUNBQWdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQTFDLEdBQUc7O0FBQ1Ysb0JBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO0FBQ3JCLHNCQUFJLEVBQUUsR0FBRztBQUNULHNCQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO0FBQ2pDLGlDQUFlLEVBQUUsSUFBSSxDQUFDLEVBQUU7aUJBQ3pCLENBQUMsQ0FBQztlQUNKOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0QsbUJBQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUM7V0FDbEM7QUFDRCxjQUFJLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRTtBQUNsQyxnQkFBSSxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxLQUFLLGNBQWMsRUFBRTtBQUMxRCxrQkFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLEVBQUUsQ0FBQztBQUN4QixxQkFBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsQ0FBQzthQUN4QztXQUNGO1NBQ0Y7T0FDRjtLQUNGLENBQUMsQ0FBQztBQUNILGFBQVMsV0FBVyxHQUFFO0FBQ3BCLGFBQU8sSUFBSSxDQUFDLENBQUM7QUFDYixhQUFPLE9BQU8sQ0FBQztLQUNoQjtHQUNGOzs7O0FBbkVNLFlBQU07Ozs7O0FBRVQsYUFBTyxHQUFHLENBQUMiLCJmaWxlIjoic2VydmljZXMvanNvbi1yZXN1bHRzLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==