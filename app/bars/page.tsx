import Nav from '../components/Nav'
import { PageHeader, Feature, Grid } from '../components/Editorial'
import { EditorialFooter } from '../components/Footer'

export default function BarsPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      <Nav />
      <PageHeader
        title="Bars"
        description="The rooms and neighborhoods that shape Quad Cities nightlife."
      />
      <Feature
        title="Raccoon Motel"
        description="A small room that prioritizes sound, booking consistency, and audience trust."
      />
      <Grid
        title="QC Recommended Bars"
        items={[
          { title: 'Raccoon Motel', description: 'Editorial feature on room-driven longevity.' },
          { title: 'Local Venue', description: 'Paid placement example.', isPaid: true },
        ]}
      />
      <EditorialFooter />
    </main>
  )
}
