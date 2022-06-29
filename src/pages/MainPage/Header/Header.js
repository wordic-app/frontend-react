import React from 'react';
import styled from 'styled-components';
import { ReactComponent as WordicLogo } from 'assets/logo.svg';

const links = ['home', 'features', 'pricing', 'contact'];

const Container = styled.header`
  width: 1440px;
  margin: 0 auto;
  padding: 24px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div``;

const HeaderLink = styled.li`
  list-style: none;
  display: inline-block;
  padding: 16px 24px;

  & > a {
    color: white;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #edcc07;
    }
  }
`;

const ButtonBox = styled.div``;

const GoButton = styled.button`
  margin: 0 12px;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;

  color: white;
  background-color: #6343d8;
`;

const Header = () => (
  <Container>
    <Logo>
      <WordicLogo />
    </Logo>
    <nav>
      <ul>
        {links.map((link) => (
          <HeaderLink key={link}>
            <a href={`#${link}`} aria-label={link}>
              {link}
            </a>
          </HeaderLink>
        ))}
      </ul>
    </nav>
    <ButtonBox>
      <GoButton>register</GoButton>
      <GoButton>login</GoButton>
    </ButtonBox>
  </Container>
);

export default Header;
