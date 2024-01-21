import Calculator from '@/components/Calculator'
import Preloader from '@/components/UI/Preloader'
import { CAPTIONS } from '@/constants'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <>
      <h1
        className="text-2xl text-center mb-6"
        dangerouslySetInnerHTML={{ __html: CAPTIONS.home.title }}
      ></h1>

      <Suspense fallback={<Preloader />}>
        <Calculator />
      </Suspense>
    </>
  )
}
