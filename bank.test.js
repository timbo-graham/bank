const Bank = require(`./bank.js`);

describe(`bank class`, () => {
  it(`initialises with a balance of 0`, () => {
    const bank = new Bank();

    expect(bank.balance).toEqual(0);
  })

  it(`a user can deposit a given amount, which will be reflected in their balance`, () => {
    const bank = new Bank();
    bank.deposit(500);

    expect(bank.balance).toEqual(500);
  })

  it(`a user can withdraw a given amount, which will be reflected in their balance`, () => {
    const bank = new Bank();
    bank.deposit(500)
    bank.withdraw(250);

    expect(bank.balance).toEqual(250);
  })

  it(`can provide the user's balance on request`, () => {
    const bank = new Bank();
    bank.deposit(500);

    expect(bank.show_balance()).toEqual(`Your balance is currently £500.00.`);
  })
})