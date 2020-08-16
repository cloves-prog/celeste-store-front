import api from './api';
import { Resume } from '../interfaces/Resume';

export const resume = async (): Promise<Resume> => {
  const response = await api.get(
    '/sales/resume',
  );

  return response.data;
}
