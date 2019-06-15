import styled from 'styled-components';
import Spoiler from './Spoiler';

const StyledQuestions = styled.div`
  .headingTwo {
    position: relative;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    border: 4px double rgba(255, 255, 255, 0.25);
    border-width: 4px 0;
    margin: 1.5em 0em;
    line-height: 2em;
  }
  .category {
    text-transform: uppercase;
    margin: 30px 0;
  }
  .headingFour {
    text-transform: uppercase;
    padding: 0rem 1em;
    margin: 2rem 0;
    &:hover {
      cursor: pointer;
    }
    &__text {
      margin: 1rem 0;
      padding: 0rem 2rem;
      text-align: justify;
      font-size: 20px;
      line-height: 2rem;
    }
    .toggle-button {
      display: block;
      position: relative;
      padding-left: 35px;
      outline: none;
      background: none;
      border: none;
      padding: 0;
      margin: 0;
    }
  }
`;
class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
    };
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
    event.preventDefault();
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  render() {
    return (
      <StyledQuestions>
        <h2 className="headingTwo">Most popular questions</h2>

        <h3 className="category">1. product boxes</h3>
        <Spoiler
          question=" HOW LONG TO KEEP PRODUCTS FROM MY CHEESE BOX?"
          answer="Expiration date is listed on KaasBox. Products in KaasBox cannot be
            used after the expiration date. Products should be stored in the
            refrigerator no more than seven degrees Celsius. After opening
            products have a limited shelf life."
        />
        <Spoiler
          question="How best to store food?"
          answer="Products should be stored in the refrigerator no more than seven
          degrees Celsius."
        />

        <h3 className="category">2. Order and pay</h3>
        <Spoiler
          question="WILL I GET CONFIRMATION OF PAYMENT FOR A BOX OF CHEESE?"
          answer="Yes. After placing your order, you will receive an email confirming
            your order and payment."
        />

        <h3 className="category">3. Delivery</h3>
        <Spoiler
          question="How is cooling temperature guaranteed?"
          answer="We use a closed and fully cooled circuit. This ensures the freshness
            and temperature of the cooling products in our cheese boxes."
        />
        <Spoiler
          question="Can I choose the delivery time?"
          answer="Unfortunately, at present we have no possibility to choose the
            delivery time."
        />
        <h3 className="category">4. return goods</h3>
        <Spoiler
          question="Is it possible to return the goods?"
          answer="Due to the quality and shelf life of fresh produce return is not
            possible. Perishable goods or products with a limited shelf life are
            legally excluded from the right of withdrawal."
        />
      </StyledQuestions>
    );
  }
}
export default Questions;
