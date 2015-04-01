System.register(["./markdown"], function (_export) {
  var Markdown;

  _export("install", install);

  // import {Source} from './source';
  // import {Example} from './example';
  // import {ExampleContext} from './example-context'
  // import {Column} from './column';
  // import {File} from './file';

  function install(aurelia) {
    console.log(aurelia);
    console.log(Markdown);
    aurelia.globalizeResources(Markdown);

    // aurelia.container.registerInstance(
    //   ExampleContext,
    //   new ExampleContext('https://github.com/jdanyow/aurelia-converters-sample/blob/gh-pages'))
    // aurelia.withResources(Markdown, Source, Example, Column, File);
  }

  return {
    setters: [function (_markdown) {
      Markdown = _markdown.Markdown;
    }],
    execute: function () {
      "use strict";
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsUUFBUTs7cUJBT0EsT0FBTzs7Ozs7Ozs7QUFBaEIsV0FBUyxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQy9CLFdBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsV0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QixXQUFPLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7OztHQU10Qzs7OztBQWhCTyxjQUFRLGFBQVIsUUFBUSIsImZpbGUiOiJyZXNvdXJjZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==