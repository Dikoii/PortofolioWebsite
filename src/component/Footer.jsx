const Footer = () => {
  return (
    <footer className="py-12">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center text-center">
          <p className="flex flex-wrap items-center justify-center gap-2 text-neutral-400">
            <span className="transition-colors hover:text-purple-400">2025</span>
            <span className="hidden sm:inline">©</span>
            <span className="transition-colors hover:text-purple-400">Portfolio by</span>
            <span className="font-semibold text-purple-500 transition-colors hover:text-purple-400">
              Dicky Dharma Susanto
            </span>
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer