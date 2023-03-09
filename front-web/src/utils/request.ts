import axios from 'axios';
import { FilterData } from '../types';
import { formatDateToServer } from './formatters';

const baseURL = 'http://localhost:8080';

export const makeRequest = axios.create({
  baseURL,
});

// os extraparameters são page, size e sort

export const buildFilterParameters = (
  filterData?: FilterData,
  extraParameters?: Record<string, unknown>
) => {
  return {
    minDate: formatDateToServer(filterData?.dates?.[0]),
    maxDate: formatDateToServer(filterData?.dates?.[1]),
    gender: filterData?.gender,
    ...extraParameters,
  };
};
