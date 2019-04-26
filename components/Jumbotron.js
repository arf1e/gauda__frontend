import { Jumbotron, Button } from 'react-bootstrap';
import StyledJumbotron from './styled/StyledJumbotron';

const JumbotronText = () => (
<Jumbotron>
  <h1 className = "Jumbotron__heading">New Cheese</h1>
  <p className = "Jumbotron__text">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ipsum labore 
  vitae itaque perferendis iure assumenda ipsa, veritatis nam explicabo cum repellendus aliquid 
  voluptas quasi sapiente quaerat illo tempora molestias tenetur qui quam sint placeat, 
  dicta magnam. Voluptatum incidunt, molestias?
  </p>
  <p>
    <Button variant="secondary" className = "Jumbotron__button">Learn more</Button>
  </p>
</Jumbotron>
);
export default JumbotronText;