import { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '100%',
      latitude: 33.6714033,
      longitude: -117.3285868,
      zoom: 12
    }
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZXh0ZW5zaWJsbWVkaWEiLCJhIjoiY2tncmNvazcxMGV1ODJ6cDJ1Y3hpM2J6OSJ9.vBKvN1O-b4pTG7jIzAZjXw"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
        style={{borderRadius: '10px'}}
      />
    );
  }
}

export default Map;