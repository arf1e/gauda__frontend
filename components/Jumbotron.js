import { Container, Row, Col,Jumbotron, Button } from 'react-bootstrap';
import JumbotronStyled from './styled/StyledJumbotron';
const JumbotronText = () => (
<JumbotronStyled className="container-fluid align-items-center">
<Jumbotron className="row jumbotron">
<Container>
  <Row>
    <Col xs={12} md={9} lg={10} xl={10}>
      <p className = "lead">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ipsum labore 
    vitae itaque perferendis iure assumenda ipsa, veritatis nam explicabo cum repellendus aliquid 
    voluptas quasi sapiente quaerat illo tempora molestias tenetur qui quam sint placeat, 
    dicta magnam. Voluptatum incidunt, molestias?
    </p>
    </Col>
    <Col xs={12} md={3} lg={2} xl={2}>
    <Button variant="outline-secondary">Learn more</Button>
    </Col>
  </Row>
</Container>
</Jumbotron>
</JumbotronStyled>
);
export default JumbotronText;