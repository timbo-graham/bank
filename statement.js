class Statement {

  constructor () {

    this.transaction_log = [];

  }

  log_deposit (amount, balance) {
    let date = this.date();
    this.transaction_log.push(`${date} || ${amount} || || ${balance}\n`);
  }

  log_withdrawal (amount, balance) {
    let date = this.date();
    this.transaction_log.push(`${date} || || ${amount} || ${balance}\n`);
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

  date () {
    let today = new Date();
    return today.toLocaleDateString(`en-UK`)
  }

}

module.exports = Statement;