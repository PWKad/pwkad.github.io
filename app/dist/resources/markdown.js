System.register(["aurelia-framework", "commonmark", "../util"], function (_export) {
  var Behavior, commonmark, isExternalLink, titleToSlug, _createClass, _classCallCheck, reader, writer, Markdown;

  function getHtml(markdown) {
    return writer.render(reader.parse(markdown));
  }

  function fixIndent(markdown) {
    /*
    This is intended to remove indentation that is not really part of
    the markdown, to preserve the ability to indent the markup properly.
    In the example below the total indentation will be reduced by 4 characters.
    |
    |<template>
    |  <markdown>
    |    # hello world
    |
    |    lorem ipsum bla bla
    |
    |        var x = 3;
    |
    |  </markdown>
    |</template>
    |
    */
    var result = /^( +)\S/im.exec(markdown);
    if (result) {
      markdown = markdown.replace(new RegExp("^ {" + result[1].length.toString() + "}", "gim"), "");
    }
    return markdown;
  }

  function fixBlockQuotes(markdown) {
    return markdown.replace(/^(\s*)&gt;/gim, function (match, p1) {
      return p1 + ">";
    });
  }

  function updateAnchorTargets(element) {
    // external links need target="_blank"
    var anchors = element.getElementsByTagName("a"),
        i,
        ii;
    for (i = 0, ii = anchors.length; i < ii; i++) {
      if (!isExternalLink(anchors[i].href)) continue;
      anchors[i].target = "_blank";
    }
  }

  function makeHeadingsLinkable(element) {
    var headings = element.querySelectorAll("h1,h2,h3,h4,h5,h6"),
        i,
        ii,
        h,
        title,
        slug;
    for (i = 0, ii = headings.length; i < ii; i++) {
      h = headings[i];
      title = h.textContent;
      slug = titleToSlug(title);
      h.id = slug;
      h.innerHTML = "<a id=\"" + slug + "\" class=\"anchor\" href=\"#" + slug + "\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-link\"></span></a>" + title;
    }
  }

  function applySyntaxHighlighting(element) {
    var codes = element.getElementsByTagName("code"),
        i,
        ii;
    for (i = 0, ii = codes.length; i < ii; i++) {
      // don't mess with code elements that are not enclosed in a pre.
      if (codes[i].parentNode.tagName !== "PRE") continue;

      // trim the code to avoid strange appearance with line numbers.
      codes[i].textContent = codes[i].textContent.trim();

      // make sure there's a language-* class.
      if (!/language-/.test(codes[i].className)) codes[i].className += " language-javascript";

      // // make sure the parent pre has the line-numbers class.
      // if (!/line-numbers/.test(codes[i].parentNode.className))
      //   codes[i].parentNode.className += ' line-numbers';

      // apply syntax highlighting.
      Prism.highlightElement(codes[i]);
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_commonmark) {
      commonmark = _commonmark["default"];
    }, function (_util) {
      isExternalLink = _util.isExternalLink;
      titleToSlug = _util.titleToSlug;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      reader = new commonmark.Parser();
      writer = new commonmark.HtmlRenderer();
      Markdown = _export("Markdown", (function () {
        function Markdown(element) {
          _classCallCheck(this, Markdown);

          this.element = element;
          element.className += " markdown-body";
          this.setContent(element.innerHTML || "");
        }

        _createClass(Markdown, {
          valueChanged: {
            value: function valueChanged(newValue) {
              this.setContent(newValue);
            }
          },
          setContent: {
            value: function setContent(markdown) {
              markdown = fixIndent(markdown);
              markdown = fixBlockQuotes(markdown);
              this.element.innerHTML = getHtml(markdown);

              updateAnchorTargets(this.element);
              makeHeadingsLinkable(this.element);
              applySyntaxHighlighting(this.element);
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("markdown").withProperty("value", "valueChanged").noView().skipContentProcessing();
            }
          },
          inject: {
            value: function inject() {
              return [Element];
            }
          }
        });

        return Markdown;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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Q0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7O0FBR25ELFVBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFDdkMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxzQkFBc0IsQ0FBQzs7Ozs7OztBQU8vQyxXQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEM7R0FDRjs7OztBQXJGTyxjQUFRLHFCQUFSLFFBQVE7O0FBQ1QsZ0JBQVU7O0FBQ1Qsb0JBQWMsU0FBZCxjQUFjO0FBQUUsaUJBQVcsU0FBWCxXQUFXOzs7Ozs7Ozs7QUFFL0IsWUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtBQUNoQyxZQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsWUFBWSxFQUFFO0FBa0Y3QixjQUFRO0FBVVIsaUJBVkEsUUFBUSxDQVVQLE9BQU8sRUFBRTtnQ0FWVixRQUFROztBQVdqQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixpQkFBTyxDQUFDLFNBQVMsSUFBSSxnQkFBZ0IsQ0FBQztBQUN0QyxjQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7U0FDMUM7O3FCQWRVLFFBQVE7QUFnQm5CLHNCQUFZO21CQUFBLHNCQUFDLFFBQVEsRUFBRTtBQUNyQixrQkFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMzQjs7QUFFRCxvQkFBVTttQkFBQSxvQkFBQyxRQUFRLEVBQUU7QUFDbkIsc0JBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0Isc0JBQVEsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEMsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFM0MsaUNBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLGtDQUFvQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuQyxxQ0FBdUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdkM7OztBQTNCTSxrQkFBUTttQkFBQSxvQkFBRTtBQUNmLHFCQUFPLFFBQVEsQ0FDWixhQUFhLENBQUMsVUFBVSxDQUFDLENBQ3pCLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQ3JDLE1BQU0sRUFBRSxDQUNSLHFCQUFxQixFQUFFLENBQUM7YUFDNUI7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFUMUIsUUFBUSIsImZpbGUiOiJyZXNvdXJjZXMvbWFya2Rvd24uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==