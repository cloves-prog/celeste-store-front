import api from './api';
import { CartState } from '../store/cart/types';
import { Resume } from '../interfaces/Resume';

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
