/*
  Works with Express

  convert your query params to camel case from: Caps, underscore, and dash
  {
    FirstName: 'some first name',
    first_name: 'some first name',
    first-name: 'some first name'
  }
  =>
  {
    FirstName: 'some first name'
  }
*/
module.exports = function(queryParams, next) {
  var error = null;

  if (!queryParams) {
    error = 'queryParams is undefined';
    return next(error);
  }

  if (Array.isArray(queryParams)){
    error = 'queryParams is an array use querystring.parse';
    return next(error);
  }

  var newQueryParams = {};
  var requestQueryKeys = Object.keys(queryParams);
  if (requestQueryKeys.length === 0) {
    error = 'Request Query Params is empty object';
    return next(error);
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

    newQueryParams[lowerCaseFirstLetterInString(key)] = queryParams[key];
  });
  return next(error, newQueryParams);
};