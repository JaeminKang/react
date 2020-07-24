import React, { useState } from "react";
import MapGL, { FlyToInterpolator } from "react-map-gl";
import MAPBOX_TOKEN from "../config";
import MyMarker from "./Marker";

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
    setMarkerList(markerList.concat([[37.5326, 127.024612]]));
    console.log(markerList);
  };

  const func_submit = () => {};

  const func_revise = (idx, latitude, longitude) => {
    let revised = markerList.slice();
    revised[idx][0] = latitude;
    revised[idx][1] = longitude;
    setMarkerList(revised);
  };

  return (
    <React.Fragment>
      <div className="btn__box">
        <button className="my__btn" onClick={func_create}>
          마커 생성하기
        </button>
        <button className="my__btn" onClick={func_submit}>
          제출하기
        </button>
      </div>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        transitionInterpolator={new FlyToInterpolator()}
        mapStyle="mapbox://styles/mapbox/light-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {markerList.map((data, index) => (
          <MyMarker
            key={index}
            num={index}
            latitude={data[0]}
            longitude={data[1]}
            func_revise={func_revise}
          />
        ))}
      </MapGL>
    </React.Fragment>
  );
}

export default ReactMapGL;
