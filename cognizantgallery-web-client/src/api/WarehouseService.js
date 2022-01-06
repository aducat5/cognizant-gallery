import axios from "axios";
import { BASE_URL } from "./Constants";

const CONTROLLER = "warehouse";

const getAll = async () => {
  let response = await axios.get(`${BASE_URL}/${CONTROLLER}/get-all`);
  return response;
};

export default {
  getAll,
};
