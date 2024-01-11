import Calculator from '@/components/Calculator'
import { CAPTIONS } from '@/constants'

export default async function Home() {
  return (
    <>
      <h1
        className="text-2xl text-center mb-6"
        dangerouslySetInnerHTML={{ __html: CAPTIONS.home.title }}
      ></h1>
      <Calculator />
    </>
  )
}
