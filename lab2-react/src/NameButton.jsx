import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #4CAF50; // Green
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: #45a049;
  }
`;

const Header = styled.h3`
  color: #4CAF50; // Green
`;

const NameButton = ({ onClick }) => (
  <>

    <Button onClick={onClick}>Name</Button>
    <Header>Name</Header>
  </>
);

export default NameButton;
