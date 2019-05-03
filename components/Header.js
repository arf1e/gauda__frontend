/*
  Компонент, внутри которого собираются воедино все компоненты, необходимые на каждой странице.
*/
import styled from 'styled-components';
import Link from 'next/link';
import Nav from './Nav';
import Cart from './Cart';

const HeaderBody = styled.header`
 background-color:#f8f9fa;
  .nav-link{
  font-family: 'Roboto slab', sans-serif;
  font-weight: 400;
  font-size: 1.1em;
}
  .logo{
    margin-top: 0;
    padding: 0;
    width: 70%;
    height: 70%;
  }
  .navbar{
    padding: .8rem;
  }
  .navbar-nav li{
    padding-right: 20px;
  }
`;
class Header extends React.Component{
 
  state = {
    showMenu: false
    }
 
  render(){
    return(
    <HeaderBody className="bar navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link href="/">
          <a href="#" className="navbar-brand">
          <img src="/static/img/logo.png" alt="logo" className="logo"/>
          </a>
        </Link>
        <button className="navbar-toggler" data-toggle="collapse" onClick = {
          () => this.setState({showMenu: !this.state.showMenu})}>
          {this.state.showMenu ? <span className="navbar-toggler-icon"></span> : <span className="navbar-toggler-icon"></span>}
          
        </button>
        <div className={`collapse navbar-collapse ${this.state.showMenu ? 'show' : ''}`}>
          <Nav />
          <Cart/>
        </div>
      </div>
    </HeaderBody>
    );
    

  }
  
}

export default Header;
