//module 1

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
  // return 'asdkfhasdkjfh';
}

module.exports = randomNumber;
