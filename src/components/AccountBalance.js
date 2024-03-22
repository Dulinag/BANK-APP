/*==================================================
src/components/AccountBalance.js

The AccountBalance component displays account balance. It is included in other page views.
==================================================*/
import React, { Component } from 'react';

class AccountBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credits: [],
      debits: [],
      accountBalance: 0
    };
  }

  componentDidMount() {
    // Fetch data from the API endpoints for credits and debits
    fetch('https://johnnylaicode.github.io/api/credits.json')
      .then(response => response.json())
      .then(data => this.setState({ credits: data }));

    fetch('https://johnnylaicode.github.io/api/debits.json')
      .then(response => response.json())
      .then(data => this.setState({ debits: data }));
  }

  // Calculate account balance
  calculateAccountBalance = () => {
    const totalCredits = this.state.credits.reduce((total, credit) => total + credit.amount, 0);
    const totalDebits = this.state.debits.reduce((total, debit) => total + debit.amount, 0);
    const accountBalance = totalCredits - totalDebits;
    return accountBalance.toFixed(2); // Round to 2 decimal places
  }

  render() {
    return (
      <div>
        <h2>Account Balance</h2>
        <p>Balance: ${this.calculateAccountBalance()}</p>
      </div>
    );
  }
}

export default AccountBalance;
