import { useContext } from 'react'
import { Input } from '@nextui-org/react'
import CalculatorContext from './context'
import TaxCategories from './TaxCategories'

export default function Inputs() {
  const { state, currency, captions, INITIAL_VALUE, handleCapitalChange } =
    useContext(CalculatorContext)

  return (
    <>
      <div className="py-4 flex flex-wrap gap-2 items-start justify-between">
        <Input
          isReadOnly
          type="number"
          variant="flat"
          className="basis-1/2"
          labelPlacement="outside"
          label={captions.esv.label}
          defaultValue={`${INITIAL_VALUE.taxesv}`}
          endContent={
            <div className="pointer-events-none flex items-center">
              <span
                className="text-default-400 text-sm"
                dangerouslySetInnerHTML={{ __html: captions.sign.percent }}
              ></span>
            </div>
          }
        />
        <div className="text-default-600 text-sm inline-flex flex-col gap-2 text-right">
          <span>{state.taxESVValue} ₴</span>
          {currency.name !== '' && (
            <span className="text-default-400 text-xs">
              {currency.taxEsv} {currency.sign}
            </span>
          )}
        </div>
        <div className="basis-full text-default-400 text-xs">
          ℹ {captions.esv.description}
        </div>
      </div>
      <div className="py-4 flex flex-wrap gap-2 items-start justify-between">
        <div className="basis-1/2">
          <p className="mb-2 text-foreground text-sm">{captions.ep.label}</p>
          <TaxCategories />
        </div>
        <div className="text-default-600 text-sm inline-flex flex-col gap-2 text-right">
          <span>{state.taxEPValue} ₴</span>
          {currency.name !== '' && (
            <span className="text-default-400 text-xs">
              {currency.taxEp} {currency.sign}
            </span>
          )}
        </div>
        <div className="basis-full text-default-400 text-xs">
          ℹ {captions.ep.description}
        </div>
      </div>
      <div className="py-4">
        <Input
          type="number"
          variant="bordered"
          placeholder="12.34"
          labelPlacement="outside"
          label={captions.capital.label}
          value={state.capital}
          onChange={handleCapitalChange}
          endContent={
            <div className="pointer-events-none flex items-center">
              <span
                className="text-default-400 text-small"
                dangerouslySetInnerHTML={{ __html: captions.sign.uah }}
              ></span>
            </div>
          }
        />
      </div>
    </>
  )
}
