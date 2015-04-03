import breeze from 'breeze';

class GetEntityService {
  constructor(){
  }
  getEntityList(manager, entityType, forceRemote=false, endpoint, parentPropertyName, parentPropertyId){
    if (!manager) { throw new Error("[manager] cannot be a null parameter"); }

    // If it is not forceRemote, then try to get this from the local cache
    if (!forceRemote) {
      var results = this.getLocalList(manager, endpoint, entityType, parentPropertyName, parentPropertyId);
      if (results.length > 0) {
        console.log(results);
        return Promise.resolve(results);
      }
    }

    var query = breeze.EntityQuery
      .from(endpoint)
      .toType(entityType);

    return manager.executeQuery(query).then(querySucceeded);

    function querySucceeded(data) {
      return data.results;
    }
  }
  getEntityById(manager, entityType, id, forceRemote=false, endpoint){
    if (!manager) { throw new Error("[manager] cannot be a null parameter"); }

    // If it is not forceRemote, then try to get this from the local cache
    if (!forceRemote) {
      var results = this.getLocalById(manager, endpoint, entityType, 'id', id);
      if (results.length > 0) {
        return Promise.resolve(results[0]);
      }
    }
  }

  getLocalList(manager, endpoint, entityType, parentPropertyName, parentPropertyId) {
    var query = breeze.EntityQuery.from(endpoint)
      .toType(entityType);
    return manager.executeQueryLocally(query);
  }

  getLocalById(manager, resource, entityType, idPropertyName, id) {
    var query = breeze.EntityQuery.from(resource)
    .where(idPropertyName, '==', id)
    .toType(entityType);
    return manager.executeQueryLocally(query);
  }


}

export {
  GetEntityService
}