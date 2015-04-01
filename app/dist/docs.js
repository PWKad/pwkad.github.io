System.register(["aurelia-http-client"], function (_export) {
  var HttpClient, _createClass, _classCallCheck, url, Docs;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "doc/page.md";
      Docs = _export("Docs", (function () {
        function Docs(http) {
          _classCallCheck(this, Docs);

          this.http = http;
          this.pageContent = "";
        }

        _createClass(Docs, {
          activate: {
            value: function activate() {
              var _this = this;

              return this.http.get(url).then(function (response) {
                _this.pageContent = response.response;
              });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFVBQVUsaUNBRWQsR0FBRyxFQUVNLElBQUk7Ozs7QUFKVCxnQkFBVSxzQkFBVixVQUFVOzs7Ozs7Ozs7QUFFZCxTQUFHLEdBQUcsYUFBYTtBQUVWLFVBQUk7QUFFSixpQkFGQSxJQUFJLENBRUgsSUFBSSxFQUFDO2dDQUZOLElBQUk7O0FBR2IsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsY0FBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7U0FDdkI7O3FCQUxVLElBQUk7QUFPZixrQkFBUTttQkFBQSxvQkFBRTs7O0FBQ1IscUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ3pDLHNCQUFLLFdBQVcsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO2VBQ3RDLENBQUMsQ0FBQzthQUNKOzs7QUFWTSxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFBRTs7OztlQUQ3QixJQUFJIiwiZmlsZSI6ImRvY3MuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==