import api from './api';
import { SalesPeople } from '../interfaces/SalesPeople';

export const fetch =  async (): Promise<SalesPeople[]> => {
  const response = await api.get(
    '/salespeople',
  );

  return response.data;
}

export const create =  async (data: SalesPeople): Promise<SalesPeople> => {
  const response = await api.post(
    '/salespeople',
    data
  );

  return response.data;
}

export const update =  async (data: SalesPeople): Promise<SalesPeople> => {
  const response = await api.put(
    `/salespeople/${data.id}`,
    data
  );

  return response.data;
}

export const destroy =  async (data: SalesPeople): Promise<SalesPeople> => {
  const response = await api.delete(
    `/salespeople/${data.id}`
  );

  return response.data;
}