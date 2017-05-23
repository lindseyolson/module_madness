var http = require('http');
var three = require('./module-three');

http.createServer(function(req, res) {
  res.write(three.texty());
  res.write(three.result());
  res.end();
}).listen(3000);
