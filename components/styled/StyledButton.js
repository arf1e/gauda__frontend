import styled from 'styled-components';

export default styled.button`
  background-color: ${props => props.theme.mainColor};
  border: ${props => props.theme.mainColor};
  padding: 10px 0;
  color: white;
  font-weight: bold;
  transition: 225ms;
  font-size: 14px;

  &:hover {
    background-color: ${props =>
      props.secondary ? '' : props.theme.mainSubColor};
  }

  &:active {
    background-color: ${props => props.theme.mainActiveColor};
  }
`;
