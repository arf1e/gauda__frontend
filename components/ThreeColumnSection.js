import { Container, Row, Col, Button } from 'react-bootstrap';
import ContainerStyled from './styled/ThreeColumnSectionsStyled';
import Link from 'next/link';
import StyledButton from './styled/StyledButton';

const ThreeColumnSections = () => (
  <ContainerStyled>
    <div className="container-fluid container-fluid-Cheese">
      <div className="row text-center padding">
        <Container>
          <Row>
            <Col xs={12}>
              <h2 className="display-4">TRENDING</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={4} className="CheeseBlock">
              <img src="/static/img/grano.jpg" alt="Cheese" className="theeCheese"/>
              <h3>GRANA PADANO</h3>
              <p>
              Grana Padano and Parmigiano Reggiano, many of us know simply as Parmesan.
              </p>
              <p className="cost">
                13$ 
              </p>
              <Link
                href={{
                  pathname: '/item',
                  query: { id: 'cjwaps8999w9f0b0532011jbh' },
                }}
              >
                <a>
                  <StyledButton>View</StyledButton>
                </a>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={4} className="CheeseBlock">
              <img src="/static/img/ariana.jpg" alt="Whine" className="theeCheese"/>
              <h3>MARTI FABRA VINYES VELLES</h3>
              <p>
              Types: Red Unfortified still wines 
              </p>
              <p className="cost">
                13.50$ 
              </p>
              <Link
                href={{
                  pathname: '/item',
                  query: { id: 'cjwatny9ztlnc0b61grr0e3ar' },
                }}
              >
                <a>
                  <StyledButton>View</StyledButton>
                </a>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={4} className="CheeseBlock">
              <img src="/static/img/butter.jpg" alt="Butter" className="theeCheese"/>
              <h3>BEURRE DE BARATTE DEMI-SEL - SALTED BUTTER</h3>
              <p>
              from France by Rodolphe Le Meunier
              </p>
              <p className="cost">
              $11.75
              </p>
              <Link
                href={{
                  pathname: '/item',
                  query: { id: 'cjwatw9jgtpf50b61uxezthmt' },
                }}
              >
                <a>
                  <StyledButton>View</StyledButton>
                </a>
              </Link>
            </Col>
          </Row>
          <hr className="welcome" />
        </Container>
      </div>
    </div>
  </ContainerStyled>
);
export default ThreeColumnSections;
