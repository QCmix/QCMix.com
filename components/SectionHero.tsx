import Image from 'next/image';

interface SectionHeroProps {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

/**
 * SectionHero Component
 *
 * Reusable hero section with optional image support.
 *
 * Default behavior (no imageSrc):
 * - Renders as semantic text header section
 * - No additional height or visual overhead
 * - Matches existing header styling across pages
 *
 * Image-ready behavior (with imageSrc):
 * - Displays 21:9 aspect ratio image container
 * - Uses existing Tailwind tokens only (bg-panel, ring-1 ring-line, rounded-2xl)
 * - Image is optional and non-blocking
 */
export default function SectionHero({
  title,
  description,
  imageSrc,
  imageAlt,
}: SectionHeroProps) {
  return (
    <section className="w-full px-6 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-8xl">
        <header className={imageSrc ? 'mb-8' : ''}>
          <h1 className="text-display-lg font-bold text-ink-primary">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-lg text-ink-secondary max-w-prose">
              {description}
            </p>
          )}
        </header>

        {imageSrc && (
          <div className="rounded-2xl bg-panel ring-1 ring-line overflow-hidden">
            {/* 21:9 Aspect Ratio Container */}
            <div className="relative w-full" style={{ aspectRatio: '21 / 9' }}>
              <Image
                src={imageSrc}
                alt={imageAlt || title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 88rem"
                priority={false}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
