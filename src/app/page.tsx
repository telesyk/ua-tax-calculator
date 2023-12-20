import Calculator from '@/components/Calculator'

export default async function Home() {
  return (
    <>
      <h1 className="text-2xl text-center mb-6">
        FOP <span className="italic text-default-500">(ФОП)</span> 3 category
      </h1>
      <Calculator />
    </>
  )
}
