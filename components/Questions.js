import styled from 'styled-components';
const StyledQuestions = styled.div`
.headingTwo{
  position:relative;
  text-align:center;
  text-transform: uppercase;
  letter-spacing: .5em;
  border: 4px double rgba(255,255,255,.25);
  border-width: 4px 0;
  margin: 1.5em 0em;
  line-height:2em;
}
.headingThree{
  text-transform:uppercase;
  text-align:center;
  margin:3rem 0;
}
.headingFour{
  text-transform:uppercase;
  padding:0rem 1em;
  margin:2rem 0;
  &__text{
    margin:1rem 0;
    padding:0rem 2rem;
    text-align:justify;
    font-size:20px;
    line-height:2rem;
  }
} 
`;
class Questions extends React.Component{
    render(){
        return(
            <StyledQuestions>
            <h2 className="headingTwo">Most popular questions</h2>
            

            <h3 className="headingThree">product boxes</h3>


            <h4 className="headingFour">HOW LONG TO KEEP PRODUCTS FROM MY CHEESE BOX?</h4>
            <p className="headingFour__text">Expiration date is listed on KaasBox. Products in KaasBox cannot be used after the 
              expiration date. Products should be stored in the refrigerator no more than seven 
              degrees Celsius. After opening products have a limited shelf life.</p>

            <h4 className="headingFour">how best to store food?</h4>
            <p className="headingFour__text">Products should be stored in the refrigerator no more than seven degrees Celsius.</p>
            

            <h3 className="headingThree">Order and pay</h3>

            <h4 className="headingFour">WILL I GET CONFIRMATION OF PAYMENT FOR A BOX OF CHEESE?</h4>
            <p className="headingFour__text">Yes. After placing your order, you will receive an email confirming your order and payment.</p>


            <h3 className="headingThree">Delivery</h3>

            <h4 className="headingFour">HOW IS COOLING TEMPERATURE GUARANTEED?</h4>
            <p className="headingFour__text">We use a closed and fully cooled circuit. This ensures the freshness and temperature 
              of the cooling products in our cheese boxes.</p>

            <h4 className="headingFour">CAN I CHOOSE THE DELIVERY TIME?</h4>
            <p className="headingFour__text">Unfortunately, at present we have no possibility to choose the delivery time.</p>


            <h3 className="headingThree">return goods</h3>

            <h4 className="headingFour">Is it possible to return the goods?</h4>
            <p className="headingFour__text">Due to the quality and shelf life of fresh produce return is not possible. 
              Perishable goods or products with a limited shelf life are legally excluded from the right of withdrawal.</p>
            </StyledQuestions>
        );
    }
}
export default Questions;