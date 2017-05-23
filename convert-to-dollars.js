//module 2

function convertToDollar(number) {
  number = number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return number;
}

module.exports = convertToDollar;
