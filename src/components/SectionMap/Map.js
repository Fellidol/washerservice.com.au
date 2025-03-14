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
    color = "#E74C3C";

    return new L.DivIcon({
      html: `
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.0002 0C15.7954 0 8.3335 7.46187 8.3335 16.6667C8.3335 19.6271 9.1285 22.3958 10.4818 24.8042C10.7066 25.2042 10.9422 25.5979 11.1981 25.9771L25.0002 50L38.8022 25.9771C39.0147 25.6625 39.1981 25.3292 39.3877 25L39.5189 24.8042C40.871 22.3958 41.6668 19.6271 41.6668 16.6667C41.6668 7.46187 34.2043 0 25.0002 0ZM25.0002 8.33333C29.6022 8.33333 33.3335 12.0644 33.3335 16.6667C33.3335 21.2687 29.6022 25 25.0002 25C20.3979 25 16.6668 21.2687 16.6668 16.6667C16.6668 12.0644 20.3979 8.33333 25.0002 8.33333Z" fill="${color}"/>
          <path d="M25.0002 6.25C19.2472 6.25 14.5835 10.9138 14.5835 16.6667C14.5835 22.4188 19.2472 27.0833 25.0002 27.0833C30.7522 27.0833 35.4168 22.4188 35.4168 16.6667C35.4168 10.9138 30.7522 6.25 25.0002 6.25ZM25.0002 10.4167C28.4522 10.4167 31.2502 13.2148 31.2502 16.6667C31.2502 20.1185 28.4522 22.9167 25.0002 22.9167C21.5481 22.9167 18.7502 20.1185 18.7502 16.6667C18.7502 13.2148 21.5481 10.4167 25.0002 10.4167Z" fill="${color}"/>
        </svg>`,
      iconSize: [50, 50],
      iconAnchor: [25, 50],
      popupAnchor: [0, -50],
    });
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapContainer
        center={mapCenter}
        scrollWheelZoom={false} // Disable scroll-to-zoom
        // dragging={false} // Disable panning
        style={{ height: "100%", width: "100%" }}
        zoom={9}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {towns.map((town, index) => (
          <Marker
            key={index}
            position={town.coords}
            icon={createSVGIcon(town.color)}
            className={"w-[50px] h-[50px] bg-red"}
          >
            <Popup>{town.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
