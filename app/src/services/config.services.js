class ServicesConfig {
  constructor(){
    // When running locally
    this.basePath = '/cdn/';
    // On Server
    // this.basePath = 'http://sotaexchange.blob.core.windows.net/aurelia/';
    this.remoteServiceName = this.basePath;
  }
  buildURI(repo, version, resource){
    return repo + '/' + version + '/doc/' + resource
  }
}

export {
  ServicesConfig
}
