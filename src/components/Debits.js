import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import AccountBalance from './AccountBalance';
// Keyframes for animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/325143b6-4839-4676-b7f8-6892f9ba66c4/dfn3efm-748d1037-4fef-4ba0-945d-a5132355bf1c.jpg/v1/fill/w_1280,h_854,q_75,strp/unusual_planets_season_2___8k_wallpapers_series__6_by_dolbozhuy_dfn3efm-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvMzI1MTQzYjYtNDgzOS00Njc2LWI3ZjgtNjg5MmY5YmE2NmM0XC9kZm4zZWZtLTc0OGQxMDM3LTRmZWYtNGJhMC05NDVkLWE1MTMyMzU1YmYxYy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CW50f3WxYmkK-uiM4HudxEpicIJ1r9I21NeR8HLtra8'); 
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: white;
  animation: ${fadeIn} 1s ease-in-out;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  color: #007bff;
  text-decoration: none;
  margin-bottom: 10px;
  animation: ${fadeIn} 1s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;


const StyledText = styled.div`
  font-size: 18px;
  color: White;
  text-decoration: none;
  margin-bottom: 10px;
  animation: ${fadeIn} 1s ease-in-out;


`;
class Debits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debits: JSON.parse(localStorage.getItem('debits')) || [],
      newDebitDescription: '',
      newDebitAmount: '',
      refreshBalanceKey: Date.now(), // For refreshing AccountBalance
    };
  }

  componentDidMount() {
    if (this.state.debits.length === 0) {
      fetch('https://johnnylaicode.github.io/api/debits.json')
        .then(response => response.json())
        .then(data => {
          const debitsWithData = data.map(debit => ({
            ...debit,
            date: new Date().toISOString() // Assign current date for each fetched debit
          }));
          this.setState({ debits: debitsWithData });
          localStorage.setItem('debits', JSON.stringify(debitsWithData));
        });
    }
  }
  

  // Handle input change for new debit description
  handleDescriptionChange = (event) => {
    this.setState({ newDebitDescription: event.target.value });
  }

  // Handle input change for new debit amount
  handleAmountChange = (event) => {
    this.setState({ newDebitAmount: event.target.value });
  }

  // Add new debit
  addDebit = () => {
    const { newDebitDescription, newDebitAmount, debits } = this.state;
    if (newDebitDescription && newDebitAmount) {
      const newDebit = {
        description: newDebitDescription,
        amount: parseFloat(newDebitAmount),
        date: new Date().toISOString() // Assign current date for each new debit
      };
      const updatedDebits = [...debits, newDebit];
      this.setState({
        debits: updatedDebits,
        newDebitDescription: '',
        newDebitAmount: '',
        refreshBalanceKey: Date.now(),
      });
      localStorage.setItem('debits', JSON.stringify(updatedDebits));
    }
  }
  


  render() {
    return (
      <Container>
        <Title>Debits</Title>
       
        <AccountBalance key={this.state.refreshBalanceKey} />
        <div>
          <input type="text" placeholder="Description" value={this.state.newDebitDescription} onChange={this.handleDescriptionChange} />
          <input type="number" placeholder="Amount" value={this.state.newDebitAmount} onChange={this.handleAmountChange} />
          <button onClick={this.addDebit}>Add Debit</button>
        </div>
        <div>
          <StyledText>
          <h3>Debits List:</h3>
          </StyledText>

          <StyledText>
        <ul>
        {this.state.debits.map((debit, index) => (
  <li key={index}>
    {debit.description}: ${debit.amount.toFixed(2)} - {debit.date ? debit.date.split('T')[0] : ''}
  </li>
))}

       </ul>
      </StyledText>

        </div>
        <StyledLink to="/">Return to Home</StyledLink>
      </Container>
    );
  }
}

export default Debits;
