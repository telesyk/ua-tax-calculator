import { SelectedCurrencyProps } from '@/types'

export const api =
  'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
export const DATA_TYPES: SelectedCurrencyProps[] = [
  {
    name: 'USD',
    sign: '$',
    flag: '🇺🇸',
  },
  {
    name: 'EUR',
    sign: '€',
    flag: '🇪🇺',
  },
  {
    name: 'PLN',
    sign: 'zł',
    flag: '🇵🇱',
  },
]

export const CURRENT_DATE = new Date()
export const CURRENT_YEAR = String(CURRENT_DATE.getFullYear())

export const INITIAL_VALUE = {
  minsalary: {
    '2023': {
      q1: 6700,
    },
    '2024': {
      q1: 7100,
      q2: 8000,
    },
  },
  taxep: 5,
  taxesv: 22,
}

export const MOCK_DATA = [
  {
    r030: 840,
    txt: 'Долар США',
    rate: 37.0211,
    cc: 'USD',
    sign: '$',
    exchangedate: '18.12.2023',
    flag: '🇺🇸',
  },
  {
    r030: 978,
    txt: 'Євро',
    rate: 40.5122,
    cc: 'EUR',
    sign: '€',
    exchangedate: '18.12.2023',
    flag: '🇪🇺',
  },
  {
    r030: 985,
    txt: 'Злотий',
    rate: 9.3936,
    cc: 'PLN',
    sign: 'zł',
    exchangedate: '18.12.2023',
    flag: '🇵🇱',
  },
]
