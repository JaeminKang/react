import React, { useState } from "react";
import { Marker } from "react-map-gl";
import "./RealNode.css";

function Draggable() {
  return (
    <Marker latitude="37.5326" longitude="127.024612" draggable="false">
      <div className="Drag" />
    </Marker>
  );
}

export default Draggable;
