export interface Devices {
  created_at: string;
  driver_code: string;
  id: number;
  lat: number;
  lng: number;
  speed: number;
  updated_at: string;
}

export interface Drivers {
  brand_device: string;
  created_at: string;
  driver_code: string;
  id: string;
  licence_category: string;
  model_device: string;
  name: string;
  updated_at: string;
  vehicle_id?: string;
}

export interface Vehicles {
  brand?: string;
  created_at: string;
  id: string;
  license_plate?: string;
  model?: string;
  updated_at: string;
}
