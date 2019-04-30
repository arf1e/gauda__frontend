import {Container, Row, Col, Button} from 'react-bootstrap';
import ContainerStyled from './styled/StyledJumbotron';
const ThreeColumnSections = () => (
<ContainerStyled>
<div class="container-fluid container-fluid-Cheese">
<div className="row text-center padding">
<Container>
  <Row>
    <Col xs={12}>
    <h1 className="display-4">Our new cheese!</h1>
    </Col>
  </Row>
  <Row>
      <Col xs={12}>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias tenetur sit corporis ex ipsum a, quas rerum distinctio facere. Dolorum.</p>
      </Col>
  </Row>
  <Row>
    <Col xs={12} sm={6} md={4}>
        <img src="/static/img/logo.png" alt="First Cheese"/>
        <h3>First Cheese</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, ipsa.</p>
        <Button variant="outline-secondary">Learn more</Button>
    </Col>
    <Col xs={12} sm={6} md={4}>
        <img src="/static/img/logo.png" alt="Second Cheese"/>
        <h3>Second Cheese</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, ipsa.</p>
        <Button variant="outline-secondary">Learn more</Button>
    </Col>
    <Col xs={12} sm={6} md={4}>
        <img src="/static/img/logo.png" alt="Third Cheese"/>
        <h3>Third Cheese</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, ipsa.</p>
        <Button variant="outline-secondary">Learn more</Button>
    </Col>
  </Row>
  <Row>
    <Col xs={12}>
    <hr className="my-4 welcome"/>
    </Col>
  </Row>
</Container>
</div>
</div>
</ContainerStyled>
);
export default ThreeColumnSections;