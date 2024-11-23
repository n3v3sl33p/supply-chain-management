"use client";
import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression, Icon } from "leaflet";

const customIcon = new Icon({
  iconUrl: "/map-pin.svg",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export const Map = () => {
  const [route, setRoute] = useState<LatLngExpression[]>([]);
  const start: LatLngExpression = [55.741556, 37.620028];
  const end: LatLngExpression = [56.31112, 38.130492];

  return (
    <MapContainer
      center={start}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={start} icon={customIcon}>
        <Popup>Начало маршрута</Popup>
      </Marker>
      <Marker position={end} icon={customIcon}>
        <Popup>Конец маршрута</Popup>
      </Marker>

      {route.length > 0 && <Polyline positions={route} color="blue" />}
    </MapContainer>
  );
};
