import api from "./api";
import { Client } from "../interfaces/Client";

export const fetch = async (): Promise<Client[]> => {
  const response = await api.get(
    '/clients',
  );

  return response.data;
};

export const create = async (data: Client): Promise<Client> => {
  const response = await api.post(
    '/clients',
    data,
  );

  return response.data;
};

export const update = async (data: Client): Promise<Client> => {
  const response = await api.put(
    `/clients/${data.id}`,
    data
  );

  return response.data;
};

export const destroy = async (data: Client): Promise<Client> => {
  const response = await api.delete(
    `/clients/${data.id}`
  );

  return response.data;
};