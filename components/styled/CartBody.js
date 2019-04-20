import styled from 'styled-components';

const CartBody = styled.div`
  height: 100%;
  width: 40%;
  position: fixed;
  padding: 20px;
  top: 0;
  right: 0;
  background-color: white;
  border: 5px solid;
  border-color: ${props => props.theme.mainColor};
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  transform: translateY(100%);
  ${props => props.shown && `transform: translateX(0);`};
`;

export default CartBody;
