import axios from "axios";

import { BASE_URL } from "./Constants";

const CONTROLLER = "purchase";

const checkout = async (cart) =>
  await axios.post(`${BASE_URL}/${CONTROLLER}/checkout`, cart);

export default {
  checkout,
};
