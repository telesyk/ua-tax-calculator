import { CurrenciesListProps } from '@/types'

export default function CurrencyRate({ data }: CurrenciesListProps[] | any) {
  return (
    <>
      <div className="text-default-400 mb-3">NBU currency rates</div>
      <ul className="text-xs sm:text-base">
        {data.map((item: any) => (
          <li key={item.cc} className="flex gap-2 my-2">
            <span className="grow basis-8">
              {item.flag} {item.sign || item.cc}
            </span>
            <span className="grow">&hArr;</span>
            <span className="grow">🇺🇦 &#8372;</span>
            <span className="grow md:basis-5/12">{item.rate}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
