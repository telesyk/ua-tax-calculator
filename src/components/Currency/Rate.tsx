import { CurrenciesListProps } from '@/types'

export default function CurrencyRate({ data }: CurrenciesListProps[] | any) {
  return (
    <>
      <div className="text-default-500 mb-3">NBU currency rates</div>
      <ul className="text-xs sm:text-sm">
        {data.map((item: any) => (
          <li key={item.cc} className="flex gap-2 my-2">
            <span className="grow">
              {item.flag} {item.sign || item.cc}
            </span>
            <span className="grow basis-3">&hArr;</span>
            <span className="grow">🇺🇦 &#8372;</span>
            <span className="grow md:basis-5/12">{item.rate}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
