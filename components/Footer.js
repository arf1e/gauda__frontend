import { Container, Row, Col } from 'react-bootstrap';
import FooterStyled from './styled/FooterStyled';

const Footer = () => (
  <FooterStyled>
    <footer>
      <div className="container-fluid padding">
        <div className="row text-center">
          <Container>
            <Row>
              <Col md={4}>
                <img src="/static/img/logo.png" alt="Logo" />
                <hr className="light" />
                <p>+(31 70) 364 64 73</p>
                <p>gauda@gmail.com</p>
                <p>Markt 35</p>
                <p>2801 JK Gouda, Netherlands</p>
              </Col>
              <Col md={4}>
                <hr className="light" />
                <h5>Our hours</h5>
                <hr className="light" />
                <p>Monday: 9am - 5pm</p>
                <p>Saturday: 10am - 4pm</p>
                <p>Sunday: closed</p>
              </Col>
              <Col md={4}>
                <hr className="light" />
                <h5>Our hours</h5>
                <hr className="light" />
                <p>Pushkin, St.Petersburg</p>
                <p>Pushkin, St.Petersburg</p>
                <p>Pushkin, St.Petersburg</p>
                <p>Pushkin, St.Petersburg</p>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <hr className="light" />
                <h5>&copy;gauda.nl</h5>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </footer>
  </FooterStyled>
);
export default Footer;
