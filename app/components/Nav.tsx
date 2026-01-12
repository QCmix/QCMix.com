export function GlobalNav() {
  return (
    <nav className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-wide">QCmix</span>
        <ul className="flex gap-6 text-sm text-white/70">
          <li><a href="/bars">Bars</a></li>
          <li><a href="/bartenders">Bartenders</a></li>
          <li><a href="/music">Music</a></li>
        </ul>
      </div>
    </nav>
  )
}
