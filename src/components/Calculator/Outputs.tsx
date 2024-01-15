import { useContext } from 'react'
import CalculatorContext from './context'
import CurrencyRate from '../Currency/Rate'
import { CAPTIONS } from '@/constants'

export default function Outputs() {
  const { state, currency } = useContext(CalculatorContext)
  return (
    <>
      <div className="py-4 flex justify-between">
        <p className="text-lg">{CAPTIONS.taxTotal.title}</p>
        <div className="inline-flex flex-col justify-start gap-2">
          <div className="flex gap-2">
            <span className="text-lg bold">{state.taxTotal}</span>
            <span
              className="text-lg bold italic text-default-400"
              dangerouslySetInnerHTML={{ __html: CAPTIONS.sign.uah }}
            ></span>
          </div>
          {currency.name !== '' && (
            <p className="text-default-400 text-xs">
              {currency.totalTax} {currency.sign}
            </p>
          )}
        </div>
      </div>
      <div className="py-4 flex justify-between">
        <p className="text-xl font-bold">{CAPTIONS.profit.title}</p>
        <div className="inline-flex flex-col justify-start gap-2">
          <div className="flex gap-2">
            <span className="text-lg font-bold">{state.profit}</span>
            <span
              className="text-xl italic text-default-400"
              dangerouslySetInnerHTML={{ __html: CAPTIONS.sign.uah }}
            ></span>
          </div>
          {currency.name !== '' && (
            <p className="text-default-400 text-xs">
              {currency.profit} {currency.sign}
            </p>
          )}
        </div>
      </div>
      <div className="py-4">
        <CurrencyRate />
      </div>
    </>
  )
}
