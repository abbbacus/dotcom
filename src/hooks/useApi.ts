import axios, { AxiosInstance } from "axios";

export default function api(): AxiosInstance {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Accept': 'application/json',
    },
  });

  return instance;
}