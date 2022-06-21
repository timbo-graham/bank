const Bank = require(`./bank.js`);

class Statement {

  constructor () {

    this.transaction_log = [];

  }

  print_statement () {
    const header = "date || credit || debit || balance\n"
    this.sort_by_newest_transaction();
    const statement_body = this.transaction_log.join(``);
    const statement = (header + statement_body).trim();
    return statement;
  }

  sort_by_newest_transaction () {
    this.transaction_log.reverse();
  }

}

module.exports = Statement;