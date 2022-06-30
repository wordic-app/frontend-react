import React from 'react';
import styled from 'styled-components';
import { ReactComponent as WordicLogo } from 'assets/logo.svg';
import PropTypes from 'prop-types';
import HeaderButton from 'pages/MainPage/HeaderSection/HeaderButton';
import HeaderLink from 'pages/MainPage/HeaderSection/HeaderLink';

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

const ButtonBox = styled.div``;

const HeaderSection = ({ sections }) => (
  <Container>
    <Logo>
      <WordicLogo height='40px' />
    </Logo>
    <nav>
      <ul>
        {sections.map((section) => (
          <HeaderLink key={section.id} section={section} />
        ))}
      </ul>
    </nav>
    <ButtonBox>
      <HeaderButton>register</HeaderButton>
      <HeaderButton>login</HeaderButton>
    </ButtonBox>
  </Container>
);

HeaderSection.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default HeaderSection;
