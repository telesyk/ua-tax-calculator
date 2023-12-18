import { CurrenciesListProps } from '@/types'

export default function CurrencyExhange({ data }: CurrenciesListProps[] | any) {
  return (
    <>
      <div className="text-lg text-center">NBU currency rates</div>
      <ul>
        {data.map((item: any) => (
          <li key={item.cc} className="flex gap-2">
            <span className="grow basis-8">
              {item.flag} {item.sign || item.cc}
            </span>
            <span className="grow">&hArr;</span>
            <span className="grow basis-1/2">{item.rate}</span>
            <span className="grow">&#8372; 🇺🇦</span>
          </li>
        ))}
      </ul>
    </>
  )
}
