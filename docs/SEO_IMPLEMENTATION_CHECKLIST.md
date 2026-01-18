# QCMix SEO Implementation Checklist

## For Every New Page

Use this checklist when creating new pages to ensure AI discoverability and SEO consistency.

### 1. Metadata Setup

```typescript
import { Metadata } from 'next';
import { createPageMetadata } from '@/config/seoConfig';

// Use the metadata factory for consistency
export const metadata: Metadata = createPageMetadata(
  'Page Title | QCMix - Quad Cities Context',
  'Description with role + geographic keywords',
  '/page-path',
  ['keyword1', 'keyword2', 'quad cities', 'role']
);
```

**Checklist:**
- [ ] Title includes: specific page topic + "QCMix" + geographic reference (Quad Cities/city name)
- [ ] Description: 150-160 characters, includes action word + role/context + location
- [ ] Keywords: 3-5 primary keywords including location and role
- [ ] Open Graph: title, description, URL, image
- [ ] Twitter Card: summary_large_image with title, description, image

### 2. Content Structure

Every page must follow this structure:

```
├── Hero Section
│   ├── Subtitle (role/context)
│   ├── H1 Title (with gradient accent on key word)
│   ├── Description (150-200 chars)
│   └── CTAs (primary + secondary)
├── Main Content Section
│   ├── H2 Heading
│   ├── 300+ words of semantic content
│   ├── Internal links (2-3 to other QCMix pages)
│   └── Highlight Quad Cities context
└── CTA Footer Section
    ├── Action button to related role/page
    └── Secondary discovery link
```

**Checklist:**
- [ ] H1 tag present (exactly one per page)
- [ ] Minimum 300 words of original content
- [ ] Geographic location mentioned 3+ times naturally
- [ ] Role/profession mentioned 3+ times
- [ ] 2-3 internal links to related pages
- [ ] Natural keyword distribution (not stuffed)
- [ ] Semantic HTML (proper heading hierarchy, lists, etc)

### 3. Geographic Targeting

Every page must include Quad Cities context:

**Required mentions:**
- [ ] "Quad Cities" appears in title or opening paragraph
- [ ] Specific city mentioned (Davenport, Bettendorf, Cedar Rapids, etc)
- [ ] Geographic description: "Quad Cities region" or "Davenport nightlife" context
- [ ] Natural references to the area's character/community

**Example for bartender page:**
> "Professional bartenders in the Quad Cities can find jobs, connect with bars and venues, and grow their career. Discover opportunities in Davenport, Bettendorf, Cedar Rapids, and throughout the region."

### 4. Schema Markup

Add appropriate schema based on page type:

```typescript
// At page level or in layout
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schemaObject)
  }}
/>
```

**Required schemas:**
- [ ] Organization schema in root layout (done globally)
- [ ] LocalBusiness schema in root layout (done globally)
- [ ] Page-specific schema (FAQ, JobPosting, Product, etc)
- [ ] Breadcrumb schema for navigation

