// Colocar aqui todos os tipos que serão utililizados no projeto.

export type SalesByDate = {
  date: string;
  sum: number;
};

export type GraphicSeriesData = {
  x: string;
  y: number;
};

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type FilterData = {
  dates?: Date[];
  gender?: Gender;
};

export type SalesSummaryData = {
  sum?: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type SalesByStoreData = {
  storeName: string;
  sum: number;
};

export type PieGraphicConfig = {
  series: number[];
  labels: string[];
};

export type SalesByPaymentMethodData = {
  sum: number;
  description: string;
};
