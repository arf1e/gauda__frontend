import styled from 'styled-components';
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
            <div className="contacts__map-wrapper">
            <div className="contacts__address">
                <strong className="contacts__building">
                2801 JK Gouda, Netherlands
                </strong>
                <strong className="contacts__street">Markt 35</strong>
            </div>
            <div className="contacts__map">
            <div className="contacts__map--overlay"></div>
                <iframe
                className="contacts__map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.6996457580135!2d4.7087010158495595!3d52.012350781477906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5d7c17024e5e7%3A0x5810544387b2322e!2sGOUDA+CHEESE+MARKET!5e0!3m2!1sen!2sen!4v1557232622802!5m2!1sen!2sen"
                ></iframe>
            </div>
            </div>
            </StyledAbout>
        );
    }
}