/**
 * Image usage guidelines for QCMix (documentation-only)
 *
 * Preferred aspect ratios
 * - Hero: 21:9
 * - Section: 16:9
 *
 * Styling rules
 * - rounded-2xl
 * - ring-1 ring-line
 * - optional bg-glass overlay
 *
 * Folder structure
 * - /public/images/sections/
 *
 * Image philosophy
 * - documentary
 * - real venues / people
 * - no stock photography
 */
export const imageGuidelines = {
  aspectRatios: {
    hero: '21:9',
    section: '16:9',
  },
  styling: {
    borderRadius: 'rounded-2xl',
    ring: 'ring-1 ring-line',
    overlay: 'optional bg-glass overlay',
  },
  folders: {
    sections: '/public/images/sections/',
  },
  philosophy: {
    approach: 'documentary',
    subjects: 'real venues / people',
    avoid: 'no stock photography',
  },
};
