import styled from 'styled-components';
const ButtonStyled = styled.button`
  position: fixed;
  bottom:50px;
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

class ScrollButton extends React.Component {
  
  constructor() {
    super();
    this.state = {
        intervalId: 0,
        isActive:false,
    };
  }

  /*
  componentDidMount(){
    window.addEventListener("scroll", () => {
      const isTop = window.pageYOffset < 300;
      if (isTop !== true){
        this.setState({isActive : true});
      }else{
        this.setState({isActive : false});
      }
    })
  }

  componentWillMount(){
    window.removeEventListener("scroll");
  }
  */
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - window.pageYOffset/10);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), 16.66);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
    return (
      <ButtonStyled 
      onClick={ () => { this.scrollToTop();} } 
      className={ this.state.isActive ? 'active' : ''}>
      </ButtonStyled>
    );
   } 
}

export default ScrollButton;
