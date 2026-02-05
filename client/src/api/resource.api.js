import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/users`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUsers = async () => api.get("/");

export const createUser = async (userData) => api.post("/", userData);

export const getUserById = async (userId) => api.get(`/${userId}`);

export const updateUser = async (userId, updateData) =>
  api.put(`/${userId}`, updateData);

export const deactivateUser = async (userId) => api.delete(`/${userId}`);
