import styled from 'styled-components';
const ButtonStyled = styled.button`
  position: fixed;
  bottom:-50px;
  color: white; 
  right: 1%;
  width: 50px;
  height: 50px;
  border: 2px solid black;
  border-radius: 50%;
  background: ${props => props.theme.mainActiveColor};
  z-index: 100;
  outline: 0!important;
  cursor: pointer;
  transition: .4s;
  &:after{
    content: "";
    width: 10px;
    height: 10px;
    border-top: 2px solid white;
    border-left: 2px solid white;
    transform: rotate(45deg);
    position: absolute;
    top: 4px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .active{
    bottom:50px;  
}

`;

class ButtonUp extends React.Component{
  constructor(props) {
    super(props);
    this.ButtonVisible = this.ButtonVisible.bind(this);
    this.ButtonUp = this.ButtonUp.bind(this);
  }

  ButtonVisible(e) {
    e.preventDefault();
    window.pageYOffset >= 300 ? ButtonStyled.props.className ="active" : ButtonStyled.props.className = "";
  }

  ButtonUp(e){
    e.preventDefault();
    if (window.pageYOffset > 0){
      window.scrollTo(0,0);
    }
  }
  
  render(){
    return (
    <ButtonStyled onScroll={this.ButtonVisible} onClick={this.ButtonUp} className="">
    </ButtonStyled>
    );
  }
}
export default ButtonUp;
