import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import LeftColumn from '../components/LeftColumnCatalog';
import Items from '../components/Items';
import Footer from '../components/Footer';

const StyledHeading = styled.div`
  padding: 20px;
  background-color: #124433;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.27'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  .inner {
    width: 280px;
    margin: 0 auto;
    text-align: center;
    background-color: white;
    padding: 15px;
    border-radius: 5px;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 15px;
    }
  }

  @media (min-width: ${({ theme }) => theme.tabletWidth}) {
    height: 30vh;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    .inner {
      width: 570px;

      h1 {
        font-size: 34px;
      }

      p {
        text-align: left;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
    height: 40vh;
    padding: 45px;

    .inner {
      width: 950px;

      h1 {
        font-size: 38px;
      }
    }
  }
`;

const Catalog = () => (
  <main>
    {/* Buy Section */}
    <StyledHeading>
      <div className="inner">
        <h1>Our Cheese!</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum id
          laboriosam blanditiis repudiandae aliquid eos, minus nobis distinctio
          saepe harum et. Provident nam sunt blanditiis dolores? Ipsam impedit
          labore id.
        </p>
      </div>
    </StyledHeading>
    <div className="container-fluid">
      <div className="row text-center padding">
        <Container>
          <Row>
            {/* Title */}
            <Col sm={12} className="welcome" />
          </Row>
          <Row>
            {/* Left Column to sort goods */}
            <Col sm={12} lg={3} className="text-justify textCheeseFarm">
              <LeftColumn />
            </Col>
            {/* Right column to buy goods */}
            <Col sm={12} lg={9}>
              <Items />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    <Footer />
  </main>
);

export default Catalog;
