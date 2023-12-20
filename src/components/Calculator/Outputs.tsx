import { useContext } from 'react'
import CalculatorContext from './context'

export default function Outputs() {
  const { captions, state } = useContext(CalculatorContext)
  return (
    <>
      <div className="py-2 flex justify-between">
        <p className="text-lg">{captions.taxTotal.title}</p>
        <div className="flex justify-center gap-2">
          <span className="text-lg bold">{state.taxTotal}</span>
          <span
            className="text-lg bold italic text-default-400"
            dangerouslySetInnerHTML={{ __html: captions.sign.uah }}
          ></span>
        </div>
      </div>
      <div className="py-2 flex justify-between">
        <p className="text-xl font-bold">{captions.profit.title}</p>
        <div className="flex justify-center gap-2">
          <span className="text-lg font-bold">{state.profit}</span>
          <span
            className="text-xl italic text-default-400"
            dangerouslySetInnerHTML={{ __html: captions.sign.uah }}
          ></span>
        </div>
      </div>
    </>
  )
}
