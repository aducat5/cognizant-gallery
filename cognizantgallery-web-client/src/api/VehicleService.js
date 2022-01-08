import axios from "axios";

import { BASE_URL } from "./Constants";

const CONTROLLER = "vehicle";

const getVehicle = async (warehouseId, vehicleId) =>
  await axios.get(
    `${BASE_URL}/${CONTROLLER}/get-vehicle?warehouseId=${warehouseId}&vehicleId=${vehicleId}`
  );

export default {
  getVehicle,
};
