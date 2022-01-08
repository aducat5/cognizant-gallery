import axios from "axios";
import { BASE_URL } from "./Constants";

const CONTROLLER = "warehouse";

const getAll = async () => await axios.get(`${BASE_URL}/${CONTROLLER}/get-all`);

export default {
  getAll,
};
