import { PageHeader, Feature, Grid } from '../components/Editorial'
import { EditorialFooter } from '../components/Footer'

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      <PageHeader
        title="Music"
        description="Live performance and the rooms that give it meaning."
      />
      <Feature
        title="A Quiet Tuesday That Worked"
        description="Why smaller crowds don’t mean weaker shows."
      />
      <Grid
        title="Recent Performances"
        items={[
          {
            title: 'Local band at Raccoon Motel',
            description: 'A focused set in a half-full room that still landed.'
          },
        ]}
      />
      <EditorialFooter />
    </main>
  )
}
