import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="p-12 max-w-5xl w-full bg-gradient-conic from-sky-600/30 to-yellow-500/20 font-mono text-sm">
      <div className="flex flex-col w-full items-center justify-center">
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
        <p className="py-4">Made with 💙💛</p>
      </div>
    </footer>
  )
}
