import breeze from 'breeze';

class RepositoryConfig {
  constructor(){
    var DT = breeze.DataType;
    var Identity = breeze.AutoGeneratedKeyType.Identity;
    this.initialize = function (metadataStore) {
      // Repository information
      metadataStore.addEntityType({
        shortName: "Repository",
        namespace: "AureliaDocs",
        autoGeneratedKeyType: Identity,
        dataProperties: {
          id: { dataType: "Int32", isPartOfKey: true },
          name: { dataType: "String" },
          description: { dataType: "String" },
          isConstructor: { dataType: "Boolean" }
        },
        navigationProperties: {
          classes: {
            entityTypeName: "Class", isScalar: false,
            associationName: "Repository_Classes"
          },
          methods: {
            entityTypeName: "Method", isScalar: false,
            associationName: "Repository_Methods"
          },
          properties: {
            entityTypeName: "Property", isScalar: false,
            associationName: "Repository_Properties"
          },
          events: {
            entityTypeName: "Event", isScalar: false,
            associationName: "Repository_Events"
          },
          repoDTO: {
            entityTypeName: "RepositoryDTO", isScalar: true,
            associationName: "Repository_RepositoryDTO", foreignKeyNames: ["id"]
          }
        }
      });

      // Class information
      metadataStore.addEntityType({
        shortName: "Class",
        namespace: "AureliaDocs",
        autoGeneratedKeyType: Identity,
        dataProperties: {
          id: { dataType: "Int32", isPartOfKey: true },
          name: { dataType: "String" },
          file: { dataType: "String" },
          line: { dataType: "Int32" },
          description: { dataType: "String" },
          repositoryId: { dataType: "Int32" }
        },
        navigationProperties: {
          repository: {
            entityTypeName: "Repository", isScalar: true,
            associationName: "Repository_Classes", foreignKeyNames: ["repositoryId"]
          },
          methods: {
            entityTypeName: "Method", isScalar: false,
            associationName: "Class_Methods"
          },
          properties: {
            entityTypeName: "Property", isScalar: false,
            associationName: "Class_Properties"
          },
          events: {
            entityTypeName: "Event", isScalar: false,
            associationName: "Class_Events"
          }
        }
      });

      // Method information
      metadataStore.addEntityType({
        shortName: "Method",
        namespace: "AureliaDocs",
        dataProperties: {
          id: { dataType: "Int32", isPartOfKey: true },
          name: { dataType: "String" },
          line: { dataType: "Int32" },
          description: { dataType: "String" },
          repositoryId: { dataType: "Int32" },
          classId: { dataType: "Int32" }
        },
        navigationProperties: {
          repository: {
            entityTypeName: "Repository", isScalar: true,
            associationName: "Repository_Classes", foreignKeyNames: ["repositoryId"]
          },
          classDef: {
            entityTypeName: "Class", isScalar: true,
            associationName: "Class_Methods", foreignKeyNames: ["classId"]
          },
          params: {
            entityTypeName: "Parameter", isScalar: false,
            associationName: "Method_Parameters"
          }
        }
      });

      // Param information
      metadataStore.addEntityType({
        shortName: "Param",
        namespace: "AureliaDocs",
        autoGeneratedKeyType: Identity,
        dataProperties: {
          id: { dataType: "Int32", isPartOfKey: true },
          name: { dataType: "String" },
          description: { dataType: "String" },
          type: { dataType: "String" }
        }
      });

      // Property information
      metadataStore.addEntityType({
        shortName: "Property",
        namespace: "AureliaDocs",
        autoGeneratedKeyType: Identity,
        dataProperties: {
          id: { dataType: "Int32", isPartOfKey: true },
          name: { dataType: "String" }
        }
      });

      // Event information
      metadataStore.addEntityType({
        shortName: "Event",
        namespace: "AureliaDocs",
        autoGeneratedKeyType: Identity,
        dataProperties: {
          id: { dataType: "Int32", isPartOfKey: true },
          name: { dataType: "String" }
        }
      });

      // Registry information
      metadataStore.addEntityType({
        shortName: "Registry",
        namespace: "AureliaDocs",
        autoGeneratedKeyType: Identity,
        dataProperties: {
          id: { dataType: "Int32", isPartOfKey: true },
          name: { dataType: "String" },
          type: { dataType: "String" },
          tag: { dataType: "String" },
          parent: { dataType: "String" }
        }
      });

      metadataStore.registerEntityTypeCtor(
        'Repository', null, repositoryInitializer);
      metadataStore.registerEntityTypeCtor(
        'Class', null, classInitializer);
      metadataStore.registerEntityTypeCtor(
        'Method', null, methodInitializer);
      metadataStore.registerEntityTypeCtor(
        'Registry', null, registryInitializer);

      function repositoryInitializer(repository) {
        repository.visible = false;
      }
      function classInitializer(classObj) {
        classObj.visible = false;
      }
      function methodInitializer(method) {
        method.visible = false;
      }
      function registryInitializer(registry) {
        registry.searchName = function () {
          return registry.parent + '/' + registry.name + '#' + registry.type;
        }
      }
    }
  }
}

export {
  RepositoryConfig
}