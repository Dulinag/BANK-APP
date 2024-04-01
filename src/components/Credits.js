import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import AccountBalance from './AccountBalance'; // Import AccountBalance component

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


class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credits: JSON.parse(localStorage.getItem('credits')) || [],
      newCreditDescription: '',
      newCreditAmount: '',
      refreshBalanceKey: Date.now(), // Added to refresh AccountBalance component
    };
  }

  componentDidMount() {
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
  }
  

  // Handle input change for new credit description
  handleDescriptionChange = (event) => {
    this.setState({ newCreditDescription: event.target.value });
  }

  // Handle input change for new credit amount
  handleAmountChange = (event) => {
    this.setState({ newCreditAmount: event.target.value });
  }

  // Add new credit
  addCredit = () => {
    const { newCreditDescription, newCreditAmount } = this.state;
    if (newCreditDescription && newCreditAmount) {
      const newCredit = {
        description: newCreditDescription,
        amount: parseFloat(newCreditAmount),
        date: new Date().toISOString() // Set current date
      };
      const updatedCredits = [...this.state.credits, newCredit];
      this.setState({
        credits: updatedCredits,
        newCreditDescription: '',
        newCreditAmount: '',
        refreshBalanceKey: Date.now(), // Update key to refresh AccountBalance
      });
      localStorage.setItem('credits', JSON.stringify(updatedCredits)); // Save to local storage
    }
  };
  

  
  

  render() {
    return (
      <Container>
        <Title>Credits</Title>

        {/* Render AccountBalance component */}
        <AccountBalance key={this.state.refreshBalanceKey} /> {/* Use key to force refresh */}
        <div>
          <input type="text" placeholder="Description" value={this.state.newCreditDescription} onChange={this.handleDescriptionChange} />
          <input type="number" placeholder="Amount" value={this.state.newCreditAmount} onChange={this.handleAmountChange} />
          <button onClick={this.addCredit}>Add Credit</button>
        </div>

        <div>
        <StyledText>
          <h3>Credits List:</h3>
          </StyledText>
          <StyledText>
          <ul>
            {this.state.credits.map((credit, index) => (
              <li key={index}>
{credit.description}: ${credit.amount.toFixed(2)} - {credit.date ? new Date(credit.date).toLocaleDateString('en-US', { timeZone: 'America/New_York' }) : ''}
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

export default Credits;
