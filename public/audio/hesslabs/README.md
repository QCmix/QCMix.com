# HessLabs Audio Files

This directory contains music samples for the HessLabs licensing portfolio.

## Directory Structure

Place your MP3 files in this folder with the following naming convention:

### Film Samples
- `cinematic-tension.mp3`
- `emotional-journey.mp3`
- `action-sequence.mp3`

### Artist Samples
- `midnight-groove.mp3`
- `electric-dreams.mp3`

### Jingles
- `brand-opener.mp3`
- `product-launch.mp3`
- `corporate-identity.mp3`

## Adding New Samples

To add new music samples:

1. Place your MP3 file in this directory
2. Update `/app/hesslabs/page.tsx` and add a new entry to the `musicSamples` array
3. Follow this structure:

```typescript
{
  id: 'category-###',
  title: 'Your Track Title',
  category: 'Film' | 'Artist' | 'Jingles',
  description: 'Brief description of the track',
  duration: 'M:SS',
  bpm: 120, // optional
  key: 'C', // optional
  mood: ['Mood1', 'Mood2', 'Mood3'],
  filename: 'your-file-name.mp3'
}
```

## File Requirements

- **Format**: MP3
- **Bit Rate**: 320kbps recommended
- **Sample Rate**: 44.1kHz or 48kHz
- **File Size**: Keep under 10MB per file for optimal loading

## Notes

- All audio files in this directory are for the HessLabs licensing portfolio
- Make sure filenames match exactly what's specified in the page code
- Use lowercase and hyphens for filenames (e.g., `my-track-name.mp3`)
