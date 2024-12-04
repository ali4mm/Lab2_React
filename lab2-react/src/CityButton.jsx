import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #2196F3; // Blue
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: #1976D2;
  }
`;

const Header = styled.h3`
  color: #2196F3; // Blue
`;

const CityButton = ({ onClick }) => (
  <>
    <Button onClick={onClick}>City</Button>
    <Header>City</Header>
  </>
);

export default CityButton;
