import breeze from 'breeze';
import {Models} from '../models/models';
import {Session} from './session';
import {GetEntityService} from './get-entity-service';
import {RegistryList} from './registry';
import {ServicesConfig} from './config.services';
import {getJsonResultsAdapter} from './json-results-adapter';
import {getTags, getRepositories} from './github';

// TODO: MOVE INTO SESSION VARIABLES
var REPOSITORY_PATH = 'api.json';
var PACKAGE_PATH = 'package.json';
var LOCAL_PATH = 'cache';
// var REPO = 'aurelia-dependency-injection';
// var VERSION = '0.5.0';

class DataContext {
  static inject() { return [Models, Session, GetEntityService, RegistryList, ServicesConfig, getJsonResultsAdapter]; }
  constructor(models, session, getEntityService, registryList, servicesConfig, getJsonResultsAdapter) {
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
      adapterName: 'webApi',
      serviceName: servicesConfig.remoteServiceName,
      hasServerMetadata: false,
      jsonResultsAdapter: jsonResultsAdapter
    });
    this.manager = configureBreezeManager(self.models);

    // Go prime the data that will be shared throughout the application
    self.primeData = function () {
      var promise = new Promise((resolve) => {
        self.loadRepositories().then(function () {
          Promise.all([
            self.getEntityList('Repository', true, servicesConfig.buildURI('aurelia-' + self.session.currentRepository.name, self.session.currentVersion.tagName, REPOSITORY_PATH)).then(loadApi),
            self.getEntityList('Package', true, servicesConfig.buildURI('aurelia-' + self.session.currentRepository.name, self.session.currentVersion.tagName, PACKAGE_PATH))
          ]).then(resp => {
            resolve('done');
          });
        });
      });
      return promise;

      function loadApi(response) {
        let json = response.response;
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
  getEntityList(type, forceRemote, path){
    var self = this;
    self.loadingData = true;
    return self.getEntityService.getEntityList(self.manager, type, forceRemote, path).then(queryCompleted);

    function queryCompleted(data){
      self.loadingData = false;
      return  data;
    }
  }
  getEntityById(type, id, forceRemote){
    var self = this;
    var path = self.servicesConfig.buildURI('aurelia-' + self.session.currentRepository.name, self.session.currentVersion.tagName, LOCAL_PATH)
    return self.getEntityService.getEntityById(self.manager, type, id, forceRemote, path);
  }
  createEntity(type, params){
    return this.manager.createEntity(type, params);
  }
  loadRepositories(){
    var self = this;
    return getRepositories()
      .then(repos => {
        repos.forEach(repo => {
          getTags(repo);
          self.session.repositories.push(repo);
        });
        var firstRepo = self.session.repositories.filter(function(repo) {
          return repo.name === 'dependency-injection';
        });
        self.session.currentRepository = firstRepo[0];
        var firstVersion = firstRepo[0].releases.filter(function(rel) {
          return rel.tagName === '0.5.0';
        });
        self.session.currentVersion = firstVersion[0];
      });
  }
}

export {
  DataContext
}
