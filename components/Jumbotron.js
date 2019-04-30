import { Jumbotron, Button } from 'react-bootstrap';
import JumbotronStyled from './styled/StyledJumbotron';
const JumbotronText = () => (
<JumbotronStyled>
<Jumbotron>
  <p className = "Jumbotron__text">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ipsum labore 
  vitae itaque perferendis iure assumenda ipsa, veritatis nam explicabo cum repellendus aliquid 
  voluptas quasi sapiente quaerat illo tempora molestias tenetur qui quam sint placeat, 
  dicta magnam. Voluptatum incidunt, molestias?
  </p>
  <p>
    <Button variant="outline-secondary">Learn more</Button>
  </p>
</Jumbotron>
</JumbotronStyled>
);
export default JumbotronText;