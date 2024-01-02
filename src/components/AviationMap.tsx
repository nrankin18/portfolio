import React, { useState } from "react";
import ReactMapGL, { Layer, Source } from "react-map-gl";
import Airports from "../data/airports.json";
import Routes from "../data/routes.json";

import "../styles.css";

export default function AviationMap() {
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
        onViewportChange={(viewport: any) => {
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
