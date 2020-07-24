import React, { useState } from "react";
import ReactMapGL, { Popup, Layer, Feature } from "react-map-gl";
import Pins from "./pins";
import { render } from "react-dom";
import { config } from "./config.js";
import data from "./collisions1601.json";
import Slider from "./Slider";
import RangeSlider from "./RangeSlider";

const MAPBOX_TOKEN = config.MAPBOX_TOKEN; // Set your mapbox token here

function Map(containerComponent) {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 38,
    longitude: 128,
    zoom: 8,
    bearing: 0,
    pitch: 0,
  });
  const [popupInfo, setPopupinfo] = useState(null);
  const [value, setValue] = useState(12);

  let bounds;

  const onChangeHandler = (e) => {
    setValue(e);
  };

  const _updateViewport = (viewport) => {
    setViewport(viewport);
  };

  const _onClickMarker = (city) => {
    setPopupinfo(city);
  };

  const _renderPopup = () => {
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => setPopupinfo(null)}
        ></Popup>
      )
    );
  };

  return (
    <div>
      {/* <Slider onChangeHandler={onChangeHandler} /> */}
      <ReactMapGL
        {...viewport}
        onViewportChange={(viewport) => {
          _updateViewport(viewport);
        }}
        getCursor={(map) => console.log(map)}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Pins value={value} data={data} onClick={() => _onClickMarker()} />
        {_renderPopup()}
      </ReactMapGL>
      <div className="RangeSlider">
        <RangeSlider />
      </div>
    </div>
  );
}

export default Map;

export function renderToDom(container) {
  render(<Map />, container);
}
