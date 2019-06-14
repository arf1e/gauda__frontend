import { Container, Row, Col } from 'react-bootstrap';
import FooterStyled from './styled/FooterStyled';

const Footer = () => (
  <FooterStyled>
    <footer>
    <hr className="light" />
      <div className="container-fluid padding">
        <div className="row text-center">
          <Container>
            <Row>
              <Col md={4}>
                <h2>Contacts</h2>
                <div className="contactBlock">
                  <img src="/static/img/phone.png" alt="" className="footerIcon"/>
                  <p className="footerIcon__text"><a href="tel:+310616472414" className="footerphone">+31 (0)6 - 1647 2414</a></p>
                </div>
                <div className="contactBlock">
                  <img src="/static/img/mail.png" alt="" className="footerIcon"/>
                  <p className="footerIcon__text">info@goudacheese-experience.com</p>
                </div>
                <div className="contactBlock">
                  <img src="/static/img/2gis.png" alt="" className="footerIcon"/>
                  <p className="footerIcon__text">Lange Tiendeweg 78, 2801 KK Gouda, Netherlands</p>
                </div>
              </Col>
              <Col md={4}>
                <h2>Our hours</h2>
                <div className="hoursBlock">
                  <p>Monday: 9am - 5pm</p>
                  <p>Saturday: 10am - 4pm</p>
                  <p>Sunday: closed</p>
                </div>
                
              </Col>
              <Col md={4}>
                <h2>keep in touch</h2>
                <div className="mediaBlocks">
                  <div className="mediaBlock">
                    <a className = "socialLink" href="https://www.instagram.com/gouda_cheese_experience/" target="_blank">
                    <img src="/static/img/instagram.png" alt=""/>
                    </a>
                  </div>
                  <div className="mediaBlock">
                    <a className = "socialLink" href="https://www.facebook.com/CheeseExperienceGouda/" target="_blank">
                      <img src="/static/img/facebook.png" alt=""/>
                    </a>
                    
                  </div>
                </div>
                
                <h2>Subscribe to our newsletter</h2>

                <div className="messageInput">
                  <input type="email" id="messageInput__input" placeholder="Email"/>
                  <button id="messageInput__button"></button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <hr className="light" />
                <h5>&copy;gouda.nl</h5>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </footer>
  </FooterStyled>
);
export default Footer;
