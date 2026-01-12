import { PageHeader, Feature, Grid } from '../components/Editorial'
import { EditorialFooter } from '../components/Footer'

export default function BartendersPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      <PageHeader
        title="Bartenders"
        description="Career paths and the people who keep the rooms running."
      />
      <Feature
        title="A Career Bartender, Fifteen Years In"
        description="Still working five nights a week, prioritizing consistency over attention."
      />
      <Grid
        title="Bartender Spotlights"
        items={[
          {
            title: 'Mid-career bartender, downtown Davenport',
            description: 'Fifteen years behind the bar, no management title, no brand deals.'
          },
        ]}
      />
      <EditorialFooter />
    </main>
  )
}
