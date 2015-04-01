System.register(["aurelia-templating"], function (_export) {
  var Behavior, _createClass, _classCallCheck, ToggleAttachedBehavior;

  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ToggleAttachedBehavior = _export("ToggleAttachedBehavior", (function () {
        function ToggleAttachedBehavior(element) {
          _classCallCheck(this, ToggleAttachedBehavior);

          this.element = element;
        }

        _createClass(ToggleAttachedBehavior, {
          valueChanged: {
            value: function valueChanged(newValue) {}
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("toggle").withProperty("value", "valueChanged", "toggle");
            }
          },
          inject: {
            value: function inject() {
              return [Element];
            }
          }
        });

        return ToggleAttachedBehavior;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy90b2dnbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFFBQVEsaUNBRUgsc0JBQXNCOzs7O0FBRjNCLGNBQVEsc0JBQVIsUUFBUTs7Ozs7Ozs7O0FBRUgsNEJBQXNCO0FBU3RCLGlCQVRBLHNCQUFzQixDQVNyQixPQUFPLEVBQUU7Z0NBVFYsc0JBQXNCOztBQVUvQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7cUJBWFUsc0JBQXNCO0FBYWpDLHNCQUFZO21CQUFBLHNCQUFDLFFBQVEsRUFBQyxFQUVyQjs7O0FBZE0sa0JBQVE7bUJBQUEsb0JBQUU7QUFDZixxQkFBTyxRQUFRLENBQ1osZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQzFCLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3BEOztBQUVNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUFFOzs7O2VBUDFCLHNCQUFzQiIsImZpbGUiOiJyZXNvdXJjZXMvdG9nZ2xlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=