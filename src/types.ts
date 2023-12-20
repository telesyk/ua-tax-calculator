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

export type CurrenciesListProps = {
  data: CurrencyProps[] | []
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
}
