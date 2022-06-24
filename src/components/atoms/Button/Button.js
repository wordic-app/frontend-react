import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Container = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  padding: ${({ hasText }) => (hasText ? '8px 24px' : '8px')};
  overflow: hidden;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  background: transparent;
  border-radius: 8px;

  color: ${({ theme, variant, color }) => {
    if (variant === 'default') {
      return theme.color.buttonText;
    }
    return theme.color[color];
  }};

  border: ${({ theme, variant, color }) => {
    if (variant === 'default') {
      return '1px solid transparent';
    }
    return `1px solid ${theme.color[color]}`;
  }};

  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '12px';
      case 'large':
        return '18px';
      default:
        return '14px';
    }
  }};

  &::after {
    position: absolute;
    inset: 0;
    z-index: -1;
    content: '';
    width: 100%;
    transition: all 0.3s ease-in-out;

    background-color: ${({ theme, variant, color }) => {
      if (variant === 'default') {
        return theme.color[color];
      }
      return theme.color.buttonText;
    }};
  }

  &:hover {
    color: ${({ theme, variant }) => {
      if (variant === 'outlined') {
        return theme.color.buttonText;
      }
      return undefined;
    }};

    &::after {
      filter: ${({ variant }) => variant === 'default' && 'brightness(0.7)'};
      background-color: ${({ theme, variant, color }) => {
        if (variant === 'outlined') {
          return theme.color[color];
        }
        return undefined;
      }};
    }
  }
`;

const zoom = keyframes`
  to {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
`;

const Circle = styled.span`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  animation: ${zoom} 0.5s;
  display: none;
`;

const IconBox = styled.div`
  margin-right: ${({ hasText }) => hasText && '8px'};
`;

const Button = ({ color, variant, size, Icon, onClick, ...props }) => {
  const circleRef = useRef(null);

  const btnAnimation = (e) => {
    const top = e.clientY - e.target.offsetTop;
    const left = e.clientX - e.target.offsetLeft;

    circleRef.current.style.top = `${top}px`;
    circleRef.current.style.left = `${left}px`;
    circleRef.current.style.display = 'block';

    setTimeout(() => {
      circleRef.current.style.display = 'none';
    }, 300);
  };

  return (
    <div onClick={(e) => btnAnimation(e)} aria-hidden='true'>
      <Container
        color={color}
        size={size}
        variant={variant}
        hasText={props.children}
        onClick={onClick}
      >
        {Icon && size === 'small' && (
          <IconBox hasText={props.children}>
            <Icon size={14} />
          </IconBox>
        )}

        {Icon && size === 'medium' && (
          <IconBox hasText={props.children}>
            <Icon size={16} />
          </IconBox>
        )}

        {Icon && size === 'large' && (
          <IconBox hasText={props.children}>
            <Icon size={18} />
          </IconBox>
        )}

        <Circle ref={circleRef} />
        {props.children}
      </Container>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
  ]),
  Icon: PropTypes.elementType,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['default', 'outlined']),
};

Button.defaultProps = {
  children: undefined,
  color: 'primary',
  Icon: undefined,
  onClick: undefined,
  size: 'medium',
  variant: 'default',
};

export default Button;
