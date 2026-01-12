import Link from "next/link";

interface FooterLink {
  label: string;
  url: string;
}

interface FooterProps {
  tagline_lines: string[];
  links: FooterLink[];
}

export function Footer({ tagline_lines, links }: FooterProps) {
  return (
    <footer className="border-t border-slate-800 py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-2">
            <h3 className="text-4xl font-black tracking-tight">QCMix</h3>
            <div className="space-y-1">
              {tagline_lines.map((line, idx) => (
                <p key={idx} className="text-slate-300 text-sm">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="flex gap-12">
            {[0, 1].map((colIdx) => {
              const itemsPerCol = Math.ceil(links.length / 2);
              const colLinks = links.slice(
                colIdx * itemsPerCol,
                (colIdx + 1) * itemsPerCol
              );
              return (
                <div key={colIdx} className="space-y-3">
                  {colLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.url}
                      className="block text-slate-300 hover:text-purple-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} QCMix. Independent. Quad Cities focused.
          </p>
        </div>
      </div>
    </footer>
  );
}
