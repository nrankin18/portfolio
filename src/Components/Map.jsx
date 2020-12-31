import React, { useState } from "react";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import Airports from "../util/airports.json";
import Routes from "../util/routes.json";

import "../styles.css";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 39.833,
    longitude: -98.583,
    width: "100%",
    height: "100%",
    zoom: 3,
  });

  return (
    <div id="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiMThucmFua2luIiwiYSI6ImNramE0Z3NjNzQyMzgycm0waGVwaWtoYXAifQ.J-FNw6oSKyAekORi6NfHkg"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Source id="routes" type="geojson" data={Routes} generateId={true} />
        <Layer
          id="routeLayer"
          type="line"
          source="routes"
          paint={{
            "line-color": "rgb(0, 0, 0)",
            "line-width": 2,
          }}
        />
        <Source
          id="airports"
          type="geojson"
          data={Airports}
          generateId={true}
        />
        <Layer
          id="airportLayer"
          type="circle"
          source="airports"
          paint={{
            "circle-stroke-color": "#ffffff",
            "circle-stroke-width": 2,
            "circle-radius": 4,
          }}
        />
      </ReactMapGL>
    </div>
  );
}
