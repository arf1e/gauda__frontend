import React from 'react';
import styled from 'styled-components';
import ReactMapGL, { Marker } from 'react-map-gl';

const MapWrapper = styled.div`
  position: relative;
  .contacts__address {
    width: 270px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    border: 2px solid ${props => props.theme.mainColor};
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
    width: 610px;
    .contacts__address {
      z-index: 1;
      position: absolute;
      background-color: white;
      left: 10%;
      top: 8%;
      overflow: hidden;
      border-width: 5px;
    }
  }
  @media (min-width: ${props => props.theme.desktopWidth}) {
    width: 1050px;
    margin: auto;
  }
`;
class Map extends React.Component {
  state = {
    viewport: {
      width: '100%',
      height: 400,
      latitude: 52.0118696,
      longitude: 4.7139631,
      zoom: 16,
    },
  };

  render() {
    return (
      <MapWrapper className="contacts__map-wrapper">
        <div className="contacts__address">
          <strong className="contacts__building">
            2801 KK Gouda, Netherlands
          </strong>
          <strong className="contacts__street">Lange Tiendeweg 78</strong>
        </div>
        <div className="contacts__map">
          <ReactMapGL
            className="contacts__map--iframe"
            {...this.state.viewport}
            mapboxApiAccessToken="pk.eyJ1IjoicnVzYWcwIiwiYSI6ImNqd2JhaGVieTBoYXY0NG1tbzZzNmh5YWQifQ.gNic4MnbwS4icuI2Nb2sBQ"
            onViewportChange={viewport => this.setState({ viewport })}
            mapStyle="mapbox://styles/rusag0/cjwbb0rcz0qvn1do05oopwtsz"
          />
        </div>
      </MapWrapper>
    );
  }
}
export default Map;
