import axios from "axios";

import { BASE_URL } from "./Constants";

const CONTROLLER = "purchase";

const checkout = async (cart) => {
  let response = await axios.post(`${BASE_URL}/${CONTROLLER}/checkout`, cart);
  return response;
};

export default {
  checkout,
};
