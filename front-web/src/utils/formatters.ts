export const priceFormat = (preco: number) => {
  // API de internacionalização do JavaScript
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  }).format(preco);
};

export const dateFormat = (date: Date) => {
  // formantando a data de acordo com a localização do usuário
  return date.toLocaleDateString();
};
