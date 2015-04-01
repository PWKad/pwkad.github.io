System.register(["aurelia-http-client", "./models/api"], function (_export) {
  var HttpClient, API, _createClass, _classCallCheck, url, Docs;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_modelsApi) {
      API = _modelsApi.API;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "doc/0.0.1/api.json";
      Docs = _export("Docs", (function () {
        function Docs(http) {
          _classCallCheck(this, Docs);

          this.http = http;
          this.pageContent = "";
          this.json = "";
          this.api = {};
        }

        _createClass(Docs, {
          activate: {
            value: function activate() {
              var _this = this;

              return this.http.get(url).then(function (response) {
                _this.json = JSON.parse(response.response);
                _this.api = new API(_this.json);
              });
            }
          },
          toggleVisible: {
            value: function toggleVisible(value) {
              value.visible = !value.visible;
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [HttpClient];
            }
          }
        });

        return Docs;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsVUFBVSxFQUNWLEdBQUcsaUNBRVAsR0FBRyxFQUVNLElBQUk7Ozs7QUFMVCxnQkFBVSxzQkFBVixVQUFVOztBQUNWLFNBQUcsY0FBSCxHQUFHOzs7Ozs7Ozs7QUFFUCxTQUFHLEdBQUcsb0JBQW9CO0FBRWpCLFVBQUk7QUFFSixpQkFGQSxJQUFJLENBRUgsSUFBSSxFQUFDO2dDQUZOLElBQUk7O0FBR2IsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsY0FBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDdEIsY0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZixjQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUNmOztxQkFQVSxJQUFJO0FBU2Ysa0JBQVE7bUJBQUEsb0JBQUU7OztBQUNSLHFCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUN6QyxzQkFBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUMsc0JBQUssR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQUssSUFBSSxDQUFDLENBQUM7ZUFDL0IsQ0FBQyxDQUFDO2FBQ0o7O0FBRUQsdUJBQWE7bUJBQUEsdUJBQUMsS0FBSyxFQUFDO0FBQ2xCLG1CQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUNoQzs7O0FBakJNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUFFOzs7O2VBRDdCLElBQUkiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=