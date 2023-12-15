'use client'

import { useEffect, useState } from 'react'
// import { MdCurrencyExchange } from 'react-icons/md'
import { Button, Input, Radio, RadioGroup } from '@nextui-org/react'

const VALUE = {
  minsalary: 7100,
  taxep: 5,
  taxesv: 22,
}
const SIGNS = {
  uah: '&#8372;',
  usd: '&dollar;',
  eur: '&euro;',
  percent: '&percnt;',
}
const captions = {
  taxOptions: {
    option1: '5 %',
    option2: '3 % + ПДВ',
  },
  esv: {
    label: 'Tax ESV (ЄСВ)',
    description: `Get's from minimal salary = ${VALUE.minsalary} x ${VALUE.taxesv}%`,
  },
  ep: {
    label: 'Tax EP (ЄП)',
    description: '',
  },
  capital: {
    label: 'Capital gains',
    description: '',
  },
  tax2pay: {
    title: 'Tax to pay',
    description: '',
  },
  profit: {
    title: 'Profit after tax',
    description: '',
  },
}

export default function Calculator() {
  const [state, setState] = useState({
    epTax: VALUE.taxep,
    capital: '',
    profit: 0,
    tax2pay: 0,
  })

  useEffect(() => {
    handleProfit()
  }, [state.capital])

  const handleTaxChange = () =>
    setState(prev => ({
      ...prev,
      epTax: prev.epTax === 5 ? 3 : 5,
    }))

  const handleProfit = () => {
    setState(prev => ({
      ...prev,
      profit: Number(state.capital) - state.tax2pay,
    }))
  }

  const handleCapitalChange = (event: any) => {
    const esvValue = (VALUE.taxesv * VALUE.minsalary) / 100
    const epValue = (state.epTax / 100) * Number(state.capital)

    setState(prev => ({
      ...prev,
      capital: event.target.value,
      tax2pay: esvValue + epValue,
    }))
  }

  return (
    <>
      <h1 className="text-2xl text-center mb-6">
        FOP <span className="italic text-default-400">(ФОП)</span> 3 category
      </h1>
      <div className="my-6 flex justify-center">
        <div className="py-2">
          <RadioGroup
            label="Select tax category"
            color="primary"
            value={`${state.epTax}`}
            onValueChange={handleTaxChange}
          >
            <Radio value="5">{captions.taxOptions.option1}</Radio>
            <Radio value="3">{captions.taxOptions.option2}</Radio>
          </RadioGroup>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-end gap-8">
        <div className="py-2 basis-[48%]">
          <div className="py-2">
            <Input
              type="number"
              label={captions.esv.label}
              labelPlacement="outside"
              variant="flat"
              defaultValue={`${VALUE.taxesv}`}
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span
                    className="text-default-400 text-small"
                    dangerouslySetInnerHTML={{ __html: SIGNS.percent }}
                  ></span>
                </div>
              }
              isReadOnly
              description={captions.esv.description}
            />
          </div>
          <div className="py-2">
            <Input
              type="number"
              label={captions.ep.label}
              labelPlacement="outside"
              variant="flat"
              value={`${state.epTax}`}
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span
                    className="text-default-400 text-small"
                    dangerouslySetInnerHTML={{ __html: SIGNS.percent }}
                  ></span>
                </div>
              }
              isReadOnly
            />
          </div>
          <div className="py-2">
            <Input
              type="number"
              label={captions.capital.label}
              labelPlacement="outside"
              variant="bordered"
              placeholder="12.34"
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span
                    className="text-default-400 text-small"
                    dangerouslySetInnerHTML={{ __html: SIGNS.uah }}
                  ></span>
                </div>
              }
              value={state.capital}
              onChange={handleCapitalChange}
            />
          </div>
        </div>
        <div className="py-2 basis-[48%]">
          <div className="py-2 flex justify-between">
            <p className="text-center text-lg">{captions.tax2pay.title}</p>
            <div className="flex justify-center gap-2">
              <span className="text-lg bold">{state.tax2pay}</span>
              <span
                className="text-lg bold italic text-default-400"
                dangerouslySetInnerHTML={{ __html: SIGNS.uah }}
              ></span>
            </div>
          </div>
          <div className="py-2 flex justify-between">
            <p className="text-center text-xl font-bold">
              {captions.profit.title}
            </p>
            <div className="flex justify-center gap-2">
              <span className="text-lg font-bold">{state.profit}</span>
              <span
                className="text-xl italic text-default-400"
                dangerouslySetInnerHTML={{ __html: SIGNS.uah }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
