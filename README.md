# query_params_mw

## Why
we got had all bunch of clients send us different query params some were all lower case, all caps and etc..

## Solution
We decide to keep everything camel case

## How to use

just ` npm i --save camel-query-params`
and add this to your code:  ``var camelQueryParams = require('camel-query-params');``

also you can checkout my express example, its basically look like this:
(Using Express)
```
app.get('/', function (req, res) {
  camelQueryParams(req.query, function(error, result){
    if (error) {
      console.error(error);
      return res.send('No query params or wrong query params check logs');
    }
    return res.send('Now we change the key to camel case : ' + Object.keys(result));
  });
})
```


Good Luck!
