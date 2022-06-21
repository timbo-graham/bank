const Bank = require(`./bank.js`);

describe(`statement class`, () => {
  it(`making a deposit saves transaction info to the statement array`, () => {
    const bank = new Bank();
    let today = new Date();

    bank.deposit(500);
    
    expect(bank.statement.transaction_log).toContain(`${today.toLocaleDateString(`en-UK`)} || 500.00 || || 500.00\n`);
  })

  it(`making a withdrawal saves transaction info to the statement array`, () => {
    const bank = new Bank();
    let today = new Date();

    bank.balance += 1000;
    bank.withdraw(500);
  
    expect(bank.statement.transaction_log).toContain(`${today.toLocaleDateString(`en-UK`)} || || 500.00 || 500.00\n`);
  })

  it(`can print a statement of all relevant transactions, in reverse order`, () => {
    const bank = new Bank();
    let today = new Date();

    bank.deposit(500);
    bank.withdraw(250);

    expect(bank.statement.print_statement()).toEqual(
      `date || credit || debit || balance\n${today.toLocaleDateString(`en-UK`)} || || 250.00 || 250.00\n${today.toLocaleDateString(`en-UK`)} || 500.00 || || 500.00`
      );
  })
})