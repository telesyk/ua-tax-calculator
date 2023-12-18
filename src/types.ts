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
