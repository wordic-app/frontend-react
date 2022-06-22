import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <button type='button' onClick={onClick}>
    button
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: undefined,
};

export default Button;
