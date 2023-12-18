import { DATA_TYPES } from '@/constants'

export const filteredData = (data: object | any) => {
  const newArr: object[] = []
  DATA_TYPES.forEach((item: any) => {
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
