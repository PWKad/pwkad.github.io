System.register(["aurelia-http-client", "aurelia-path", "../util", "moment"], function (_export) {
  var HttpClient, join, toIndex, moment, _createClass, _classCallCheck, apiUrl, http, Repository, Release;

  _export("getTags", getTags);

  _export("getRepositories", getRepositories);

  function checkLocal() {
    var result = localStorage.getItem("au-docs");
    if (result) {
      return JSON.parse(result);
    } else {
      return false;
    }
  }

  function getRemote() {
    return Promise.all([http.local.get("../registry.json"), http.api.get("orgs/aurelia/repos").then(function (repos) {
      return toIndex(repos.content, function (r) {
        return r.full_name;
      });
    }, function (reason) {})]).then(function (result) {
      var registry = result[0].content,
          repoIndex = result[1];
      return registry.map(function (r) {
        return new Repository(r.name, r.fullName, repoIndex[r.fullName]);
      });
    });
  }

  function getTags(repo) {
    var _this = this;

    var tags = localStorage.getItem(repo.fullName);
    if (tags !== null) {
      repo.releases = JSON.parse(tags);
      return repo.releases;
    } else {
      return http.api.get(join(join("repos", repo.fullName), "releases")).then(function (releases) {
        repo.releases = releases.content.map(function (r) {
          return new Release(_this, r);
        });
        localStorage.setItem(repo.fullName, JSON.stringify(repo.releases));
        return repo.releases;
      });
    }
  }

  function getRepositories() {
    var result = checkLocal();
    if (result) {
      return Promise.resolve(result);
    } else {
      return getRemote().then(function (resp) {
        localStorage.setItem("au-docs", JSON.stringify(resp));
        return resp;
      });
    }
  }

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_aureliaPath) {
      join = _aureliaPath.join;
    }, function (_util) {
      toIndex = _util.toIndex;
    }, function (_moment) {
      moment = _moment["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      apiUrl = "https://api.github.com/";
      http = {
        api: new HttpClient().configure(function (builder) {
          return builder.withBaseUri(apiUrl);
        }),
        local: new HttpClient() };
      Repository = _export("Repository", (function () {
        function Repository(name, fullName, apiRepo) {
          _classCallCheck(this, Repository);

          this.name = name;
          this.fullName = fullName;
          this.releases = [];
          if (apiRepo) {
            this.description = apiRepo.description;
            this.stars = apiRepo.stargazers_count;
            this.lastUpdated = moment(apiRepo.updated_at).toDate();
          } else {
            this.description = null;
            this.stars = null;
            this.lastUpdated = null;
          }
        }

        _createClass(Repository, {
          load: {
            value: function load() {
              var _this = this;

              return http.api.get(join(join("repos", this.fullName), "releases")).then(function (releases) {
                _this.releases = releases.content.map(function (r) {
                  return new Release(_this, r);
                });
              });
            }
          }
        });

        return Repository;
      })());
      Release = _export("Release", (function () {
        function Release(repository, apiRelease) {
          _classCallCheck(this, Release);

          //this.repository = repository;
          this.name = apiRelease.name;
          this.tagName = apiRelease.tag_name;
          this.body = apiRelease.body;
          this.draft = apiRelease.draft;
          this.prerelease = apiRelease.prerelease;
          this.created = moment(apiRelease.created_at).toDate();
          this.published = moment(apiRelease.published_at).toDate();
        }

        _createClass(Release, {
          load: {
            value: function load() {}
          }
        });

        return Release;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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