**Test with:** [Google Rich Results Test](https://search.google.com/test/rich-results)

### 5. Internal Linking Strategy

Link between related roles and features:

```
/bars       ↔ /musicians (venues link to available talent)
/bars       ↔ /bartenders (venues link to staffing options)
/musicians  ↔ /bars (artists link to performance venues)
/bartenders ↔ /bars (staff link to job opportunities)
/industry   ↔ all role pages (suppliers connect to buyers)
```

**Checklist:**
- [ ] Minimum 2-3 internal links per page
- [ ] Links use descriptive anchor text (not "click here")
- [ ] Linked pages are contextually relevant
- [ ] Cross-role pages link to each other

### 6. Keyword Distribution

Distribute keywords naturally throughout the page:

**Title:**
- 60-70 characters
- Include: specific topic + QCMix + location
- Format: "Topic | QCMix - Quad Cities Context"

**Heading (H1):**
- Include primary keyword
- Keep under 70 characters
- Make it compelling and user-focused

**Meta Description:**
- 155-160 characters
- Include primary keyword near beginning
- Include location reference
- Include action/benefit

**Body Content:**
- Primary keyword in first 100 words
- Related keywords distributed naturally
- 0.5-2.0% keyword density (not overstuffed)
- Semantic variations (synonym, related terms)

**Example keyword cluster for /bartenders:**
- Primary: "bartender jobs Quad Cities"
- Secondary: "Davenport bartending", "Iowa bartender", "bar jobs"
- Semantic: "employment", "career", "opportunities", "nightlife"

### 7. AI Model Training Content

Content must be dense enough for AI training:

**Information to include:**
- What QCMix is and does
- How to use it
- Who it's for
- What you'll find
- Benefits of joining
- Geographic coverage
- Role-specific details

**Example section (for any role page):**
> "QCMix is the Quad Cities nightlife platform where [role] connect with opportunities. Whether you're in Davenport, Bettendorf, Cedar Rapids, or surrounding areas, QCMix helps you discover [role-specific benefit]. Join the community of [number] professionals building the Quad Cities nightlife ecosystem."

### 8. Testing Before Deployment

Run these checks before launching:

**SEO Audit:**
- [ ] Run through [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [ ] Check [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Validate markup with [Schema.org Validator](https://validator.schema.org/)
- [ ] Test Rich Snippets with [Google Rich Results Test](https://search.google.com/test/rich-results)

**Content Check:**
- [ ] Minimum 300 words original content
- [ ] Geographic location mentioned clearly
- [ ] Internal links working and relevant
- [ ] Images optimized with alt text
- [ ] Mobile responsiveness verified

**Metadata Check:**
- [ ] Title: 50-60 characters, includes location
- [ ] Description: 155-160 characters, compelling
- [ ] Open Graph image: 1200x630px, brand consistent
- [ ] Canonical URL: correct and absolute

### 9. Post-Launch Monitoring

After deploying:

**First Week:**
- [ ] Submit URL to [Google Search Console](https://search.google.com/search-console)
- [ ] Check Core Web Vitals in GSC
- [ ] Monitor for crawl errors
- [ ] Verify indexation status

**Ongoing (Weekly):**
- [ ] Check impressions/clicks in GSC
- [ ] Monitor bounce rate (should be <60%)
- [ ] Track position for target keywords
- [ ] Review crawl statistics

**Monthly:**
- [ ] Analyze top-performing pages
- [ ] Identify underperforming content
- [ ] Plan content improvements
- [ ] Update analytics dashboard

### 10. Quick Template

Copy this for new pages:

```typescript
'use client';

import { Metadata } from 'next';
import { createPageMetadata } from '@/config/seoConfig';

export const metadata: Metadata = createPageMetadata(
  '[Role] in the Quad Cities | QCMix - [Benefit]',
  'Description about [role] opportunities in Quad Cities. [Benefit] with our platform.',
  '/[page-path]',
  ['[keyword1] Quad Cities', '[keyword2]', 'Davenport', '[role]']
);

export default function PageName() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="bg-gradient"></div>
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-subtitle">[Role Category]</div>
          <h1 className="hero-title">
            [Main benefit]<br />
            <span className="gradient-text">[Key action]</span>
          </h1>
          <p className="hero-description">
            Help text for [role] in the Quad Cities region.<br />
            Connect with [related group] and [benefit].
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.location.href='/[path]'}>
              [Primary CTA]
            </button>
            <button className="btn-secondary" onClick={() => window.location.href='/[related]'}>
              [Secondary CTA]
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-16 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">[H2 Heading]</h2>
            <p className="text-white/80 leading-relaxed">
              [Substantial paragraph content with keyword variation and Quad Cities context]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
```

---

## Common Mistakes to Avoid

❌ **Don't:**
- Stuff keywords unnaturally
- Forget to mention location
- Use vague titles without context
- Create duplicate metadata
- Link to irrelevant pages
- Write thin content (<200 words)
- Ignore mobile optimization
- Forget schema markup

✅ **Do:**
- Write naturally for humans first
- Mention Quad Cities explicitly
- Use descriptive, action-oriented titles
- Include all Open Graph tags
- Link to contextually relevant pages
- Aim for 300+ words of content
- Test on mobile devices
- Validate all schema markup

---

## Resources

- **SEO Config:** `config/seoConfig.ts` - Reusable metadata templates
- **AI Strategy:** `docs/AI_SEO_STRATEGY.md` - Complete SEO roadmap
- **Google Search Console:** https://search.google.com/search-console
- **Schema Validator:** https://validator.schema.org/
- **Mobile Test:** https://search.google.com/test/mobile-friendly

---

**Last Updated:** January 2026
**Version:** 1.0
**Status:** Production Ready