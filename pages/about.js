import styled from 'styled-components';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import ScrollButton from '../components/ButtonUp';
const StyledAbout = styled.div`
.Slogan{
  position:relative;
  text-align:center;
  &__text{
    text-transform: uppercase;
    letter-spacing: .5em;
    display: inline-block;
    border: 4px double rgba(255,255,255,.25);
    border-width: 4px 0;
    padding: 1.5em 0em;
    &--inner{
      font: 700 4em/1 "Oswald", sans-serif;
      letter-spacing: 0;
      padding: .25em 0 .325em;
      display: block;
      margin: 0 auto;
      text-shadow: 0 0 80px rgba(255,255,255,.5);
    }
  }
}
.BannerImg{
  width:100%;
  margin:0 0 2%;
}
.contacts__heading-wrapper {
  width: 320px;
  margin: 0 auto;
}

.contacts__map {
  width: 100%;
  height: 50vh;
  overflow-y: hidden;
}

.contacts__map-iframe {
  width: 100%;
  height: 100%;
  border: none;
  margin-top: -150px;
  height: calc(50vh + 150px);
}

.contacts__map-wrapper {
  overflow-y: hidden;
}

.contacts__address {
  width: 270px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  border: 2px solid ${props => props.theme.mainVioletColor};
  padding: 15px;
  align-items: flex-end;
}

.contacts__building {
  width: 200px;
  margin-bottom: 10px;
  font-weight: normal;
  line-height: 20px;
  text-align: right;
}
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
@media (min-width: ${props => props.theme.tabletWidth}) {
  .contacts__heading-wrapper {
    width: 610px;
  }

  .contacts__map-wrapper {
    position: relative;
  }

  .contacts__map-iframe {
    height: calc(80vh + 150px);
    margin-top: -150px;
  }

  .contacts__address {
    position: absolute;
    background-color: white;
    left: 10%;
    top: 8%;
    overflow: hidden;
    border-width: 5px;
    z-index:1;
  }
}

@media (min-width: ${props => props.theme.desktopWidth}) {
  .contacts__heading-wrapper {
    width: 1050px;
  }
  .contacts__map--overlay {
      z-index:0;
      width:100%;
      height:100%;
      background:${props => props.theme.mainVioletColor};
      opacity:.3;
      position:absolute;
      transition: opacity .2s ease-in-out;
      &:hover{
            opacity:0;
            cursor:pointer;
      }
}
}   
`;
export default class About extends React.Component{
  state = {
    viewport: {
      width: "100%",
      height: 400,
      latitude: 52.0122863,
      longitude: 4.7108608,
      zoom: 16
    }
  };

    render(){
        return(
        <StyledAbout>
            <div className="Slogan">
            <p className="Slogan__text">
              Say Cheese
              <span className="Slogan__text--inner">
                About US
              </span>
              &mdash; Say Gouda &mdash;
            </p>
            </div>
            
            <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={"pk.eyJ1IjoicnVzYWcwIiwiYSI6ImNqd2JhaGVieTBoYXY0NG1tbzZzNmh5YWQifQ.gNic4MnbwS4icuI2Nb2sBQ"}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapStyle="mapbox://styles/rusag0/cjwbb0rcz0qvn1do05oopwtsz"
      />

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
            <Footer/>
            <ScrollButton/>
            </StyledAbout>
            
        );
    }
}