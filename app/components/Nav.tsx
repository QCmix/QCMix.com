export function GlobalNav() {
  return (
    <nav className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <span className="text-xs font-semibold tracking-widest uppercase text-white/80">
          QCmix
        </span>
        <ul className="flex gap-8 text-xs tracking-wide text-white/60">
          <li><a className="hover:text-white" href="/bars">Bars</a></li>
          <li><a className="hover:text-white" href="/bartenders">Bartenders</a></li>
          <li><a className="hover:text-white" href="/music">Music</a></li>
        </ul>
      </div>
    </nav>
  )
}
