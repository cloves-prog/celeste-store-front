import api from "./api";
import { Client } from "../interfaces/Client";

export const fetchClients = async (): Promise<Client[]> => {
  const response = await api.get(
    '/clients',
  );

  return response.data;
};
