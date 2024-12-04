import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #FF9800; // Orange
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: #FB8C00;
  }
`;

const Header = styled.h3`
  color: #FF9800; // Orange
`;

const EmailButton = ({ onClick }) => (
  <>
    <Button onClick={onClick}>Email</Button>
    <Header>Email</Header>
  </>
);

export default EmailButton;
