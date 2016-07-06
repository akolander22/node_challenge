var mod1 = require('./one.js');
var mod2 = require('./two.js');
var newAccount;
module.exports = {
  newRandomNumber: newRandomNumber,
  accountBalance: accountBalance,
}

function newRandomNumber() {
  newAccount = (mod2.toUSD(mod1.randomNumber(100,1000000)));
}
function accountBalance(){
  console.log("Account balance: \n" + newAccount);
}

// newRandomNumber();
// accountBalance();
