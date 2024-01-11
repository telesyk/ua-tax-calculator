import { useContext } from 'react'
import CalculatorContext from './context'
import { getTaxYears } from '@/utils'
import { RadioGroup } from '@nextui-org/react'
import { CustomRadio } from '../UI/CustomRadio'

export default function TaxYears() {
  const { INITIAL_VALUE, state, handleTaxYearChange } =
    useContext(CalculatorContext)
  const yearsList = getTaxYears(INITIAL_VALUE.minsalary)

  return (
    <>
      <RadioGroup
        description="Select tax year"
        color="secondary"
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
