export interface SelectedCurrencyProps {
  name: string
  sign?: string
  flag?: string
}

export interface CurrencyProps {
  r030: number
  txt: string
  rate: number
  cc: string
  exchangedate: string
  sign?: string
  flag?: string
}

export interface CalculatorStateProps {
  epTax: number
  capital: number
  profit: number
  taxTotal: number
  taxESVValue: number
  taxEPValue: number
  taxYear: string
  minsalary: number
  currencies: object[]
}

export interface CalculatorCurrencyProps {
  name: string
  sign?: string
  value: number
  taxEsv: number
  taxEp: number
  totalTax: number
  profit: number
}
