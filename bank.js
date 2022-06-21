class Bank {

  constructor () {

    this.balance = 0;
    this.statement = [];

  };

  deposit (amount) {
    this.balance += amount;
    let date = this.date();
    this.statement.push(`${date} || ${amount} || || ${this.balance}\n`);
  };

  withdraw (amount) {
    this.balance -= amount;
    let date = this.date();
    this.statement.push(`${date} || || ${amount} || ${this.balance}\n`);
  };

  print_statement () {
    const header = "date || credit || debit || balance\n"
    this.sort_by_newest_transaction();
    const statement_body = this.statement.join(``);
    const statement = (header + statement_body).trim();
    return statement;
  };

  show_balance () {
    return `Your balance is currently £${this.balance}.`
  };

  date () {
    let today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    today = dd + '/' + mm + '/' + yyyy;
    return today;
  }

  sort_by_newest_transaction () {
    this.statement.reverse();
  };

};

module.exports = Bank;