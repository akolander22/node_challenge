module.exports = {
  randomNumber: randomNumber
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
