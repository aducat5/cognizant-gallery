import axios from "axios";

import { BASE_URL } from "./Constants";

const CONTROLLER = "vehicle";

const getVehicle = async (warehouseId, vehicleId) => {
  let response = await axios.get(
    `${BASE_URL}/${CONTROLLER}/get-vehicle?warehouseId=${warehouseId}&vehicleId=${vehicleId}`
  );
  return response.data;
};

export default {
  getVehicle,
};
