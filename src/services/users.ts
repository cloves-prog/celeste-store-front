import api from "./api";
import { User } from "../interfaces/User";


export const login = async (data: User): Promise<User> => {
  const response = await api.post(
    '/login',
    data
  );

  return response.data;
};

export const isAuthenticated = () => localStorage.getItem('usertoken');