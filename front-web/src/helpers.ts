import { SalesByStoreData } from './types';

export const buildSalesByStoreGraphic = (sales: SalesByStoreData[]) => {
  const series = sales.map((sale) => sale.sum);
  const labels = sales.map((sale) => sale.storeName);

  return {
    series,
    labels,
  };
};
