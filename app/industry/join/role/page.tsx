import Link from "next/link";

type Role = {
  title: string;
  description: string;
  href: string;
};

const roles: Role[] = [
  {
    title: "Bar Owner & Management",
    description: "Ownership, management, and venue operations.",
    href: "/industry/join/eligibility?role=owner",
  },
  {
    title: "Bartender",
    description: "Guest-facing bar service and floor leadership.",
    href: "/industry/join/eligibility?role=bartender",
  },
  {
    title: "Bar Worker",
    description: "Barback, BOH, security, and door staff.",
    href: "/industry/join/eligibility?role=worker",
  },
  {
    title: "Distributor",
    description: "Beverage distribution and brand representation.",
    href: "/industry/join/eligibility?role=distributor",
  },
  {
    title: "Musician",
    description: "Performing artists and working musicians.",
    href: "/industry/join/eligibility?role=musician",
  },
  {
    title: "Patron",
    description: "Supporters and regular participants in the scene.",
    href: "/industry/join/eligibility?role=patron",
  },
];

export default function IndustryJoinRolePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight">
          Choose your primary role
        </h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">
          Select the role that best matches what you do most. Roles determine
          permissions and tools. They are functional — not status-based.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {roles.map((role) => (
          <Link
            key={role.title}
            href={role.href}
            className="group rounded-lg border border-neutral-200 p-6 transition hover:border-neutral-400 hover:bg-neutral-50"
          >
            <h2 className="text-lg font-medium text-neutral-900">
              {role.title}
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              {role.description}
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-neutral-900">
              Continue →
            </span>
          </Link>
        ))}
      </section>

      <footer className="mt-16 border-t pt-6 text-sm text-neutral-600">
        One primary role is required at join. Additional context can be added
        later. Role changes require review.
      </footer>
    </main>
  );
}
