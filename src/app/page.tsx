import Calculator from '@/components/Calculator'
import CurrencyExhange from '@/components/Exchange'
// import { SelectedCurrencyProps } from '@/types'
const MOCK_DATA = [
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
export default async function Home() {
  // const data = await getCurrencies(api)
  // const currencies = filteredData(data)

  return (
    <>
      <Calculator />
      <CurrencyExhange data={MOCK_DATA} />
    </>
  )
}
