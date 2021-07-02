import React from "react";
import { Devices, Drivers, Vehicles } from "./types";

interface SummaryDataProps {
  driver: Drivers;
  device: Devices;
  vehicle: Vehicles;
}

export const SummaryData: React.FC<SummaryDataProps> = ({
  driver,
  device,
  vehicle,
}) => {
  return (
    <span>
      <b>Nome do Motorista:</b> {driver.name}
      <br />
      <b>Categoria Habilitação:</b> {driver.licence_category}
      <br />
      <b>Modelo Hardware:</b> {driver.brand_device}-{driver.model_device}
      <br />
      <b>Velocidade do Veículo:</b> {device.speed} km/h
      <br />
      {vehicle ? (
        <span>
          <b>Veículo Associado:</b>
          <div style={{ padding: "0 20px" }}>
            <b>Placa do Veículo: </b>
            {vehicle.license_plate || "Não informado"}
            <br />
            <b>Modelo do Veículo: </b>
            {vehicle.brand}-{vehicle.model || "Não informado"}
          </div>
        </span>
      ) : null}
    </span>
  );
};

export default SummaryData;
