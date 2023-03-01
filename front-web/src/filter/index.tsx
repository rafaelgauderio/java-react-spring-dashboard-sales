import './styles.css';
import FlatPicker from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import flatpickrLib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';

// definindo o idioma do calendário como português
flatpickrLib.localize(Portuguese);

function Filter() {
  // função que ao selecionar uma data do FlatPicker vai retornar uma lista de data pro backend
  const onChangeDate = (listDates: Date[]) => {
    console.log(listDates);
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
      <select className="filter-input">
        <option value="">Selecione um gênero</option>
        <option value="FEMALE">Feminino</option>
        <option value="MALE">Masculino</option>
        <option value="OTHER">Outro</option>
      </select>
    </div>
  );
}

export default Filter;
