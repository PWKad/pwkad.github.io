// http://stackoverflow.com/a/28054735/725866
function checkDomain(url) {
  if (url.indexOf('//') === 0 ) {
    url = location.protocol + url;
  }
  return url.toLowerCase().replace(/([a-z])?:\/\//,'$1').split('/')[0];
}

export function isExternalLink(url) {
  return ( ( url.indexOf(':') > -1 || url.indexOf('//') > -1 ) && checkDomain(location.href) !== checkDomain(url) );
}

// http://stackoverflow.com/a/1054862/725866
export function titleToSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g,'')
    .replace(/ +/g,'-');
}
export function toIndex(items, key) {
  var index = {}, i, ii, item;
  for (i = 0, ii = items.length; i < ii; i++) {
    item = items[i];
    index[key(item)] = item;
  }
  return index;
}
