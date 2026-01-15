'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ============================================
// MUSIC CATEGORIES & SAMPLES DATA
// ============================================

interface MusicSample {
  id: string;
  title: string;
  category: 'Film' | 'Artist' | 'Jingles';
  description: string;
  duration: string;
  bpm?: number;
  key?: string;
  mood: string[];
  filename: string;
}

const musicSamples: MusicSample[] = [
  // Film Samples
  {
    id: 'film-001',
    title: 'Cinematic Tension',
    category: 'Film',
    description: 'Building suspense with orchestral strings and deep percussion',
    duration: '2:34',
    bpm: 110,
    key: 'Dm',
    mood: ['Dark', 'Suspenseful', 'Dramatic'],
    filename: 'cinematic-tension.mp3'
  },
  {
    id: 'film-002',
    title: 'Emotional Journey',
    category: 'Film',
    description: 'Piano-driven piece with gentle strings, perfect for heartfelt scenes',
    duration: '3:12',
    bpm: 85,
    key: 'C',
    mood: ['Emotional', 'Uplifting', 'Reflective'],
    filename: 'emotional-journey.mp3'
  },
  {
    id: 'film-003',
    title: 'Action Sequence',
    category: 'Film',
    description: 'High-energy orchestral with driving percussion and brass',
    duration: '2:45',
    bpm: 140,
    key: 'Am',
    mood: ['Intense', 'Powerful', 'Epic'],
    filename: 'action-sequence.mp3'
  },
  
  // Artist Samples
  {
    id: 'artist-001',
    title: 'Midnight Groove',
    category: 'Artist',
    description: 'Smooth jazz-fusion with electronic elements',
    duration: '3:45',
    bpm: 95,
    key: 'F#m',
    mood: ['Smooth', 'Contemporary', 'Urban'],
    filename: 'midnight-groove.mp3'
  },
  {
    id: 'artist-002',
    title: 'Electric Dreams',
    category: 'Artist',
    description: 'Synthwave-inspired track with nostalgic vibes',
    duration: '4:01',
    bpm: 118,
    key: 'E',
    mood: ['Nostalgic', 'Energetic', 'Retro'],
    filename: 'electric-dreams.mp3'
  },
  
  // Jingles
  {
    id: 'jingle-001',
    title: 'Brand Opener',
    category: 'Jingles',
    description: 'Upbeat 15-second brand introduction',
    duration: '0:15',
    bpm: 120,
    mood: ['Upbeat', 'Catchy', 'Professional'],
    filename: 'brand-opener.mp3'
  },
  {
    id: 'jingle-002',
    title: 'Product Launch',
    category: 'Jingles',
    description: 'Exciting 30-second jingle for product reveals',
    duration: '0:30',
    bpm: 128,
    mood: ['Exciting', 'Modern', 'Bold'],
    filename: 'product-launch.mp3'
  },
  {
    id: 'jingle-003',
    title: 'Corporate Identity',
    category: 'Jingles',
    description: 'Sophisticated 20-second corporate signature',
    duration: '0:20',
    bpm: 100,
    mood: ['Professional', 'Trustworthy', 'Clean'],
    filename: 'corporate-identity.mp3'
  }
];

// ============================================
// MAIN COMPONENT
// ============================================

