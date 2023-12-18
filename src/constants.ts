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
