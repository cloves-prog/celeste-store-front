import api from "./api";
import { Product } from "../interfaces/Product";

export const fetch = async (): Promise<Product[]> => {
  const response = await api.get(
    '/products',
  );

  return response.data;
};

export const create = async (data: Product): Promise<Product> => {
  const response = await api.post(
    '/products',
    data
  );

  return response.data;
};

export const update = async (data: Product): Promise<Product> => {
  const response = await api.put(
    `/products/${data.id}`,
    data
  );

  return response.data;
};

export const destroy = async (data: Product): Promise<Product> => {
  const response = await api.delete(
    `/products/${data.id}`
  );

  return response.data;
};
