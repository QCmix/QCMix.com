interface TextBlockProps {
  headline: string;
  body: string;
  bullet_points: string[];
  closing: string;
}

export function TextBlock({
  headline,
  body,
  bullet_points,
  closing,
}: TextBlockProps) {
  return (
    <section className="py-20 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            {headline}
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">{body}</p>
        </div>

        <div className="space-y-3">
          {bullet_points.map((point, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="text-purple-400 font-bold text-lg flex-shrink-0">
                ✓
              </div>
              <p className="text-lg text-slate-200">{point}</p>
            </div>
          ))}
        </div>

        <p className="text-lg text-slate-300 italic pt-4 border-t border-slate-800">
          {closing}
        </p>
      </div>
    </section>
  );
}
