import React, { FC } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface MapProps {
  center?: [number, number] | undefined;
}

const Map: FC<MapProps> = ({ center = [30.40047, 78.07901] }) => {
  return (
    <MapContainer
      center={center}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
      style={{ height: "35vh", borderRadius: "8px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {center && <Marker position={center} />}
    </MapContainer>
  );
};

export default Map;
