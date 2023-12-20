import { useContext } from 'react'
import CalculatorContext from './context'
import { getTaxYears } from '@/utils'
import { Radio, RadioGroup, cn } from '@nextui-org/react'

export const CustomRadio = (props: any) => {
  const { children, ...otherProps } = props

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          'inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between',
          'flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent',
          'data-[selected=true]:border-primary'
        ),
      }}
    >
      {children}
    </Radio>
  )
}

export default function TaxYears() {
  const { INITIAL_VALUE, state, handleTaxYearChange } =
    useContext(CalculatorContext)
  const yearsList = getTaxYears(INITIAL_VALUE.minsalary)

  return (
    <>
      <RadioGroup
        description="Select tax year"
        color="primary"
        orientation="horizontal"
        defaultValue={state.taxYear}
        onValueChange={handleTaxYearChange}
      >
        {yearsList.map((year: string) => (
          <CustomRadio key={year} value={year}>
            {year}
          </CustomRadio>
        ))}
      </RadioGroup>
      <div className="py-2">
        <div className="text-default-400 text-sm">
          Minimal salary {INITIAL_VALUE.minsalary[state.taxYear].q1} ₴
        </div>
      </div>
    </>
  )
}
