import { Container, Row, Col } from 'react-bootstrap';
import SingleItem from '../components/SingleItem';

const Item = props => (
  <Container>
    <Row className="justify-content-md-center">
      <Col>
        <SingleItem id={props.query.id} />
      </Col>
    </Row>
  </Container>
);

export default Item;
