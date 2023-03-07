export const priceFormat = (preco: number) => {
  // API de internacionalização do JavaScript
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  }).format(preco);
};
