import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b border-neutral-200">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Left: Brand */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-neutral-900"
          >
            QCMix
          </Link>

          {/* Editorial Links */}
          <div className="hidden items-center gap-4 sm:flex">
            <Link
              href="/bars"
              className="text-sm text-neutral-700 hover:text-neutral-900"
            >
              Bars
            </Link>
            <Link
              href="/bartenders"
              className="text-sm text-neutral-700 hover:text-neutral-900"
            >
              Bartenders
            </Link>
            <Link
              href="/music"
              className="text-sm text-neutral-700 hover:text-neutral-900"
            >
              Music
            </Link>
          </div>
        </div>

        {/* Right: Industry */}
        <div className="flex items-center gap-4">
          <Link
            href="/industry/join"
            className="text-sm font-medium text-neutral-900 hover:underline"
          >
            Industry Join
          </Link>
        </div>
      </nav>
    </header>
  );
}
