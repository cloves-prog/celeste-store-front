export interface BestClient {
  name: string,
  id: number;
  total: number;
}

export interface Resume {
  bestClients: BestClient[] | null
}