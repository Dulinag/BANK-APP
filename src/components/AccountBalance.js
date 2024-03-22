import React, { Component } from 'react';

class AccountBalance extends Component {
  calculateBalance = () => {
    const credits = JSON.parse(localStorage.getItem('credits')) || [];
    const debits = JSON.parse(localStorage.getItem('debits')) || [];
    const totalCredits = credits.reduce((acc, credit) => acc + credit.amount, 0);
    const totalDebits = debits.reduce((acc, debit) => acc + debit.amount, 0);
    return totalCredits - totalDebits;
  };

  render() {
    const balance = this.calculateBalance();
    return (
      <div>
        <h1>Your Account Balance is ${balance.toFixed(2)}</h1>
      </div>
    );
  }
}

export default AccountBalance;
