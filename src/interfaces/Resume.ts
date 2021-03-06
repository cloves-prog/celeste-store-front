export interface Resource {
  name: string,
  id: number;
  total: number;
}

export interface Resume {
  bestClients: Resource[];
  bestSalesPeople: Resource[];
  grossProfit: {
    total: number
  },
  netProfit: {
    total: number
  }
}