import { CURRENCIES, INITIAL_VALUE } from '@/constants'

export const filteredData = (data: object[] | any) => {
  const newArr: object[] = []
  CURRENCIES.forEach((item: any) => {
    data.filter((i: object | any) => {
      if (item.name === i?.cc)
        newArr.push({ ...i, sign: item.sign, flag: item.flag })
      return
    })
  })
  return newArr
}

export const getCurrencies = async (api_url: string) => {
  try {
    const response = await fetch(api_url)
    if (!response.ok) throw new Error('Troubles with getting "currencies"')
    return response.json()
  } catch (error) {
    console.error(error)
  }
}

export const getTaxYears = (obj: Object) => Object.keys(obj)

export const getEsvValue = (year: string | number) => {
  return Number(
    (
      (INITIAL_VALUE.taxesv *
        INITIAL_VALUE.minsalary[year as keyof typeof INITIAL_VALUE.minsalary]
          .q1) /
      100
    ).toFixed(2)
  )
}
