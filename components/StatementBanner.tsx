interface StatementBannerProps {
  headline: string;
  subtext: string;
}

export function StatementBanner({ headline, subtext }: StatementBannerProps) {
  return (
    <section className="py-16 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
        <h2 className="text-5xl md:text-6xl font-black tracking-tight">
          {headline}
        </h2>
        <p className="text-xl text-slate-300 leading-relaxed">{subtext}</p>
      </div>
    </section>
  );
}
