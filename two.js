module.exports = {
  toUSD: toUSD
};


function toUSD(number){
  return number.toLocaleString("en-US", {style: "currency", currency: "USD"})
}
// console.log(toUSD(443439));
