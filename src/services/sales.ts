import api from './api';
import { CartState } from '../store/cart/types';
import { Resume } from '../interfaces/Resume';
import { Sale } from '../interfaces/Sale';

export const fetch = async (): Promise<Sale[]> => {
  const response = await api.get(
    '/sales',
  );

  return response.data;
}

export const destroy = async (salesNumber: string): Promise<Sale[]> => {
  const response = await api.delete(
    `/sales/${salesNumber}`,
  );

  return response.data;
}


export const resume = async (): Promise<Resume> => {
  const response = await api.get(
    '/sales/resume',
  );

  return response.data;
}

export const persist = async (sale: CartState): Promise<CartState> => {
  const response = await api.post(
    '/sales',
    sale
  );

  return response.data;
}
