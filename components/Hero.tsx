import Link from "next/link";

interface HeroProps {
  headline: string;
  subheadline: string;
  cta_primary: {
    label: string;
    url: string;
  };
  cta_secondary: {
    label: string;
    url: string;
  };
}

export function Hero({
  headline,
  subheadline,
  cta_primary,
  cta_secondary,
}: HeroProps) {
  const isPrimaryExternal = cta_primary.url.startsWith("http");
  const isSecondaryExternal = cta_secondary.url.startsWith("http");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-slate-900 to-slate-950" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                {headline.split(".")[0]}.
              </span>
              <br />
              {headline.split(".").slice(1).join(".")}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {subheadline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            {isPrimaryExternal ? (
              <a
                href={cta_primary.url}
                className="px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 font-bold text-lg transition-all hover:shadow-lg hover:shadow-purple-900/50"
              >
                {cta_primary.label}
              </a>
            ) : (
              <Link
                href={cta_primary.url}
                className="px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 font-bold text-lg transition-all hover:shadow-lg hover:shadow-purple-900/50"
              >
                {cta_primary.label}
              </Link>
            )}

            {isSecondaryExternal ? (
              <a
                href={cta_secondary.url}
                className="px-8 py-4 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 font-bold text-lg transition-colors"
              >
                {cta_secondary.label}
              </a>
            ) : (
              <Link
                href={cta_secondary.url}
                className="px-8 py-4 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 font-bold text-lg transition-colors"
              >
                {cta_secondary.label}
              </Link>
            )}
          </div>

          <div className="pt-12 text-slate-400 text-sm">
            <p>Featured In</p>
            <div className="flex justify-center gap-8 mt-4 opacity-60">
              <span>Cedar Rapids Scene</span>
              <span>•</span>
              <span>Iowa Music Network</span>
              <span>•</span>
              <span>Local Industry Leaders</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="text-center text-slate-500">
          <p className="text-xs uppercase tracking-wide mb-2">Scroll to explore</p>
          <div className="text-lg">↓</div>
        </div>
      </div>
    </section>
  );
}
