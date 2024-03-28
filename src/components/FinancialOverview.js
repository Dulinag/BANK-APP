import React, { Component } from 'react';
import Credits from './Credits'; // Adjust the import paths as necessary
import Debits from './Debits';
import AccountBalance from './AccountBalance';

class FinancialOverview extends Component {
  state = {
    credits: [],
    debits: [],
  };

  componentDidMount() {
    // Fetch initial data if necessary or you can initially load them in Credits and Debits components
  }

  addCredit = (credit) => {
    this.setState((prevState) => ({
      credits: [...prevState.credits, credit],
    }));
  };

  addDebit = (debit) => {
    this.setState((prevState) => ({
      debits: [...prevState.debits, debit],
    }));
  };

  render() {
    return (
      <div>
        <AccountBalance credits={this.state.credits} debits={this.state.debits} />
        <Credits addCredit={this.addCredit} credits={this.state.credits} />
        <Debits addDebit={this.addDebit} debits={this.state.debits} />
      </div>
    );
  }
}

export default FinancialOverview;
