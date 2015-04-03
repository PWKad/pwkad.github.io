import {RepositoryConfig} from './api';
import {PackageConfig} from './packages';

class Models {
  static inject() { return [RepositoryConfig, PackageConfig]; }
  constructor(apiConfig, packageConfig) {
    this.initialize = function (manager) {
      apiConfig.initialize(manager.metadataStore);
      packageConfig.initialize(manager.metadataStore);
      // lookupConfig.initializeEnums(manager);
    }
  }
}

export {
  Models
}
