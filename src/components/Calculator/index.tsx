'use client'
import { useEffect, useState } from 'react'
import { CalculatorCurrencyProps, CalculatorStateProps } from '@/types'
import { CURRENCIES, CURRENT_YEAR, INITIAL_VALUE, API } from '@/constants'
import { filteredData, getCurrencies, getEsvValue } from '@/utils'
import CalculatorContext from './context'
import Inputs from './Inputs'
import Outputs from './Outputs'
import TaxYears from './TaxYears'

export default function Calculator() {
  const [state, setState] = useState<CalculatorStateProps>({
    currencies: [],
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
    const fetchData = async () => {
      try {
        const data = await getCurrencies(API)
        setState(prev => ({
          ...prev,
          currencies: filteredData(data),
          capital: prev.minsalary,
        }))
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
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
    const currentCurr = CURRENCIES.find((item: any) => item.name === name)
    const rate = Number(currency?.value)

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
    INITIAL_VALUE,
    handleCapitalChange,
    handleTaxChange,
    handleTaxYearChange,
    handleCurrencyChange,
  }

  return (
    <CalculatorContext.Provider value={contextValue}>
      <div className="my-4">
        <p className="my-2 text-xs">
          Add Loading components to Inputs & Outputs
        </p>
      </div>
      <div className="my-4">
        <TaxYears />
      </div>
      <div className="my-6 flex flex-wrap sm:flex-nowrap justify-center items-start gap-8 xl:gap-12">
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
