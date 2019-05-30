import Link from 'next/link';
import JumbotronStyled from './styled/StyledJumbotron';

const JumbotronText = () => (
  <JumbotronStyled>
    <div className="container">
      <img src="/static/img/sheep.png" alt="Sheep" className="container__image"/>
      <div className="contentAboutBlock">
        <div className="contentAboutBlock__inner">
          <h2 className="contentAboutBlock__heading">HANDCRAFTED QUALITY AT SCALE</h2>
          <p className="contentAboutBlock__text">We provide our customers with products crafted with love to farming 
          traditions, but keep our prices low. Find out how is that possible!</p>
          <Link href="/about">	
              <a className="nav-link">
                <button className="contentAboutBlock__button">ABOUT US</button>
              </a>
          </Link>	
            
        </div>
      </div>
    </div>
  </JumbotronStyled>
);
export default JumbotronText;
