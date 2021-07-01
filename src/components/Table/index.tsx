import React, { useEffect } from "react";
import api from "../../services/api";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { Container } from './styles';

const Table: React.FC = () => {
  useEffect(() => {
    api.get("/devices").then((value) => {
      console.table(value.data);
    });
  }, []);

  return (
    <MapContainer
      center={[-6.7819563, -43.0272604]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-6.769179, -43.0252506]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[-6.789222, -43.0252506]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Table;
