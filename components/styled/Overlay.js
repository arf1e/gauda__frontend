import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* background-color: rgba(${({ theme }) => theme.mainColorRGB}, 0.7); */
  background-color: rgba(255,255,255, 1);
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(100%);
  ${props => props.shown && `transform: translateX(0);`};
  transition: 225ms;
`;

export default Overlay;
