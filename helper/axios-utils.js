import axios from "axios";

const client = axios.create({ baseURL: "/api" });

export const request = async ({ ...options }) => {
  const res = await client(options);
  return res;
};
