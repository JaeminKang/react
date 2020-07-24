import React, { useState } from "react";
import MapGL, { FlyToInterpolator } from "react-map-gl";
import MAPBOX_TOKEN from "../config";
import MyMarker from "./Marker";
import Button from "./Button";

function ReactMapGL() {
  const [viewport, setViewport] = useState({
    latitude: 37.5326,
    longitude: 127.024612,
    zoom: 5.5,
    bearing: 0,
    pitch: 0,
    transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
    transitionDuration: 1000,
  });

  const [markerList, setMarkerList] = useState([]);

  const func_create = () => {
    console.log("hello");
    return <MyMarker />;
  };

  const func_submit = () => {
    return <MyMarker />;
  };

  return (
    <React.Fragment>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        transitionInterpolator={new FlyToInterpolator()}
        mapStyle="mapbox://styles/mapbox/light-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Button func_create={func_create} func_submit={func_submit} />
      </MapGL>
    </React.Fragment>
  );
}

export default ReactMapGL;
