import Link from "next/link";

export default function IndustryJoinPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Industry Join
        </h1>
        <p className="mt-4 text-base text-neutral-600">
          Industry Join is the structured on-ramp into the internal QCMix community.
          This establishes identity and representation first — not promotion.
        </p>
      </header>

      <section className="space-y-4 text-neutral-700">
        <p>
          This space is built for the people who work the scene, support it,
          and help sustain it — from behind the bar to behind the music.
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Representation is free.</strong> No payment is required to exist here.
          </li>
          <li>
            <strong>Promotion is earned or paid — and always labeled.</strong>
            Editorial judgment remains independent.
          </li>
          <li>
            <strong>21+ by default.</strong> Verified exceptions exist for working
            under-21 bartenders and musicians aged 18–20.
          </li>
        </ul>
      </section>

      <section className="mt-12 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/industry/join/role"
          className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Start Industry Join
        </Link>

        <Link
          href="/industry/join#how-it-works"
          className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
        >
          Learn how access works
        </Link>
      </section>

      <section id="how-it-works" className="mt-20 border-t pt-10 text-sm text-neutral-600">
        <h2 className="text-base font-semibold text-neutral-900">
          How access works
        </h2>
        <p className="mt-3">
          Everyone starts in a basic state. Additional tools, visibility, and
          participation unlock through verification, contribution, and trust.
          Payment may unlock labeled exposure, but never control.
        </p>
      </section>
    </main>
  );
}
