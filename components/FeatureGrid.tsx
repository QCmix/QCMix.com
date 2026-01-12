interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeatureGridProps {
  section_label: string;
  section_note: string;
  features: Feature[];
}

const iconMap: Record<string, string> = {
  venue: "🏢",
  music: "🎵",
  editorial: "📰",
  network: "🔗",
};

export function FeatureGrid({
  section_label,
  section_note,
  features,
}: FeatureGridProps) {
  return (
    <section className="py-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{section_label}</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {section_note}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-slate-800 bg-gradient-to-br from-slate-800/30 to-slate-900/40 backdrop-blur-sm p-8 hover:border-slate-700 transition-all hover:bg-slate-800/40"
            >
              <div className="text-4xl mb-4">{iconMap[feature.icon] || "✨"}</div>
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
