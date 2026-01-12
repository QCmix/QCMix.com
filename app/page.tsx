import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { StatementBanner } from "@/components/StatementBanner";
import { RoleCards } from "@/components/RoleCards";
import { TextBlock } from "@/components/TextBlock";
import { EditorialPreview } from "@/components/EditorialPreview";
import { JoinCTA } from "@/components/JoinCTA";
import { Footer } from "@/components/FooterNew";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <Hero
        headline="Stop guessing. Start seeing."
        subheadline="QCMix connects bars, bartenders, musicians, and promoters across the Quad Cities  so you know who's real before you work together."
        cta_primary={{
          label: "Explore the Scene",
          url: "/explore",
        }}
        cta_secondary={{
          label: "Join as Industry",
          url: "/join",
        }}
      />

      <FeatureGrid
        section_label="What You Can Do Here"
        section_note="No account required"
        features={[
          {
            title: "Explore Real Venues",
            description:
              "Browse verified Quad Cities bars and venues. See who runs them, who works there, and what kind of nights they're known for.",
            icon: "venue",
          },
          {
            title: "Discover Local Music",
            description:
              "Find bands playing real rooms  not promo noise. See where they play, how often, and who they work with.",
            icon: "music",
          },
          {
            title: "Read the Editorial",
            description:
              "Coverage on bartending, bar operations, live music, and nightlife culture  written for people inside the scene.",
            icon: "editorial",
          },
          {
            title: "Understand the Ecosystem",
            description:
              "See how the Quad Cities nightlife actually functions across Iowa and Illinois  who connects to who, and why it works when it works.",
            icon: "network",
          },
        ]}
      />

      <StatementBanner
        headline="One city. Many roles. Shared visibility."
        subtext="QCMix isn't built for one side of the bar. It's built for the whole ecosystem."
      />

      <RoleCards
        roles={[
          {
            role: "Bars & Owners",
            body: "Access experienced bartenders, musicians, distributors, and promoters in one place. Be known as a bar that's run well, treats people right, and shows up every day.",
            tagline: "Good bars attract good people.",
          },
          {
            role: "Bartenders & Bar Staff",
            body: "Find bars that are organized, respectful, and consistent. See management styles before walking in blind. Build a professional presence tied to real venues.",
            tagline: "Where you work matters.",
          },
          {
            role: "Musicians & Bands",
            body: "Get direct visibility to venues and decision-makers. Be connected to rooms that actually book. Build momentum in the scene you're part of.",
            tagline: "Play the right rooms. Grow the right way.",
          },
          {
            role: "Distributors & Industry Partners",
            body: "Understand the landscape before selling into it. See active venues, real teams, and how the scene moves.",
            tagline: "Context beats cold calls.",
          },
          {
            role: "Promoters",
            body: "Align venues, bands, and audiences without guessing. Build better shows by knowing the room, the people, and the culture.",
            tagline: "Better alignment makes better nights.",
          },
        ]}
      />

      <TextBlock
        headline="Transparency builds stronger nights."
        body="QCMix is built on visibility. When everyone can see how the scene actually works:"
        bullet_points={[
          "Weak operations fade out",
          "Strong teams rise",
          "Accountability becomes culture",
          "The people who care get recognized",
        ]}
        closing="This platform is for owners who give a damn, bartenders who take pride in their craft, musicians who put in the work, and partners who respect the ecosystem."
      />

      <EditorialPreview
        section_headline="From the Editorial"
        section_subheadline="Real stories from inside the Quad Cities nightlife."
        featured_articles={[
          {
            title: "The Quad Cities Nightlife Ecosystem",
            slug: "/editorial/qc-nightlife-ecosystem",
          },
          {
            title: "What a Night Actually Looks Like  Open to Close",
            slug: "/editorial/open-to-close",
          },
          {
            title: "Why Regional Music Scenes Still Matter",
            slug: "/editorial/regional-music-scenes",
          },
          {
            title: "Behind the Bar: The Work You Don't See",
            slug: "/editorial/behind-the-bar",
          },
        ]}
        cta={{
          label: "Read the Editorial",
          url: "/editorial",
        }}
      />

      <TextBlock
        headline="Why QCMix Exists"
        body="QCMix was built by people inside the scene  not outsiders trying to monetize it."
        bullet_points={[
          "Connect the right people",
          "Reduce friction",
          "Reward professionalism",
          "Strengthen the Quad Cities nightlife long-term",
        ]}
        closing="No hype cycles. No influencer nonsense. Just real infrastructure for a real scene."
      />

      <JoinCTA
        headline="Industry Join"
        subheadline="If you're part of the scene  this is your platform."
        role_options={[
          "Bar Owner / Management",
          "Bartender",
          "Bar Staff (Security, Door, BOH)",
          "Musician / Band",
          "Distributor / Partner",
        ]}
        steps={[
          "Start basic.",
          "Verify when ready.",
          "Build your presence over time.",
        ]}
        cta={{
          label: "Join the Industry",
          url: "/join",
        }}
      />

      <Footer
        tagline_lines={[
          "Independent.",
          "Quad Cities focused.",
          "Built for bars, bartenders, musicians, and the people who make nightlife work.",
        ]}
        links={[
          { label: "Explore", url: "/explore" },
          { label: "Editorial", url: "/editorial" },
          { label: "Join", url: "/join" },
          { label: "About", url: "/about" },
        ]}
      />
    </main>
  );
}
