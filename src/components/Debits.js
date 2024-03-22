import React from 'react';
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
  color: #333;
  animation: ${fadeIn} 1s ease-in-out;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  color: #555;
  animation: ${fadeIn} 1s ease-in-out;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  animation: ${fadeIn} 1s ease-in-out;

  & > * {
    margin-bottom: 10px;
  }
`;

const Debits = (props) => {
  // Create the list of Debit items
  const debitsView = props.debits.map((debit) => (
    <ListItem key={debit.id}>
      {debit.amount} {debit.description} {debit.date.slice(0, 10)}
    </ListItem>
  ));

  return (
    <Container>
      <Title>Debits</Title>

      <List>{debitsView}</List>

      <StyledForm onSubmit={props.addDebit}>
        <input type="text" name="description" placeholder="Description" />
        <input type="number" name="amount" placeholder="Amount" />
        <button type="submit">Add Debit</button>
      </StyledForm>
      
      <Link to="/">Return to Home</Link>
    </Container>
  );
}

export default Debits;
