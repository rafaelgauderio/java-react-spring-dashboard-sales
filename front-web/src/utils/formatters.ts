import { Gender } from '../types';

export const priceFormat = (preco: number) => {
  // API de internacionalização do JavaScript
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  }).format(preco);
};

export const dateFormat = (date: Date | string) => {
  // formantando a data de acordo com a localização do usuário
  // Objeto Date do javaScript aceita como argumento Date, number ou string
  return new Date(date).toLocaleDateString();
};

export const formatDateToServer = (date?: Date) => {
  if (date != null && date !== undefined) {
    return date?.toISOString().substring(0, 10);
  }
};

// renderização para mostrar os gêneros em portugues.
export const formatGender = (gender: Gender) => {
  const typesOfGender = {
    MALE: 'Masculino',
    FEMALE: 'Feminino',
    OTHER: 'Outro',
  };

  return typesOfGender[gender];
};
