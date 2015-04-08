System.register([], function (_export) {
  _export("isExternalLink", isExternalLink);

  // http://stackoverflow.com/a/1054862/725866

  _export("titleToSlug", titleToSlug);

  _export("toIndex", toIndex);

  // http://stackoverflow.com/a/28054735/725866
  function checkDomain(url) {
    if (url.indexOf("//") === 0) {
      url = location.protocol + url;
    }
    return url.toLowerCase().replace(/([a-z])?:\/\//, "$1").split("/")[0];
  }

  function isExternalLink(url) {
    return (url.indexOf(":") > -1 || url.indexOf("//") > -1) && checkDomain(location.href) !== checkDomain(url);
  }

  function titleToSlug(text) {
    return text.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-");
  }

  function toIndex(items, key) {
    var index = {},
        i,
        ii,
        item;
    for (i = 0, ii = items.length; i < ii; i++) {
      item = items[i];
      index[key(item)] = item;
    }
    return index;
  }

  return {
    setters: [],
    execute: function () {
      "use strict";
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs0QkFRZ0IsY0FBYzs7Ozt5QkFLZCxXQUFXOztxQkFNWCxPQUFPOzs7QUFsQnZCLFdBQVMsV0FBVyxDQUFDLEdBQUcsRUFBRTtBQUN4QixRQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFHO0FBQzVCLFNBQUcsR0FBRyxRQUFRLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztLQUMvQjtBQUNELFdBQU8sR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQ3RFOztBQUVNLFdBQVMsY0FBYyxDQUFDLEdBQUcsRUFBRTtBQUNsQyxXQUFTLENBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLElBQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUc7R0FDbkg7O0FBR00sV0FBUyxXQUFXLENBQUMsSUFBSSxFQUFFO0FBQ2hDLFdBQU8sSUFBSSxDQUNSLFdBQVcsRUFBRSxDQUNiLE9BQU8sQ0FBQyxVQUFVLEVBQUMsRUFBRSxDQUFDLENBQ3RCLE9BQU8sQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUM7R0FDdkI7O0FBQ00sV0FBUyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtBQUNsQyxRQUFJLEtBQUssR0FBRyxFQUFFO1FBQUUsQ0FBQztRQUFFLEVBQUU7UUFBRSxJQUFJLENBQUM7QUFDNUIsU0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDMUMsVUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQixXQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ3pCO0FBQ0QsV0FBTyxLQUFLLENBQUM7R0FDZCIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=