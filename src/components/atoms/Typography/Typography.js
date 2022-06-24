import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  color: ${({ theme }) => theme.color.text.primary};
  font-weight: ${({ variant }) => (variant === 'p' ? 400 : 500)};
  line-height: ${({ variant }) => (variant === 'p' ? 1.5 : 1.2)};
  margin-bottom: ${({ variant }) => (variant === 'p' ? 0 : '0.5rem')};

  text-align: ${({ align }) => align};

  font-size: ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return '32px';
      case 'h2':
        return '26px';
      case 'h3':
        return '20px';
      case 'h4':
        return '18px';
      case 'h5':
      case 'h6':
        return '16px';
      default:
        return '14px';
    }
  }};
`;

const Typography = ({ variant, align, ...props }) => (
  <Container as={variant} variant={variant} align={align}>
    {props.children}
  </Container>
);

Typography.propTypes = {
  align: PropTypes.oneOf(['center', 'inherit', 'left', 'right', 'justify']),
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  children: PropTypes.string,
};

Typography.defaultProps = {
  align: 'inherit',
  variant: 'p',
  children: null,
};

export default Typography;
