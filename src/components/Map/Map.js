"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import mapData from "./data.json";

function Map() {
  const mapCenter =
    mapData.find((town) => town.name === "Euroa")?.coords || null; // roughly middle of all serviced area

  const createSVGIcon = (color) => {
    return new L.DivIcon({
      // html: `<svg width="30" height="50" xmlns="http://www.w3.org/2000/svg">
      //            <circle cx="15" cy="40" r="10" fill="${color}" />
      //            <polygon points="15,5 30,20 0,20" fill="${color}" />
      //        </svg>`,
      html: `<div style="background-color:${color}; " class="h-full w-full rounded-xl opacity-50"></div>`,
      iconSize: [25, 25],
      iconAnchor: [12, 12],
      popupAnchor: [0, -25],
    });
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapContainer
        center={mapCenter}
        scrollWheelZoom={false} // Disable scroll-to-zoom
        style={{ height: "100%", width: "100%" }}
        zoom={9}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {mapData.map((town, index) => (
          <Marker
            key={index}
            position={town.coords}
            icon={createSVGIcon(town.color)}
            style={{ width: "25px", height: "25px", border: "none" }}
            className={"bg-red"}
          >
            <Popup>{town.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
export { mapData };
