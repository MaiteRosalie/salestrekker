import React from 'react';
import { Button, ButtonProps } from 'rebass';
import styled from 'styled-components';

export type ButtonType = Pick<ButtonProps, Exclude<keyof ButtonProps, 'css'>> & {};
const StyledButton = styled(Button)`
  background-color: #2d73bf;
  color: white;
  transition: 0.1s linear background-color;
  font-size: 1rem;
  border: none;
  padding: 1em;
  cursor: pointer;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0 1px 3px;
  &:hover {
    background-color: #2867aa;
  }
`;

export const ButtonPrimary = (props: ButtonType) => {
  return <StyledButton as="button" {...props} />;
};
