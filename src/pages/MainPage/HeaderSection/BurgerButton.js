import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.button`
  @media (min-width: 799px) {
    display: none;
  }

  margin-right: 1rem;
  height: 3rem;
  width: 3rem;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;

  & span {
    width: 100%;
    height: 0.3rem;
    border-radius: 0.5rem;
    background-color: white;
    transition: all 0.3s ease-in-out;
    transform-origin: right;
  }

  & span:first-child {
    transform: ${({ show }) =>
      show ? 'rotate(-45deg) translateY(-0.5rem)' : 'none'};
  }

  & span:nth-child(2) {
    width: ${({ show }) => show && '100%'};
    transform: ${({ show }) =>
      show ? 'rotate(45deg) translateY(0.5rem)' : 'none'};
  }

  & span:last-child {
    width: 60%;
    display: ${({ show }) => (show ? 'none' : 'block')};
  }
`;

const BurgerButton = () => {
  const [show, setShow] = useState(false);

  return (
    <Container show={show} onClick={() => setShow(!show)}>
      <span />
      <span />
      <span />
    </Container>
  );
};

export default BurgerButton;
