import { useContext } from 'react'
import CalculatorContext from './context'
import { RadioGroup, Radio } from '@nextui-org/react'

export default function TaxCategories() {
  const { state, captions, INITIAL_VALUE, handleTaxChange } =
    useContext(CalculatorContext)

  return (
    <>
      <RadioGroup
        label="Select tax category"
        color="primary"
        value={`${state.epTax}`}
        onValueChange={handleTaxChange}
      >
        <Radio value="5">{captions.taxOptions.option1}</Radio>
        <Radio value="3">{captions.taxOptions.option2}</Radio>
      </RadioGroup>
      <div className="py-2">
        <div className="text-default-400 text-sm">
          Minimal salary {INITIAL_VALUE.minsalary['2023'].q1} ₴
        </div>
      </div>
    </>
  )
}
