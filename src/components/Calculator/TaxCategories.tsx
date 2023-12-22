import { useContext } from 'react'
import CalculatorContext from './context'
import { RadioGroup, Radio } from '@nextui-org/react'

export default function TaxCategories() {
  const { state, captions, handleTaxChange } = useContext(CalculatorContext)

  return (
    <>
      <RadioGroup
        color="primary"
        size="sm"
        orientation="horizontal"
        value={`${state.epTax}`}
        onValueChange={handleTaxChange}
      >
        <Radio value="5">{captions.taxOptions.option1}</Radio>
        <Radio value="3">{captions.taxOptions.option2}</Radio>
      </RadioGroup>
    </>
  )
}
