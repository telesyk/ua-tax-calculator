import ThemeSwitcher from './UI/ThemeSwitcher'
import { HiReceiptTax } from 'react-icons/hi'

export default function Header() {
  return (
    <header className="flex justify-center w-full p-8 sticky top-0 left-0 z-10 backdrop-blur bg-slate-100/50 dark:bg-slate-900/50 shadow-lg">
      <div className="max-w-5xl flex w-full items-center justify-between gap-4">
        <div className="inline-flex gap-2 items-center">
          <div className="">
            <HiReceiptTax className="w-12 h-auto fill-sky-600 dark:fill-amber-400" />
          </div>
          <div className="">TaxCalc</div>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  )
}
