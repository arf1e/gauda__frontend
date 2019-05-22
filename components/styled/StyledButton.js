import styled from 'styled-components';

export default styled.button`
  background-color: ${props => props.theme.mainColor};
  border: none;
  padding: 10px 40px;
  color: white;
  font-weight: bold;
  transition: 225ms;

  &:hover {
    background-color: ${({ theme }) => theme.mainSubColor};
  }

  &:active {
    background-color: ${({ theme }) => theme.mainActiveColor};
  }
`;
