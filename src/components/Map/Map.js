"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./styles.css";
import towns from "@/data/towns.json";

function Map() {
  const mapCenter = towns.find((town) => town.name === "Euroa")?.coords || null; // roughly middle of all serviced area

  const createSVGIcon = (color) => {
    return new L.DivIcon({
      html: `<div style="background-color: ${color};" class="h-full w-full rounded-xl opacity-50"></div>`,
      iconSize: [25, 25],
      iconAnchor: [12, 12],
      popupAnchor: [0, -25],
    });
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* TODO */}
      <MapContainer
        center={mapCenter}
        scrollWheelZoom={false} // Disable scroll-to-zoom
        dragging={false} // Disable panning
        style={{ height: "100%", width: "100%" }}
        zoom={8}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {towns.map((town, index) => (
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
