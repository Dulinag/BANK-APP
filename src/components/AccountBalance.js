import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';


const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 7px;
  color: white;
`;

class AccountBalance extends Component {
  state = {
    credits: [],
    debits: [],
  };

  componentDidMount() {
    this.fetchCredits();
    this.fetchDebits();
  }

  fetchCredits = () => {
    let data = localStorage.getItem('credits');
    if (data) {
      this.setState({ credits: JSON.parse(data) });
    } else {
      fetch('https://johnnylaicode.github.io/api/credits.json')
        .then(response => response.json())
        .then(data => {
          this.setState({ credits: data });
          localStorage.setItem('credits', JSON.stringify(data));
        });
    }
  };

  fetchDebits = () => {
    let data = localStorage.getItem('debits');
    if (data) {
      this.setState({ debits: JSON.parse(data) });
    } else {
      fetch('https://johnnylaicode.github.io/api/debits.json') // Assuming a similar endpoint for debits
        .then(response => response.json())
        .then(data => {
          this.setState({ debits: data });
          localStorage.setItem('debits', JSON.stringify(data));
        });
    }
  };

  calculateBalance = () => {
    const { credits, debits } = this.state;
    const totalCredits = credits.reduce((acc, credit) => acc + credit.amount, 0);
    const totalDebits = debits.reduce((acc, debit) => acc + debit.amount, 0);
    return totalCredits - totalDebits;
  };

  render() {
    const balance = this.calculateBalance();
    return (
      <Title>
        <h1>Your Account Balance is ${balance.toFixed(2)}</h1>
      </Title>
    );
  }
}

export default AccountBalance;
