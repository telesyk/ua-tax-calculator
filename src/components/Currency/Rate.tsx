import { useContext } from 'react'
import { CurrenciesListProps } from '@/types'
import { RadioGroup } from '@nextui-org/react'
import CalculatorContext from '../Calculator/context'
import { CustomRadio } from '../UI/CustomRadio'

export default function CurrencyRate({ data }: CurrenciesListProps[] | any) {
  const { CAPTIONS, handleCurrencyChange } = useContext(CalculatorContext)
  return (
    <>
      <div className="mb-3">
        <p className="text-foreground-500 text-sm mb-1">
          {CAPTIONS.rates.label}
        </p>
        <p className="text-foreground-400 text-xs">
          {CAPTIONS.rates.description}
        </p>
      </div>
      <RadioGroup
        onValueChange={handleCurrencyChange}
        size="sm"
        color="secondary"
        orientation="horizontal"
      >
        {data.map((item: any) => (
          <CustomRadio key={item.cc} value={item.cc}>
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
