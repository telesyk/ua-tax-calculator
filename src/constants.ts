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
    flag: '🇵🇱',
  },
]

export const MOCK_DATA = [
  {
    r030: 840,
    txt: 'Долар США',
    rate: 37.0211,
    cc: 'USD',
    exchangedate: '18.12.2023',
    flag: '🇺🇸',
  },
  {
    r030: 978,
    txt: 'Євро',
    rate: 40.5122,
    cc: 'EUR',
    exchangedate: '18.12.2023',
    flag: '🇪🇺',
  },
  {
    r030: 985,
    txt: 'Злотий',
    rate: 9.3936,
    cc: 'PLN',
    exchangedate: '18.12.2023',
    flag: '🇵🇱',
  },
]
