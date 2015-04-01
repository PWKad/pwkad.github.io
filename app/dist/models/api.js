System.register([], function (_export) {
  var _classCallCheck, API, Class, Method, Param, Property, Event;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      API = _export("API", function API(obj) {
        _classCallCheck(this, API);

        console.log(obj.name);
        this.name = obj.name;
        this.description = obj.description;
        this.classes = [];
        this.methods = [];
        this.properties = [];
        this.events = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = obj.classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var child = _step.value;

            this.classes.push(new Class(child));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.properties = [];
        this.events = [];
        this.isConstructor = obj.is_constructor;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = obj.properties[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var child = _step2.value;

            this.properties.push(new Property(child));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = obj.events[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var child = _step3.value;

            this.events.push(new Event(child));
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      });

      // export class Module {
      //   constructor(moduleName, props){
      //     this.name = moduleName;
      //     this.description = props.description;
      //     this.classes = [];
      //     this.namespaces = [];
      //     this.submodules = [];
      //     this.tag = props.tag;
      //     this.properties = props;
      //     this.visible = false;
      //   }
      // }

      Class = _export("Class", function Class(obj) {
        _classCallCheck(this, Class);

        console.log(obj);
        this.name = obj.name;
        this.file = obj.file;
        this.line = obj.line;
        this.description = obj.description;
        this.methods = [];
        this.properties = [];
        this.events = [];
        this.isConstructor = obj.is_constructor;
        console.log(obj.methods);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = obj.methods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var child = _step.value;

            this.methods.push(new Method(child));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = obj.properties[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var child = _step2.value;

            this.properties.push(new Property(child));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = obj.events[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var child = _step3.value;

            this.events.push(new Event(child));
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        this.visible = false;
      });
      Method = _export("Method", function Method(obj) {
        _classCallCheck(this, Method);

        this.name = obj.name;
        this.line = obj.line;
        this.description = obj.description;
        this.params = [];
        if (obj.params) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = obj.params[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var child = _step.value;

              this.params.push(new Param(child));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"]) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
        this.visible = false;
      });
      Param = _export("Param", function Param(obj) {
        _classCallCheck(this, Param);

        this.name = obj.name;
        this.description = obj.description;
        this.type = obj.type;
      });
      Property = _export("Property", function Property(obj) {
        _classCallCheck(this, Property);

        this.name = obj.name;
      });
      Event = _export("Event", function Event(obj) {
        _classCallCheck(this, Event);

        this.name = obj.name;
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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