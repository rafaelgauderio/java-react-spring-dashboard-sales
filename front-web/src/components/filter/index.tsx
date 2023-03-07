import './styles.css';
import FlatPicker from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import flatpickrLib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import { useState } from 'react';
import { FilterData, Gender } from '../../types';

// definindo o idioma do calendário como português
flatpickrLib.localize(Portuguese);

// ao acontecer um mudança onChange na data ou seleção do gênero, a função callback vai propagar
// essa mudança para os componentes filhos
type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  // lista de datas com valor inicial uma lista vazia
  const [dates, setDates] = useState<Date[]>([]);
  const [gender, setGender] = useState<Gender>();

  // função que ao selecionar uma data do FlatPicker vai retornar uma lista de data pro backend
  const onChangeDate = (dates: Date[]) => {
    // fazer a integração com o backend apenas quando selecionar a data inicial e final
    if (dates.length === 2) {
      setDates(dates);
      onFilterChange({
        dates,
        gender,
      });
    }
    //console.log(dates);
  };

  const onChandeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = event.target.value as Gender;

    setGender(selectedGender);
    // toda mudança de estado é assincrona
    onFilterChange({ dates, gender: selectedGender });
  };

  return (
    <div className="filter-container base-card">
      <FlatPicker
        options={{
          dateFormat: 'd/m/Y',
          mode: 'range',
          showMonths: 3,
        }}
        className="filter-input"
        onChange={onChangeDate}
        placeholder="Selecione um período"
      />
      <select className="filter-input" value={gender} onChange={onChandeGender}>
        <option value="">Selecione um gênero</option>
        <option value="FEMALE">Feminino</option>
        <option value="MALE">Masculino</option>
        <option value="OTHER">Outro</option>
      </select>
    </div>
  );
}

export default Filter;
