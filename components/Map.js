import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

class Map extends React.Component {
  state = {
    viewport: {
      width: '100%',
      height: 400,
      latitude: 52.0118696,
      longitude: 4.7139631,
      zoom: 16,
      pitch: 50,
    },
  };

  render() {
    return (
      <div>
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken="pk.eyJ1IjoicnVzYWcwIiwiYSI6ImNqd2JhaGVieTBoYXY0NG1tbzZzNmh5YWQifQ.gNic4MnbwS4icuI2Nb2sBQ"
          onViewportChange={viewport => this.setState({ viewport })}
          mapStyle="mapbox://styles/rusag0/cjwbb0rcz0qvn1do05oopwtsz"
        />
      </div>
    );
  }
}
export default Map;
