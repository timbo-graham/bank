const Bank = require(`./bank.js`);

describe(`bank class`, () => {
  it(`initialises with a balance of 0`, () => {
    bank = new Bank();

    expect(bank.balance).toEqual(0);
  })

  it(`a user can deposit a given amount, which will be reflected in their balance`, () => {
    bank = new Bank();
    bank.deposit(500);

    expect(bank.balance).toEqual(500);
  });

  it(`a user can withdraw a given amount, which will be reflected in their balance`, () => {
    bank = new Bank();
    bank.deposit(500)
    bank.withdraw(250);

    expect(bank.balance).toEqual(250);
  });

  it(`has a method which returns the current date, as dd/mm/yyyy`, () => {
    let today = new Date();

    expect(bank.date()).toEqual(today.toLocaleDateString(`en-UK`));
  });
  
  it(`making a deposit saves transaction info to the statement array`, () => {
    bank = new Bank();
    let today = new Date();

    bank.deposit(500);
    
    expect(bank.statement).toContain(`${today.toLocaleDateString(`en-UK`)} || 500 || || 500\n`);
  });

  it(`making a withdrawal saves transaction info to the statement array`, () => {
    bank = new Bank();
    let today = new Date();

    bank.balance += 1000;
    bank.withdraw(500);
  
    expect(bank.statement).toContain(`${today.toLocaleDateString(`en-UK`)} || || 500 || 500\n`);
  });

  it(`can print a statement of all relevant transactions, in reverse order`, () => {
    bank = new Bank();
    let today = new Date();

    bank.deposit(500);
    bank.withdraw(250);

    expect(bank.print_statement()).toEqual(
      `date || credit || debit || balance\n${today.toLocaleDateString(`en-UK`)} || || 250 || 250\n${today.toLocaleDateString(`en-UK`)} || 500 || || 500`
      );
  });

  it(`can provide the user's balance on request`, () => {
    bank = new Bank();
    bank.deposit(500);

    expect(bank.show_balance()).toEqual(`Your balance is currently £500.`);
  });
})