import api from "./api";
import { Product } from "../interfaces/Product";

export const fetchProduct = async (): Promise<Product[]> => {
  const response = await api.get(
    '/products',
  );

  return response.data;
};
