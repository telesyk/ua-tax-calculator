'use client'
import { useEffect, useState } from 'react'
import { CalculatorStateProps } from '@/types'
import { MOCK_DATA } from '@/constants'
import CurrencyRate from '../Currency/Rate'
import CalculatorContext from './context'
import Inputs from './Inputs'
import Outputs from './Outputs'
import TaxCategories from './TaxCategories'

const INITIAL_VALUE = {
  minsalary: {
    '2023': {
      q1: 6800,
    },
    '2024': {
      q1: 7100,
      q2: 8000,
    },
  },
  taxep: 5,
  taxesv: 22,
  esvValue: function (): number {
    return Number(((this.taxesv * this.minsalary['2023'].q1) / 100).toFixed(2))
  },
}
const captions = {
  taxOptions: {
    option1: '5 %',
    option2: '3 % + ПДВ',
  },
  esv: {
    label: 'Tax ESV (ЄСВ)',
    description: '',
  },
  ep: {
    label: 'Tax EP (ЄП)',
    description: '',
  },
  capital: {
    label: 'Capital gains',
    description: '',
  },
  taxTotal: {
    title: 'Total tax to pay',
    description: '',
  },
  profit: {
    title: 'Profit after tax',
    description: '',
  },
  sign: {
    uah: '&#8372;',
    usd: '&dollar;',
    eur: '&euro;',
    percent: '&percnt;',
  },
}

export default function Calculator() {
  const [state, setState] = useState<CalculatorStateProps>({
    epTax: INITIAL_VALUE.taxep,
    capital: 0.0,
    profit: 0.0,
    taxTotal: 0.0,
    taxESVValue: INITIAL_VALUE.esvValue(),
    taxEPValue: 0.0,
  })

  useEffect(() => {
    handleProfit()
  }, [state.capital, state.taxTotal])
  useEffect(() => {
    handleTaxTotal()
  }, [state.capital, state.epTax])

  const handleProfit = () => {
    setState(prev => ({
      ...prev,
      profit: state.capital - state.taxTotal,
    }))
  }

  const handleTaxTotal = () => {
    const newEpValue = Number(((state.epTax / 100) * state.capital).toFixed(2))

    setState(prev => ({
      ...prev,
      taxEPValue: newEpValue,
      taxTotal: prev.taxESVValue + newEpValue,
    }))
  }

  const handleTaxChange = (value: string) => {
    const newEp = Number(value)

    setState(prev => ({
      ...prev,
      epTax: newEp,
      taxEPValue: Number(((newEp / 100) * prev.capital).toFixed(2)),
    }))
  }

  const handleCapitalChange = (event: any) => {
    setState(prev => ({
      ...prev,
      capital: Number(Number(event.target.value).toFixed(2)),
    }))
  }

  const contextValue = {
    state,
    captions,
    INITIAL_VALUE,
    handleCapitalChange,
    handleTaxChange,
  }

  return (
    <CalculatorContext.Provider value={contextValue}>
      <div className="my-4 p-4 border rounded"></div>
      <div className="my-6 flex justify-center gap-8">
        <div className="py-2 grow md:basis-1/2">
          <TaxCategories />
        </div>
        <div className="py-2 grow md:basis-1/2">
          <CurrencyRate data={MOCK_DATA} />
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap justify-center items-end gap-8">
        <div className="py-2 grow basis-full sm:basis-1/2">
          <Inputs />
        </div>
        <div className="py-2 grow basis-full sm:basis-1/2">
          <Outputs />
        </div>
      </div>
    </CalculatorContext.Provider>
  )
}
