import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Tooltip from '@material-ui/core/Tooltip';


const ToolTip = (props) => {
  //  Spread the props to the underlying DOM element.
  return (
    <div>
      <p>{props.data?.clue}</p>
      <p>{props.data?.time}</p>
      <p>{props.data?.address}</p>
    </div>
  )
}




class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: '60vh',
        height: '60vh',
        latitude: 33.6714033,
        longitude: -117.3285868,
        zoom: 12
      },
      open: false
    };
  }

  handleTooltipClose = () => {
    this.setState({ open: false });
  };

  handleTooltipOpen = () => {
    this.setState({ open: true });
  };

  render() {
    console.log(this.props.mapData)
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZXh0ZW5zaWJsbWVkaWEiLCJhIjoiY2tncmNvazcxMGV1ODJ6cDJ1Y3hpM2J6OSJ9.vBKvN1O-b4pTG7jIzAZjXw"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
        style={{ borderRadius: '10px' }}>
        {this.props.mapData && this.props.mapData?.map(point => {
          console.log(Number(point['Latitude']))
          let tooltipData = {
            clue: point['Clue'],
            time: point['Time'],
            address: point['Street Address']
          }
          return (
            <Marker latitude={Number(point['Latitude'])} longitude={Number(point['Longitude'])}>
              <Tooltip placement='top' arrow disableFocusListener title={`${tooltipData.clue} \n${tooltipData.time} \n${tooltipData.address}`}>
                <LocationOnIcon style={{ color: 'black' }} />
              </Tooltip>
            </Marker>
          )
        })}
      </ReactMapGL>
    );
  }
}

export default Map;