import { GlobalNav } from '../components/Nav'
import { PageHeader, Feature, Grid } from '../components/Editorial'

export default function BartendersPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      <GlobalNav />
      <PageHeader
        title="Bartenders"
        description="Career paths and the people who keep the rooms running."
      />
      <Feature
        title="A 15-Year Bartender Still Showing Up"
        description="Why longevity matters more than novelty behind the bar."
      />
      <Grid
        title="Bartender Spotlights"
        items={[
          { title: 'Veteran Bartender', description: 'Editorial profile focused on longevity.' },
        ]}
      />
    </main>
  )
}
