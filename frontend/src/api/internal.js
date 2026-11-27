import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_INTERNAL_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  }
})

export const signin = async (data) => {

  try {
    const response = await api.post("/signin", data);

    return response;
  }
  catch (error) {
    return error;
  }
}