import { Devices, Drivers, Vehicles } from "./types";

export function getAssociatedVehicle(vehicles: Vehicles[], driver: Drivers) {
  const [vehicle] =
    vehicles &&
    vehicles.filter(
      (vehicle) => vehicle.id === ((driver && driver.vehicle_id) || "")
    );
  return vehicle;
}

export function getDriver(drivers: Drivers[], device: Devices) {
  const [driver] =
    drivers &&
    drivers.filter(
      (driver) => driver.driver_code === (device && device.driver_code)
    );
  return driver;
}
