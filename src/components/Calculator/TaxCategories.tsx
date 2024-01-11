import { useContext } from 'react'
import CalculatorContext from './context'
import { RadioGroup } from '@nextui-org/react'
import { CustomRadio } from '../UI/CustomRadio'

export default function TaxCategories() {
  const { state, CAPTIONS, handleTaxChange } = useContext(CalculatorContext)

  return (
    <>
      <RadioGroup
        orientation="horizontal"
        value={`${state.epTax}`}
        onValueChange={handleTaxChange}
      >
        <CustomRadio size="sm" value="5">
          {CAPTIONS.taxOptions.option1}
        </CustomRadio>
        <CustomRadio size="sm" value="3">
          {CAPTIONS.taxOptions.option2}
        </CustomRadio>
      </RadioGroup>
    </>
  )
}
