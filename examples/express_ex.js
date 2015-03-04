var express = require('express')
var app = express()
var camelQueryParams = require('../');
app.get('/', function (req, res) {
  camelQueryParams(req.query, function(error, result){
    if (error) {
      console.error(error);
      return res.send('No query params or wrong query params check logs');
    }
    return res.send('Now we change the key to camel case : ' + Object.keys(result));
  });
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})