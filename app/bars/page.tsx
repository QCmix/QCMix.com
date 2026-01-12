import { GlobalNav } from '../components/Nav'
import { PageHeader, Feature, Grid } from '../components/Editorial'

export default function BarsPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      <GlobalNav />
      <PageHeader
        title="Bars"
        description="The rooms and neighborhoods that shape Quad Cities nightlife."
      />
      <Feature
        title="Raccoon Motel"
        description="A small room that punches above its weight in consistency and sound."
      />
      <Grid
        title="QC Recommended Bars"
        items={[
          { title: 'Raccoon Motel', description: 'Editorial feature on room-driven longevity.' },
          { title: 'Local Venue', description: 'Paid placement example.', isPaid: true },
        ]}
      />
    </main>
  )
}
