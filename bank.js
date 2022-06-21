const Statement = require("./statement");

class Bank {

  constructor () {

    this.balance = 0;
    this.statement = new Statement();

  }

  deposit (amount) {
    this.balance += amount;
    let date = this.date();
    this.statement.transaction_log.push(`${date} || ${amount} || || ${this.balance}\n`);
  }

  withdraw (amount) {
    this.balance -= amount;
    let date = this.date();
    this.statement.transaction_log.push(`${date} || || ${amount} || ${this.balance}\n`);
  }

  show_balance () {
    return `Your balance is currently £${this.balance}.`
  }

  date () {
    let today = new Date();
    return today.toLocaleDateString(`en-UK`)
  }

}

module.exports = Bank;