export default function HessLabsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Film' | 'Artist' | 'Jingles'>('All');
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  const filteredSamples = selectedCategory === 'All' 
    ? musicSamples 
    : musicSamples.filter(sample => sample.category === selectedCategory);

  const categories = ['All', 'Film', 'Artist', 'Jingles'] as const;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#08080f] via-[#0d0d15] to-[#08080f]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-6 overflow-hidden" aria-label="HessLabs Music Production and Licensing">
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Image - No Overlay */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-4xl aspect-[16/9]">
              <Image
                src="/images/hesslabs/Hess_SongLab_Logo.png"
                alt="HessLabs SongLab - Professional Music Production and Licensing"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Header Content */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl text-white/90 mb-6 font-medium">
              Producer and Song-Writer with Real World Industry Experience
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 mb-6">
              Professional Music Licensing for Film, Artists, and Commercial Projects
            </p>
            
            <p className="text-lg md:text-xl text-white/70 mb-6">
              Singles, Full Concept Albums, Soundtracks, Jingles
            </p>
            
            <p className="text-lg md:text-xl text-white/80 mb-4">
              I offer ready-to-go songs and complete custom builds for your project.
            </p>
            
            <p className="text-xl md:text-2xl font-semibold text-white/90">
              Have something you need fast? Done right? Then let&apos;s talk.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white text-center">
              Available Music Samples
            </h2>
            
            {/* Catalogue Note */}
            <div className="max-w-3xl mx-auto mb-6 bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-white/70 text-sm text-center leading-relaxed">
                <strong className="text-white/90">Note:</strong> This does not represent the full catalogue of songs available immediately. 
                To see the complete catalogue of available tracks, you will need to register an account with HessLabs.
              </p>
            </div>
            
            <div className="flex justify-center gap-3 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Music Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSamples.map((sample) => (
              <MusicCard
                key={sample.id}
                sample={sample}
                isPlaying={currentlyPlaying === sample.id}
                onPlay={() => setCurrentlyPlaying(sample.id)}
                onPause={() => setCurrentlyPlaying(null)}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredSamples.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/50 text-lg">No samples in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Services & Use Cases */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-white text-center">
            Services & Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-white/90 mb-2">Film & Television Licensing</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Original scores and licensed tracks for narrative film, documentary, broadcast television, and streaming content. Rights-clear and delivery-ready.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white/90 mb-2">Brand / Commercial Music</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Custom jingles, background tracks, and sonic branding for advertising, corporate video, product launches, and brand identity campaigns.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white/90 mb-2">Artist Projects & Collaboration</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Production, co-writing, and arrangement for independent artists, concept albums, and full-length releases across multiple genres.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white/90 mb-2">Custom Scores & Fast-Turn Builds</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Expedited custom composition for tight deadlines. Specialized in rapid turnaround without compromising quality or licensing clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Trust Stack */}
      <section className="py-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-white/90 font-medium text-sm mb-1">ASCAP Registered</p>
              <p className="text-white/50 text-xs">Professional affiliation</p>
            </div>
            <div>
              <p className="text-white/90 font-medium text-sm mb-1">Film & TV Usage</p>
              <p className="text-white/50 text-xs">Licensed placements</p>
            </div>
            <div>
              <p className="text-white/90 font-medium text-sm mb-1">Rights-Clear</p>
              <p className="text-white/50 text-xs">No clearance issues</p>
            </div>
            <div>
              <p className="text-white/90 font-medium text-sm mb-1">Fast Turnaround</p>
              <p className="text-white/50 text-xs">Deadline-capable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing Clarity */}
      <section className="py-12 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-white text-center">Licensing Information</h2>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-white/70 text-sm leading-relaxed space-y-3">
            <p>
              All music on this site is original composition and fully rights-clear for licensing. No samples, no clearance complications.
            </p>
            <p>
              Commercial licensing is available for film, television, advertising, branded content, and artist projects. Standard, exclusive, and custom license terms can be arranged based on your project needs.
            </p>
            <p>
              For fast-turn projects or specific usage questions, contact directly to discuss scope, rights, and delivery timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 border-t border-white/5" aria-label="Contact for licensing">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Whether you need a custom composition or want to license existing work, let&apos;s discuss scope, rights, and delivery timelines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:licensing@hesslabs.com"
              className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-200"
            >
              Contact for Licensing
            </a>
            <Link
              href="/"
              className="px-8 py-3.5 bg-white/5 text-white/90 rounded-lg font-medium hover:bg-white/10 border border-white/10 transition-all duration-200"
            >
              Back to QCMix
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} HessLabs. All music available for licensing.</p>
          <p className="mt-2">High-quality compositions for Film, Artist Projects, and Commercial Use.</p>
        </div>
      </footer>
    </main>
  );
}

// ============================================
// MUSIC CARD COMPONENT
// ============================================

interface MusicCardProps {
  sample: MusicSample;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
}

function MusicCard({ sample, isPlaying, onPlay, onPause }: MusicCardProps) {
  const categoryColors = {
    Film: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
    Artist: 'from-violet-500/20 to-purple-500/20 border-violet-500/30',
    Jingles: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30'
  };

  const categoryBadgeColors = {
    Film: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    Artist: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    Jingles: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
  };

  return (
    <div className={`group relative bg-gradient-to-br ${categoryColors[sample.category]} backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-white/5 hover:scale-[1.02]`}>
      {/* Card Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-violet-300 transition-colors">
              {sample.title}
            </h3>
            <p className="text-sm text-white/60">
              {sample.description}
            </p>
          </div>
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${categoryBadgeColors[sample.category]} ml-3 whitespace-nowrap`}>
            {sample.category}
          </span>
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-4 mb-4 text-xs text-white/50">
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {sample.duration}
          </span>
          {sample.bpm && (
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              {sample.bpm} BPM
            </span>
          )}
          {sample.key && (
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
              </svg>
              {sample.key}
            </span>
          )}
        </div>

        {/* Mood Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {sample.mood.map((mood) => (
            <span key={mood} className="px-2 py-0.5 bg-white/5 text-white/60 rounded text-xs border border-white/10">
              {mood}
            </span>
          ))}
        </div>

        {/* Audio Player */}
        <div className="bg-black/20 rounded-lg p-3 border border-white/10">
          <audio 
            controls 
            className="w-full h-8"
            preload="metadata"
            onPlay={onPlay}
            onPause={onPause}
          >
            <source src={`/audio/hesslabs/${sample.filename}`} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Download/License Button */}
        <button className="mt-4 w-full px-4 py-2 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white rounded-lg text-sm font-medium transition-all duration-200 border border-white/10 hover:border-white/20 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Request License
        </button>
      </div>
    </div>
  );
}
