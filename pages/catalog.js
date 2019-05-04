import {Container, Row, Col} from 'react-bootstrap';
import LeftColumn from '../components/LeftColumnCatalog';
import Items from '../components/Items';
import Footer from '../components/Footer';
const Catalog = () => (
  <main>
      {/*Buy Section*/}
    <div className="container-fluid">
    <div className="row text-center padding">
      <Container>
        <Row>
          {/*Title*/}
          <Col sm={12} className="welcome">
            <h1>Our Cheese!</h1>
            <hr className="light"/>
          </Col>
        </Row>
        <Row>
          {/*Left Column to sort gods*/}
          <Col sm={12} lg={3} className="text-justify textCheeseFarm">
            <LeftColumn/>
          </Col>
          {/*Right column to buy gods*/}
          <Col sm={12} lg={9}>
            <Items />
          </Col>
        </Row>
      </Container>
    </div>
    </div>
    <Footer/> 
  </main>
  
);

export default Catalog;
