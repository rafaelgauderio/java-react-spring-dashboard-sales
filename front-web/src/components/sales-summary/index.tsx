import SalesSummaryCard from './sales-summary-card';
import './styles.css';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as ColumnChartIcon } from '../../assets/column-chart-icon.svg';
import { FilterData, SalesSummaryData } from '../../types';
import { buildFilterParameters, makeRequest } from '../../utils/request';
import { useEffect, useMemo, useState } from 'react';
import { priceFormat } from '../../utils/formatters';

type Props = {
  filterData?: FilterData;
};

// criar uns valores de estado inicial, enquanto a aplicação não carrega os dados do backend
const initialSummary = {
  min: 0,
  max: 0,
  avg: 0,
  count: 0,
};

function SalesSummary({ filterData }: Props) {
  const params = useMemo(() => buildFilterParameters(filterData), [filterData]);
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((resposta) => {
        setSummary(resposta.data);
        //console.log(resposta.data);
      })
      .catch(() => {
        console.log('Error to fetch summary sales data');
      });
  }, [params]);

  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={priceFormat(summary?.avg)} label="Média" icon={<DoneIcon />} />
      <SalesSummaryCard value={summary?.count} label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value={summary?.min} label="Mínima" icon={<ColumnChartIcon />} />
      <SalesSummaryCard value={summary?.max} label="Máxima" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
