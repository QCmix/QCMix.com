import Link from "next/link";

interface Article {
  title: string;
  slug: string;
}

interface EditorialPreviewProps {
  section_headline: string;
  section_subheadline: string;
  featured_articles: Article[];
  cta: {
    label: string;
    url: string;
  };
}

export function EditorialPreview({
  section_headline,
  section_subheadline,
  featured_articles,
  cta,
}: EditorialPreviewProps) {
  return (
    <section className="py-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{section_headline}</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {section_subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featured_articles.map((article, idx) => (
            <Link
              key={idx}
              href={article.slug}
              className="group rounded-lg border border-slate-800 bg-gradient-to-br from-slate-800/30 to-slate-900/40 backdrop-blur-sm p-8 hover:border-slate-700 transition-all hover:bg-slate-800/40"
            >
              <h3 className="text-lg font-bold group-hover:text-purple-400 transition-colors">
                {article.title}
              </h3>
              <p className="mt-4 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                Read →
              </p>
            </Link>
          ))}
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
