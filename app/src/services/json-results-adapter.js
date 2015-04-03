import breeze from 'breeze';

var lastKey = 0;

export function getJsonResultsAdapter() {
  return new breeze.JsonResultsAdapter({
    name: "AureliaDocs",

    extractResults: function (data) {
      var results = data.results;
      if (!results) throw new Error("Unable to resolve 'results' property");
      return results;
    },

    visitNode: function (node, mappingContext, nodeContext) {
      if (!node) { return false; }
      if (mappingContext.query.fromEntityType && mappingContext.query.fromEntityType.shortName === 'Repository') {
        if (nodeContext.nodeType === 'root') {
          node.id = generateKey();
          return { entityType: "Repository" };
        }
        if (nodeContext.navigationProperty) {
          if (nodeContext.navigationProperty.name === 'classes') {
            node.isConstructor = node.is_constructor;
            node.id = generateKey();
            return { entityType: "Class" };
          }
          if (nodeContext.navigationProperty.name === 'methods') {
            node.id = generateKey();
            return { entityType: "Method" };
          }
          if (nodeContext.navigationProperty.name === 'properties') {
            node.id = generateKey();
            return { entityType: "Property" };
          }
          if (nodeContext.navigationProperty.name === 'events') {
            node.id = generateKey();
            return { entityType: "Event" };
          }
        }
      }
      if (mappingContext.query.fromEntityType && mappingContext.query.fromEntityType.shortName === 'Package') {
        if (nodeContext.nodeType === 'root') {
          node.id = generateKey();
          node.repositories = [];
          for (var key of Object.keys(node.jspm.dependencies)) {
            node.repositories.push({
              name: key,
              path: node.jspm.dependencies[key],
              packageConfigId: node.id
            });
          }
          return { entityType: "Package" };
        }
        if (nodeContext.navigationProperty) {
          if (nodeContext.navigationProperty.name === 'repositories') {
            node.id = generateKey();
            return { entityType: "RepositoryDTO" };
          }
        }
      }
    }
  });
  function generateKey(){
    lastKey += 1;
    return lastKey;
  }
}