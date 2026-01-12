export default function BarsPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      <Header
        title="Bars"
        description="The rooms, layouts, and neighborhoods that shape nightlife in the Quad Cities."
      />

      <EditorialFeature
        title="Why Certain Bars Endure"
        description="Some spaces outlive trends. Others disappear quietly."
      />

      <Grid title="QC Recommended Bars" />
    </main>
  )
}
