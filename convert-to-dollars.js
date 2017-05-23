//module 2

function convertToDollar(number) {
  var dollars = '';
  dollars += number;
  dollars.split();
  // dollars.reverse();
  // dollars.join();
  // dollars.replace(/(\d{3}(?!$))/g, "$1,");
  // dollars.split().reverse().join();
  // for (var i = dollars.length-1; i >= 0; --i) {
  //
  // }





  return '$' + dollars + '.00';
  //create empty string '$'
  //number.toFixed(2) - cuts off at hundreds place
  //loop -
  // while (dolalrs) {
  //
  // }

  //$x,xxx.00
}

module.exports = convertToDollar;
