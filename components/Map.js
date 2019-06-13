import React from "react";
import ReactMapGL from 'react-map-gl';
class Map extends React.Component{

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
      return (
        <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={"pk.eyJ1IjoicnVzYWcwIiwiYSI6ImNqd2JhaGVieTBoYXY0NG1tbzZzNmh5YWQifQ.gNic4MnbwS4icuI2Nb2sBQ"}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapStyle="mapbox://styles/rusag0/cjwbb0rcz0qvn1do05oopwtsz"
      />
      );
    }
  }
  export default Map;