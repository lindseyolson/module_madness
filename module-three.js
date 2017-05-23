var random = require('./random-number');
var dollars = require('./convert-to-dollars');

exports.result = function() {
  return dollars(random(100, 1000000));
};

exports.texty = function() {
  return "Account balance:\n";
};
