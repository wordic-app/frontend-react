import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = styled.li`
  list-style: none;
  display: inline-block;
  margin: 0 1rem;
  position: relative;

  & > a {
    color: white;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #edcc07;
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }

    &::after {
      display: block;
      content: '';
      width: 0;
      height: 0.1rem;
      background: #edcc07;
      transition: all 0.3s ease-in-out;
      left: 50%;
      position: absolute;
      border-radius: 2rem;
      bottom: -0.2rem;
    }
  }
`;

const HeaderLink = ({ section }) => {
  const { sectionName, label } = section;

  return (
    <Item>
      <a href={`#${sectionName}`} aria-label={label}>
        {label}
      </a>
    </Item>
  );
};

HeaderLink.propTypes = {
  section: PropTypes.shape({
    sectionName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeaderLink;
