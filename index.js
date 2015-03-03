/*
  Works with Express

  convert your query params to camel case from: Caps, underscore, and dash

  ?FirstName => firstName
  ?first_name => firstName
  ?first-name => firstName
*/
module.exports = function(req, res, next) {

  if (!req || !req.query) {
    return next();
  }

  var requestQueryKeys = Object.keys(req.query);
  if (requestQueryKeys.length === 0) {
    return next();
  }

  var lowerCaseFirstLetterInString = function(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  };

  var convertUnderscoreToCaps = function(str) {
    str = str.replace(/_([a-z])/g, function (g) { return g[1].toUpperCase(); });
    return str.replace('_','');
  };

  var convertDashToCaps = function(str) {
    str = str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase();});
    return str.replace('-','');
  };

  requestQueryKeys.forEach(function(key){
    key = key.toString();
    if (key.indexOf('-') !== -1) {
      key = convertDashToCaps(key);
    }

    if (key.indexOf('_') !== -1) {
      key = convertUnderscoreToCaps(key);
    }

    req.query[lowerCaseFirstLetterInString(key)] = req.query[key];
  });

  return next();
};