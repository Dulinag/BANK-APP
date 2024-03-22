/*==================================================
src/components/Home.js

The Home component is used to demonstrate the use of Link.
==================================================*/
import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Keyframes for animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/325143b6-4839-4676-b7f8-6892f9ba66c4/dfn3efm-748d1037-4fef-4ba0-945d-a5132355bf1c.jpg/v1/fill/w_1280,h_854,q_75,strp/unusual_planets_season_2___8k_wallpapers_series__6_by_dolbozhuy_dfn3efm-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvMzI1MTQzYjYtNDgzOS00Njc2LWI3ZjgtNjg5MmY5YmE2NmM0XC9kZm4zZWZtLTc0OGQxMDM3LTRmZWYtNGJhMC05NDVkLWE1MTMyMzU1YmYxYy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CW50f3WxYmkK-uiM4HudxEpicIJ1r9I21NeR8HLtra8'); 
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: white;
  animation: ${fadeIn} 1s ease-in-out;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  color: cyan;
  text-decoration: none;
  margin-bottom: 10px;
  animation: ${fadeIn} 1s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <Logo src="https://picsum.photos/200/200" alt="bank" />
        <Title>Bank of React</Title>
        <StyledLink to="/userProfile">User Profile</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/credits">Credits (to be implemented in the Assignment)</StyledLink>
        <StyledLink to="/debits">Debits (to be implemented in the Assignment)</StyledLink>
        <AccountBalance accountBalance={this.props.accountBalance} />
      </Container>
    );
  }
}

export default Home;
