import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useInterval from "../utils/useInterval";
import SummaryData from "./SummaryData";
import { Devices, Drivers, Vehicles } from "./types";
import { getAssociatedVehicle, getDriver } from "./getData";

import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl:
    "https://painel.cobli.co/static/images/ic-vehicle-small-3d3922e672e4f1b2.svg",
});

const Map: React.FC = () => {
  const [devices, setDevices] = useState<Devices[]>([]);
  const [drivers, setDrivers] = useState<Drivers[]>([]);
  const [vehicles, setVehicles] = useState<Vehicles[]>([]);

  useEffect(() => {
    apiCalls(setDevices, setDrivers, setVehicles);
  }, []);

  useInterval(() => {
    apiCalls(setDevices, setDrivers, setVehicles);
  }, 5000);

  return (
    <MapContainer
      center={[-22.952265509092353, -46.547306717142355]}
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {devices &&
        devices.map((device) => {
          const driver = getDriver(drivers, device);
          const vehicle = getAssociatedVehicle(vehicles, driver);
          return (
            <React.Fragment key={device.id}>
              <Marker position={[device.lat, device.lng]} icon={customIcon}>
                <Popup>
                  <SummaryData
                    driver={driver}
                    device={device}
                    vehicle={vehicle}
                  />
                </Popup>
              </Marker>
            </React.Fragment>
          );
        })}
    </MapContainer>
  );
};

export default Map;

function apiCalls(
  setDevices: React.Dispatch<React.SetStateAction<Devices[]>>,
  setDrivers: React.Dispatch<React.SetStateAction<Drivers[]>>,
  setVehicles: React.Dispatch<React.SetStateAction<Vehicles[]>>
) {
  api.get("/devices").then((value) => {
    setDevices(value.data);
  });

  api.get("/drivers").then((value) => {
    setDrivers(value.data);
  });

  api.get("/vehicles").then((value) => {
    setVehicles(value.data);
  });
}
