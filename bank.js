const Statement = require("./statement");

class Bank {

  constructor () {

    this.balance = 0;
    this.statement = new Statement();

  }

  deposit (amount) {
    this.balance += amount;
    this.statement.log_deposit(amount, this.balance);
  }

  withdraw (amount) {
    this.balance -= amount;
    this.statement.log_withdrawal(amount, this.balance);
  }

  show_balance () {
    return `Your balance is currently £${this.balance}.`
  }

}

module.exports = Bank;