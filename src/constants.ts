import { SelectedCurrencyProps } from '@/types'

export const API =
  'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
export const CURRENCIES: SelectedCurrencyProps[] = [
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

export const CAPTIONS = {
  home: {
    title:
      'FOP <small><em className="italic text-default-500">(ua: ФОП)</em></small> 3 category',
  },
  taxOptions: {
    option1: '5 %',
    option2: '3 % + VAT (ПДВ)',
  },
  esv: {
    label: 'Tax ESV (ЄСВ)',
    description: 'Takes from minimal salary',
  },
  ep: {
    label: 'Tax EP (ЄП)',
    description: 'Takes from your monthly, quarterly, or yearly incomes',
  },
  capital: {
    label: 'Capital gains',
    description: '',
  },
  rates: {
    title: 'Select currency',
    label: 'NBU currency rates to UAH 🇺🇦 for',
    description: 'Rates provided by National Bank of Ukraine',
  },
  taxTotal: {
    title: 'Total tax to pay',
    description: '',
  },
  profit: {
    title: 'Profit after tax',
    description: '',
  },
  sign: {
    uah: '&#8372;',
    usd: '&dollar;',
    eur: '&euro;',
    percent: '&percnt;',
  },
}

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
