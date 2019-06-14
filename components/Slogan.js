import React from "react";
import styled from 'styled-components';
const StyledSlogan = styled.div`
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
`;
class Slogan extends React.Component {
    render(){
        return (
            <StyledSlogan>
            <div className="Slogan">
            <p className="Slogan__text">
              Say Cheese
              <span className="Slogan__text--inner">
                About US
              </span>
              &mdash; Say Gouda &mdash;
            </p>
            </div>
            </StyledSlogan>
        );
    }
}
export default Slogan;