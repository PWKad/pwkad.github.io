System.register([], function (_export) {
  var _classCallCheck, API, Class, Method, Param, Property, Event;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      API = _export("API", function API(obj) {
        _classCallCheck(this, API);

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
      Class = _export("Class", function Class(obj) {
        _classCallCheck(this, Class);

        this.name = obj.name;
        this.file = obj.file;
        this.line = obj.line;
        this.description = obj.description;
        this.methods = [];
        this.properties = [];
        this.events = [];
        this.isConstructor = obj.is_constructor;
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