import styled from 'styled-components';

const CartBody = styled.div`
@media (min-width:${props => props.theme.desktopWidth}){
  overflow-y: scroll;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  z-index: 10;
  ${props => props.shown && `transform: translateX(0);`};

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  footer {
    margin-top: auto;
  }

.close-container{
  position: relative;
  width: 50px;
  height: 50px;
  left:90%;
  cursor: pointer;
}

.leftright{
  height: 4px;
  width: 50px;
  position: absolute;
  margin-top: 24px;
  background-color: #F4A259;
  border-radius: 2px;
  transform: rotate(45deg);
  transition: all .3s ease-in;
}

.rightleft{
  height: 4px;
  width: 50px;
  position: absolute;
  margin-top: 24px;
  background-color: #F4A259;
  border-radius: 2px;
  transform: rotate(-45deg);
  transition: all .3s ease-in;
}

.close-container:hover .leftright{
  transform: rotate(-45deg);
  background-color:#F25C66;
}
.close-container:hover .rightleft{
  transform: rotate(45deg);
  background-color: #F25C66;
}
.close-container:hover label{
  opacity: 1;
}
}
`;

export default CartBody;
