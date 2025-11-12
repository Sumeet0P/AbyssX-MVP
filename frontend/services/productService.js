import axios from "axios";

const API_URL = "https://abyssx-mvp-backend.onrender.com";

export const getProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
