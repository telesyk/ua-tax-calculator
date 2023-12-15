import Image from 'next/image'
import {Button} from '@nextui-org/button'

export default function Home() {
  return (
    <main className="max-w-5xl w-full flex flex-col items-center justify-between p-12 lg:p-24">
      <div className="flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={100}
            height={24}
            priority
          />
        </a>
        <div>
          <Button>Click me</Button>
        </div>
      </div>
    </main>
  )
}
