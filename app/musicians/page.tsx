export default function MusiciansPage() {
  return (
    <main className="bg-[#08080f] text-white min-h-screen">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-sm text-white/60 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-violet-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
            </svg>
            <span>Musicians & Bands</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.95]">
            <span className="text-white">Play the rooms</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              that matter
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-12">
            Venue visibility and credibility for local musicians. Get found by the right rooms and build momentum in the scene you're part of.
          </p>

          <a href="/join/musician" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold hover:from-violet-700 hover:to-purple-700 transition-all transform hover:scale-105">
            Create Musician Profile
          </a>
        </div>
      </section>

      {/* ==================== REALITY SECTION ==================== */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">The Reality</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0d0d16] border border-white/[0.06]">
              <h3 className="text-lg font-semibold text-white/80 mb-2">Booking is opaque</h3>
              <p className="text-white/50">Hard to know who books, when they book, or what they're looking for</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0d0d16] border border-white/[0.06]">
              <h3 className="text-lg font-semibold text-white/80 mb-2">Promotion favors noise</h3>
              <p className="text-white/50">The loudest accounts get seen, not necessarily the best music</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0d0d16] border border-white/[0.06]">
              <h3 className="text-lg font-semibold text-white/80 mb-2">Scenes lack infrastructure</h3>
              <p className="text-white/50">No central place to see what's happening or who's involved</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Built for musicians who care about the scene
            </h2>
            <p className="text-lg text-white/50">
              Tools that help you build real connections and grow the right way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-8 rounded-2xl bg-[#0d0d16] border border-white/[0.06] hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center text-violet-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Discoverable Profile</h3>
              <p className="text-white/50">Get found by venues and fans who are looking for your sound</p>
            </div>

            <div className="group p-8 rounded-2xl bg-[#0d0d16] border border-white/[0.06] hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center text-violet-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m0-18H21l-.5.5m.5-.5v18m-18 0h18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Venue Visibility</h3>
              <p className="text-white/50">Showcase your gigs and build credibility with real bookings</p>
            </div>

            <div className="group p-8 rounded-2xl bg-[#0d0d16] border border-white/[0.06] hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center text-violet-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Editorial Coverage</h3>
              <p className="text-white/50">Get featured in scene stories and build your reputation</p>
            </div>

            <div className="group p-8 rounded-2xl bg-[#0d0d16] border border-white/[0.06] hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center text-amber-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25s4.544.16 6.75.471v1.515M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228a25.28 25.28 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Scene Credibility</h3>
              <p className="text-white/50">Build reputation through real connections, not just followers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CALL TO ACTION ==================== */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to join the scene?
          </h2>
          <p className="text-lg text-white/50 mb-8 max-w-2xl mx-auto">
            Connect with venues, build your reputation, and become part of the Quad Cities music community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/join/musician" className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold hover:from-violet-700 hover:to-purple-700 transition-all">
              Create Profile
            </a>
            <a href="/editorial/music" className="px-8 py-4 rounded-lg border border-white/[0.06] text-white font-semibold hover:bg-white/[0.04] transition-all">
              Read Music Stories
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
