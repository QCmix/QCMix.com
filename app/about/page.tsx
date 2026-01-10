export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">
      <section>
        <h1 className="text-3xl font-bold">About QCMix</h1>
        <p className="mt-4">
          QCMix is an independent editorial platform focused on the bartending,
          bar, and live music ecosystem of the Quad Cities.
        </p>
        <p className="mt-2">
          The site exists to document what is actually happening on the ground —
          which venues are operating, where music is being booked, and how
          service-industry professionals work and connect in this region.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Coverage Area</h2>
        <p className="mt-4">
          QCMix covers venues and industry activity within the Quad Cities,
          including Davenport, Bettendorf, Rock Island, Moline, East Moline, and
          Silvis.
        </p>
        <p className="mt-2">
          Venues outside this area are not included unless they explicitly
          operate as part of the Quad Cities nightlife or music circuit.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Editorial Standards</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>
            Venues listed on QCMix must be currently operating, newly opened, or
            have a confirmed upcoming opening date.
          </li>
          <li>
            Operating status, hours, and offerings are verified using public
            sources such as official websites, social media, and direct venue
            communication.
          </li>
          <li>
            QCMix does not accept payment for basic inclusion in editorial
            listings.
          </li>
          <li>
            Sponsored placements or paid features, when offered, are clearly
            labeled and separated from editorial content.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Corrections & Updates</h2>
        <p className="mt-4">
          The bar and music landscape changes frequently. If information on
          QCMix is outdated or incorrect, corrections are welcomed.
        </p>
        <p className="mt-2">
          Venue owners, staff, and readers can request updates through the
          contact information listed on the site.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">How QCMix Is Supported</h2>
        <p className="mt-4">
          QCMix is supported through optional paid tools, premium features, and
          clearly disclosed sponsorships. Editorial coverage is not contingent
          on payment.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4">
          QCMix is independently operated. Questions, corrections, or
          collaboration inquiries can be directed through the site’s contact
          channels.
        </p>
      </section>
    </main>
  );
}
