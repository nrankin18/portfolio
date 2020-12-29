import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import * as Airports from "../util/airports.json";
import { v4 as uuid } from "uuid";

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
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {Airports.features.map((airport) => (
          <Marker
            key={uuid()}
            latitude={airport.geometry.coordinates[1]}
            longitude={airport.geometry.coordinates[0]}
          >
            <img src="/img/icons/mapIcon.svg" class="map-marker" />
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}
