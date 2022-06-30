import styled from 'styled-components';

const HeaderButton = styled.button`
  margin: 0 12px;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;

  color: white;
  background-color: #6343d8;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #000;
    background-color: #edcc07;
  }
`;

export default HeaderButton;
