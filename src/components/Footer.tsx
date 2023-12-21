export default function Footer() {
  return (
    <footer className="flex justify-center w-full p-12 bg-gradient-conic from-sky-600/30 to-yellow-500/20 font-mono text-sm">
      <div className="max-w-5xl flex flex-col w-full items-center justify-center">
        <a
          className="flex place-items-center gap-2 p-8 lg:p-0"
          href="https://unitedhelpukraine.org/donation/"
          target="_blank"
          rel="noopener noreferrer"
          title="United Help Ukraine donation"
        >
          Made with 💙💛
        </a>
      </div>
    </footer>
  )
}
