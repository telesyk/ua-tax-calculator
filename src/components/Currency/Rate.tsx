import { CurrenciesListProps } from '@/types'
import { RadioGroup, Radio, cn } from '@nextui-org/react'
import { useContext } from 'react'
import CalculatorContext from '../Calculator/context'

export const CustomRadio = (props: any) => {
  const { children, ...otherProps } = props

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          'inline-flex m-0 bg-slate-50/50 dark:bg-slate-700/10 hover:bg-content2 items-center justify-between',
          'max-w-[250px] cursor-pointer rounded-lg gap-4 p-2',
          'data-[selected=true]:bg-content1'
        ),
      }}
    >
      {children}
    </Radio>
  )
}

export default function CurrencyRate({ data }: CurrenciesListProps[] | any) {
  const { captions, handleCurrencyChange } = useContext(CalculatorContext)
  return (
    <>
      <div className="mb-3">
        <p className="text-foreground-500 text-sm mb-1">
          {captions.rates.label}
        </p>
        <p className="text-foreground-400 text-xs">
          {captions.rates.description}
        </p>
      </div>
      <RadioGroup onValueChange={handleCurrencyChange}>
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
