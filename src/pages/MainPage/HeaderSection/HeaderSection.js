import React from 'react';
import styled from 'styled-components';
import { ReactComponent as WordicLogo } from 'assets/logo.svg';
import PropTypes from 'prop-types';
import HeaderButton from 'pages/MainPage/HeaderSection/HeaderButton';
import HeaderLink from 'pages/MainPage/HeaderSection/HeaderLink';
import BurgerButton from 'pages/MainPage/HeaderSection/BurgerButton';

const Container = styled.header`
  max-width: 1440px;
  height: 80px;
  margin: 0 auto;
  padding: 24px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    padding: 16px 0;
  }
`;

const Logo = styled.div`
  height: 40px;
`;

const NavBox = styled.nav`
  @media (max-width: 800px) {
    display: none;
  }
`;

const ButtonBox = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

const HeaderSection = ({ sections }) => (
  <Container>
    <Logo>
      <WordicLogo height='40px' />
    </Logo>
    <NavBox>
      <ul>
        {sections.map((section) => (
          <HeaderLink key={section.id} section={section} />
        ))}
      </ul>
    </NavBox>
    <ButtonBox>
      <HeaderButton>register</HeaderButton>
      <HeaderButton>login</HeaderButton>
    </ButtonBox>
    <BurgerButton sections={sections} />
  </Container>
);

HeaderSection.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default HeaderSection;
