interface Role {
  role: string;
  body: string;
  tagline: string;
}

interface RoleCardsProps {
  roles: Role[];
}

export function RoleCards({ roles }: RoleCardsProps) {
  return (
    <section className="py-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-slate-800 bg-gradient-to-br from-slate-800/30 to-slate-900/40 backdrop-blur-sm p-8 hover:border-slate-700 transition-all hover:bg-slate-800/40 flex flex-col"
            >
              <h3 className="text-lg font-bold mb-4">{role.role}</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                {role.body}
              </p>
              <p className="text-purple-400 font-semibold text-sm italic">
                "{role.tagline}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
