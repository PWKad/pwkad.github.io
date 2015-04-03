System.register([], function (_export) {
  var _createClass, _classCallCheck, ServicesConfig;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ServicesConfig = (function () {
        function ServicesConfig() {
          _classCallCheck(this, ServicesConfig);

          // When running locally
          this.basePath = "/cdn/";
          // On Server
          // this.basePath = 'http://sotaexchange.blob.core.windows.net/aurelia/';
          this.remoteServiceName = this.basePath;
        }

        _createClass(ServicesConfig, {
          buildURI: {
            value: function buildURI(repo, version, resource) {
              return repo + "/" + version + "/doc/" + resource;
            }
          }
        });

        return ServicesConfig;
      })();

      _export("ServicesConfig", ServicesConfig);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3FDQUFNLGNBQWM7Ozs7Ozs7Ozs7O0FBQWQsb0JBQWM7QUFDUCxpQkFEUCxjQUFjLEdBQ0w7Z0NBRFQsY0FBYzs7O0FBR2hCLGNBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDOzs7QUFHeEIsY0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDeEM7O3FCQVBHLGNBQWM7QUFRbEIsa0JBQVE7bUJBQUEsa0JBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUM7QUFDL0IscUJBQU8sSUFBSSxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsT0FBTyxHQUFHLFFBQVEsQ0FBQTthQUNqRDs7OztlQVZHLGNBQWM7OztnQ0FjbEIsY0FBYyIsImZpbGUiOiJzZXJ2aWNlcy9jb25maWcuc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==