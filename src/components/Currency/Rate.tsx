import { useContext } from 'react'
import { CAPTIONS, CURRENT_DATE } from '@/constants'
import CalculatorContext from '../Calculator/context'
import { RadioGroup } from '@nextui-org/react'
import { CustomRadio } from '../UI/CustomRadio'
import { FaInfoCircle } from 'react-icons/fa'

export default function CurrencyRate() {
  const { state, handleCurrencyChange } = useContext(CalculatorContext)
  return (
    <>
      <div className="mb-3">
        <p className="mb-2 text-foreground text-sm">{CAPTIONS.rates.title}</p>
        <p className="text-foreground-500 text-sm mb-1">
          {CAPTIONS.rates.label} {String(CURRENT_DATE.toDateString())}
        </p>
        <p className="text-foreground-400 text-xs">
          <FaInfoCircle className="inline" /> {CAPTIONS.rates.description}
        </p>
      </div>
      <RadioGroup onValueChange={handleCurrencyChange} orientation="horizontal">
        {state.currencies.map((item: any) => (
          <CustomRadio size="sm" key={item.cc} value={item.cc}>
            <span className="px-2 text-xs sm:text-sm">
              {item.flag} {item.sign || item.cc}
            </span>
            <span className="px-2 text-xs sm:text-sm">&hArr;</span>
            <span className="px-2 text-xs sm:text-sm">
              {Number(item.rate).toFixed(2)} &#8372;
            </span>
          </CustomRadio>
        ))}
      </RadioGroup>
    </>
  )
}
