import api from './api';
import { SalesPeople } from '../interfaces/SalesPeople';

export const fetchSalesPeople =  async (): Promise<SalesPeople[]>=> {
  const response = await api.get(
    '/salespeople',
  );

  return response.data;
}