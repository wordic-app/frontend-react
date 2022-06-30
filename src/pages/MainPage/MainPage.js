import React from 'react';
import styled from 'styled-components';
import Header from 'pages/MainPage/HeaderSection/HeaderSection';

const sections = [
  { id: 1, label: 'home', sectionName: 'section-home' },
  { id: 2, label: 'features', sectionName: 'section-features' },
  { id: 3, label: 'pricing', sectionName: 'section-pricing' },
  { id: 4, label: 'contact', sectionName: 'section-contact' },
];

const Container = styled.div`
  width: 100%;
`;

const MainPage = () => (
  <Container>
    <Header sections={sections} />
  </Container>
);

export default MainPage;
