import React, { useState } from "react";
import { Marker } from "react-map-gl";

export class MyMarker extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      num: props.num,
      marker: {
        latitude: props.latitude,
        longitude: props.longitude,
      },
    };
  }

  _logDragEvent(name, event) {
    this.setState({
      events: {
        ...this.state.events,
        [name]: event.lngLat,
      },
    });
  }

  _onMarkerDragStart = (event) => {
    this._logDragEvent("onDragStart", event);
  };

  _onMarkerDrag = (event) => {
    this._logDragEvent("onDrag", event);
  };

  _onMarkerDragEnd = (event) => {
    this._logDragEvent("onDragEnd", event);
    console.log(event.lngLat);
    this.setState({
      marker: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1],
      },
    });
    this.props.func_revise(this.state.num, event.lngLat[0], event.lngLat[1]);
  };

  render() {
    const { marker } = this.state;
    return (
      <React.Fragment>
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          offsetTop={-20}
          offsetLeft={-10}
          draggable
          onDragStart={this._onMarkerDragStart}
          onDrag={this._onMarkerDrag}
          onDragEnd={this._onMarkerDragEnd}
        >
          <div>움직이는 마커</div>
        </Marker>
      </React.Fragment>
    );
  }
}

export default MyMarker;
