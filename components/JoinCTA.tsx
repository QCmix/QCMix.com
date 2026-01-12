import Link from "next/link";

interface JoinCTAProps {
  headline: string;
  subheadline: string;
  role_options: string[];
  steps: string[];
  cta: {
    label: string;
    url: string;
  };
}

export function JoinCTA({
  headline,
  subheadline,
  role_options,
  steps,
  cta,
}: JoinCTAProps) {
  return (
    <section className="py-20 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            {headline}
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            {subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-200">For:</h3>
            <ul className="space-y-3">
              {role_options.map((role, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-purple-400 font-bold">•</span>
                  <span className="text-slate-300">{role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-200">How it works:</h3>
            <ol className="space-y-3">
              {steps.map((step, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-purple-400 font-bold">{idx + 1}.</span>
                  <span className="text-slate-300">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="text-center">
          <Link
            href={cta.url}
            className="inline-block px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 font-bold text-lg transition-all hover:shadow-lg hover:shadow-purple-900/50"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
