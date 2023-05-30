import React from 'react';
import styled from 'styled-components';

type BurgerProps = {
  open?: boolean;
}

export const StyledBurger = styled.button<BurgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 99;
  margin-bottom: 1rem;
  
  
  &:focus {
    outline: none;
  }
  
  div {
    width: ${({ open }) => (open ? '0' : '1.5rem')};
    height: 0.25rem;
    background: #0f0f0f;
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger onClick={() => setOpen(!open)} open={open}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger