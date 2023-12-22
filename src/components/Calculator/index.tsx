'use client'
import { useEffect, useState } from 'react'
import { CalculatorCurrencyProps, CalculatorStateProps } from '@/types'
import { MOCK_DATA, CURRENT_YEAR, INITIAL_VALUE } from '@/constants'
import { getEsvValue } from '@/utils'
import CalculatorContext from './context'
import Inputs from './Inputs'
import Outputs from './Outputs'
import TaxYears from './TaxYears'

const captions = {
  taxOptions: {
    option1: '5 %',
    option2: '3 % + ПДВ',
  },
  esv: {
    label: 'Tax ESV (ЄСВ)',
    description: 'Takes from minimal salary',
  },
  ep: {
    label: 'Tax EP (ЄП)',
    description: 'Takes from your monthly, quarterly, or yearly incomes',
  },
  capital: {
    label: 'Capital gains',
    description: '',
  },
  rates: {
    label: 'NBU currency rates to UAH 🇺🇦 today',
    description: 'ℹ Only rates provided by National Bank of Ukraine',
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
  const [currency, setCurrency] = useState<CalculatorCurrencyProps>({
    value: 0,
    name: '',
    sign: '',
    taxEsv: 0,
    taxEp: 0,
    totalTax: 0,
    profit: 0,
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

  useEffect(() => {
    handleCurrencyUpdate()
  }, [state.profit, state.taxTotal, state.epTax, state.taxESVValue])

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

  const handleCurrencyUpdate = () => {
    setCurrency(prev => ({
      ...prev,
      taxEp: Number((state.taxEPValue / prev.value).toFixed(2)),
      taxEsv: Number((state.taxESVValue / prev.value).toFixed(2)),
      totalTax: Number((state.taxTotal / prev.value).toFixed(2)),
      profit: Number((state.profit / prev.value).toFixed(2)),
    }))
  }

  const handleCurrencyChange = (name: string) => {
    const currentCurr = MOCK_DATA.find((item: any) => item.cc === name)
    const rate = Number(currentCurr?.rate)

    setCurrency({
      name: name,
      sign: currentCurr?.sign || name,
      value: rate,
      taxEp: Number((state.taxEPValue / rate).toFixed(2)),
      taxEsv: Number((state.taxESVValue / rate).toFixed(2)),
      totalTax: Number((state.taxTotal / rate).toFixed(2)),
      profit: Number((state.profit / rate).toFixed(2)),
    })
  }

  const contextValue = {
    state,
    currency,
    captions,
    INITIAL_VALUE,
    handleCapitalChange,
    handleTaxChange,
    handleTaxYearChange,
    handleCurrencyChange,
  }

  return (
    <CalculatorContext.Provider value={contextValue}>
      <div className="my-4">
        <TaxYears />
      </div>
      <div className="my-4">
        <p className="my-2 text-xs line-through">Need to add currency choose</p>
        <p className="my-2 text-xs line-through">Add currency value to taxes</p>
        <p className="my-2 text-xs line-through">
          Add currency value to profit after tax
        </p>
        <p className="my-2 text-xs">Get actual currency rank by API</p>
      </div>
      <div className="my-6 flex flex-wrap sm:flex-nowrap justify-center items-end gap-8 xl:gap-12">
        <div className="grow basis-full sm:basis-1/2">
          <Inputs />
        </div>
        <div className="grow basis-full sm:basis-1/2">
          <Outputs />
        </div>
      </div>
    </CalculatorContext.Provider>
  )
}
