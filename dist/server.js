var express = require('express');
var proxy = require('http-proxy-middleware');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname));
app.use(
  '/api',
  proxy({ target: 'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL', changeOrigin: true })
);
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
