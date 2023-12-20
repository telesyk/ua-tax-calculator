'use client'
import { useEffect, useState } from 'react'
import { CalculatorStateProps } from '@/types'
import { MOCK_DATA, CURRENT_YEAR, INITIAL_VALUE } from '@/constants'
import { getEsvValue } from '@/utils'
import CalculatorContext from './context'
import CurrencyRate from '../Currency/Rate'
import Inputs from './Inputs'
import Outputs from './Outputs'
import TaxCategories from './TaxCategories'
import TaxYears from './TaxYears'

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
    taxESVValue: getEsvValue(CURRENT_YEAR),
    taxEPValue: 0.0,
    taxYear: CURRENT_YEAR,
    minsalary:
      INITIAL_VALUE.minsalary[
        CURRENT_YEAR as keyof typeof INITIAL_VALUE.minsalary
      ].q1,
  })

  useEffect(() => {
    setState(prev => ({
      ...prev,
      capital: prev.minsalary,
    }))
  }, [])

  useEffect(() => {
    handleProfit()
  }, [state.capital, state.taxTotal])

  useEffect(() => {
    handleTaxTotal()
  }, [state.capital, state.epTax, state.taxESVValue])

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

  const handleTaxYearChange = (value: string) => {
    setState(prev => ({
      ...prev,
      taxESVValue: getEsvValue(value),
      taxYear: value,
      minsalary:
        INITIAL_VALUE.minsalary[value as keyof typeof INITIAL_VALUE.minsalary]
          .q1,
    }))
  }

  const contextValue = {
    state,
    captions,
    INITIAL_VALUE,
    handleCapitalChange,
    handleTaxChange,
    handleTaxYearChange,
  }

  return (
    <CalculatorContext.Provider value={contextValue}>
      <div className="my-4">
        <TaxYears />
      </div>
      <div className="my-6 flex justify-center gap-8 xl:gap-12">
        <div className="py-2 grow md:basis-1/2">
          <TaxCategories />
        </div>
        <div className="py-2 grow md:basis-1/2">
          <CurrencyRate data={MOCK_DATA} />
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap justify-center items-end gap-8 xl:gap-12">
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
