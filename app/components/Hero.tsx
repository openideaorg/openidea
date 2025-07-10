'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c2321] via-[#121f22] to-[#0a1016]">
        {/* Spot Light Effect */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-radial from-emerald-400/20 to-transparent opacity-80 blur-3xl"></div>
        </div>
        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Text */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
                <span className="block mb-1 text-gray-100">The future of</span>
                <span className="block text-transparent bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-400 bg-clip-text animate-glow">
                  INNOVATION
                </span>
              </h1>
              <p className="text-lg md:text-xl text-teal-100/90 font-medium mt-6">
                The World's Open Innovation Infrastructure
              </p>
              <p className="mt-2 text-teal-200/70 text-lg md:text-xl">
                The Home for Builders, Dreamers, and Doers
              </p>
              <p className="mt-2 text-gray-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                All the world's open knowledge—unified. Build, collaborate, and
                change the world together, openly.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:justify-start gap-4 justify-center">
                <a
                  href="#beta"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 font-semibold rounded-lg shadow-lg transition hover:scale-105 hover:shadow-neon"
                >
                  Join the Beta
                </a>
                <a
                  href="#access"
                  className="inline-block px-8 py-3 border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-gray-900 font-semibold rounded-lg transition shadow"
                >
                  Get Early Access
                </a>
              </div>
            </div>
            {/* Image */}
            <div className="lg:col-span-6 flex justify-center items-center mt-14 lg:mt-0">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-2xl bg-gradient-to-tr from-[#19343d] via-[#152624] to-[#0f1b1c] shadow-lg flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl z-0 blur-2xl bg-gradient-radial from-emerald-300/20 to-transparent" />
                <Image
                  src="/eco.png"
                  alt="Open Innovation"
                  fill
                  className="object-contain z-10 drop-shadow-[0_0_32px_#12ffb8bb]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* Subtle Divider */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60" />
      </section>

      <section className="py-20 bg-gradient-to-br from-[#10171a] via-[#0f2220] to-[#0d1619] text-white relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-radial from-emerald-500/20 to-transparent blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text mb-4 animate-glow">
              Unifying open research, code, data, and designs
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-teal-100/80 font-medium">
              Discover every open resource you need—research, code, datasets,
              designs, and more—in one powerful search. Turn inspiration into
              action: start projects, remix ideas, and join a thriving community
              of innovators, makers, and thinkers. Accelerate your vision.
              Multiply your impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 rounded-xl border border-emerald-400/40 bg-[#172024] hover:shadow-[0_0_24px_#12ffb890] transition text-center">
              <div className="mx-auto mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-blue-600/70 text-cyan-300 shadow">
                <i className="fas fa-search text-2xl"></i>
              </div>
              <h3 className="mt-6 text-lg font-semibold">Unified Search</h3>
              <p className="mt-2 text-base text-teal-100/80">
                Find open-source code, research papers, datasets, hardware
                designs, videos, and more from across the web—all in one place.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-emerald-400/40 bg-[#172024] hover:shadow-[0_0_24px_#14ff6e80] transition text-center">
              <div className="mx-auto mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-neon-green text-gray-900 shadow">
                <i className="fas fa-rocket text-2xl"></i>
              </div>
              <h3 className="mt-6 text-lg font-semibold">
                Build and Launch Projects
              </h3>
              <p className="mt-2 text-base text-teal-100/80">
                Start new projects using open resources as building blocks.
                Create public or private workspaces, document your progress, and
                invite collaborators.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-emerald-400/40 bg-[#172024] hover:shadow-[0_0_24px_#b38fff80] transition text-center">
              <div className="mx-auto mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-purple-600/70 text-purple-100 shadow">
                <i className="fas fa-users text-2xl"></i>
              </div>
              <h3 className="mt-6 text-lg font-semibold">Join the Community</h3>
              <p className="mt-2 text-base text-teal-100/80">
                Connect with fellow innovators, experts, and learners worldwide.
                Share feedback, ask questions, join groups, and participate in
                events.
              </p>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="mt-20 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-40" />
      </section>

      <section className="py-20 bg-gradient-to-br from-[#111c1c] via-[#0f2021] to-[#0b1517] text-white relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-1/4 top-0 w-[600px] h-[300px] bg-gradient-radial from-cyan-400/20 to-transparent blur-2xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-14">
            <h2 className="text-base text-cyan-300 font-semibold tracking-widest uppercase">
              Our Purpose
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-transparent bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-400 bg-clip-text animate-glow">
              Mission & Vision
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#162322] rounded-xl border border-emerald-400/30 shadow-lg p-8">
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0 bg-cyan-400/20 p-3 rounded-lg">
                  <i className="fas fa-bullseye text-cyan-300 text-xl"></i>
                </span>
                <h3 className="text-xl font-bold text-cyan-200">Mission</h3>
              </div>
              <p className="mt-4 text-teal-100/80">
                To democratize innovation by providing an open, AI-powered
                platform where impactful projects across all domains can launch,
                connect, and thrive together.
              </p>
            </div>
            <div className="bg-[#162322] rounded-xl border border-emerald-400/30 shadow-lg p-8">
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0 bg-emerald-400/20 p-3 rounded-lg">
                  <i className="fas fa-eye text-emerald-300 text-xl"></i>
                </span>
                <h3 className="text-xl font-bold text-emerald-200">Vision</h3>
              </div>
              <p className="mt-4 text-teal-100/80">
                A world where every breakthrough innovation—whether in climate
                action, technology, or social impact—has the platform,
                community, and resources to change the world.
              </p>
            </div>
          </div>
        </div>
        {/* Divider */}

        <div className="mt-20 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40" />
      </section>
      <section className="py-20 bg-gradient-to-br from-[#0b1619] via-[#141f23] to-[#151e21] text-white relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/3 top-1/2 w-[600px] h-[200px] bg-gradient-radial from-emerald-400/20 to-transparent blur-2xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-14">
            <h2 className="text-base text-cyan-300 font-semibold tracking-widest uppercase">
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-transparent bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text animate-glow">
              What Makes This Unique?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center bg-[#162322] border border-emerald-400/30 rounded-xl p-6 shadow-md">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-700/40 text-cyan-200">
                <i className="fas fa-globe text-xl"></i>
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                One place for everything open
              </h3>
              <p className="mt-2 text-base text-teal-100/70">
                No more bouncing between 10 websites and Slack groups
              </p>
            </div>
            <div className="text-center bg-[#162322] border border-emerald-400/30 rounded-xl p-6 shadow-md">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-400/20 text-emerald-300">
                <i className="fas fa-bolt text-xl"></i>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Discovery → Action</h3>
              <p className="mt-2 text-base text-teal-100/70">
                Don't just read—build, remix, and do something immediately
              </p>
            </div>
            <div className="text-center bg-[#162322] border border-emerald-400/30 rounded-xl p-6 shadow-md">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-700/30 text-purple-200">
                <i className="fas fa-users text-xl"></i>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Community-first</h3>
              <p className="mt-2 text-base text-teal-100/70">
                Connect with people, not just code/resources. Feedback, help,
                mentorship, real team formation
              </p>
            </div>
            <div className="text-center bg-[#162322] border border-emerald-400/30 rounded-xl p-6 shadow-md">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-cyan-600/30 text-cyan-200">
                <i className="fas fa-lock-open text-xl"></i>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Open-by-default</h3>
              <p className="mt-2 text-base text-teal-100/70">
                Everything you build, unless private, is instantly reusable by
                others
              </p>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="mt-20 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-40" />
      </section>
      <section className="py-20 bg-gradient-to-br from-[#161e21] via-[#10171a] to-[#1a2926] text-white relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-1/4 w-[500px] h-[200px] bg-gradient-radial from-cyan-400/20 to-transparent blur-2xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-14">
            <h2 className="text-base text-cyan-300 font-semibold tracking-widest uppercase">
              Resources
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-transparent bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text animate-glow">
              What are "Open Resources"?
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-teal-100/70 font-medium">
              These are freely accessible, reusable, and modifiable assets
              created by individuals, communities, or institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-[#192527] p-6 rounded-xl border border-emerald-400/30 shadow-md">
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0 bg-cyan-400/15 p-2 rounded-md">
                  <i className="fas fa-code text-cyan-300"></i>
                </span>
                <h3 className="text-lg font-medium">Open Source Software</h3>
              </div>
              <p className="mt-4 text-teal-100/80">
                Repositories: GitHub, GitLab, SourceForge
                <br />
                Package Indexes: PyPI, npm, Maven, CRAN
              </p>
            </div>
            <div className="bg-[#192527] p-6 rounded-xl border border-emerald-400/30 shadow-md">
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0 bg-emerald-400/15 p-2 rounded-md">
                  <i className="fas fa-database text-emerald-300"></i>
                </span>
                <h3 className="text-lg font-medium">Open Data</h3>
              </div>
              <p className="mt-4 text-teal-100/80">
                Portals: data.gov, EU Open Data Portal, Kaggle Datasets
                <br />
                Domains: government, climate, health, demographics
              </p>
            </div>
            <div className="bg-[#192527] p-6 rounded-xl border border-emerald-400/30 shadow-md">
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0 bg-purple-700/15 p-2 rounded-md">
                  <i className="fas fa-book text-purple-200"></i>
                </span>
                <h3 className="text-lg font-medium">Open Access Research</h3>
              </div>
              <p className="mt-4 text-teal-100/80">
                Papers: arXiv, PubMed Central, DOAJ
                <br />
                Preprints: bioRxiv, SSRN
              </p>
            </div>
            {/* Add other cards as you wish */}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#14221b] via-[#10201d] to-[#102a20] text-white relative overflow-hidden">
        {/* Soft spotlight effect */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-emerald-500/15 to-transparent blur-3xl opacity-60 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-400 bg-clip-text animate-glow mb-4">
              Platform Impact
            </h2>
            <p className="text-lg sm:text-xl text-teal-100/90 font-medium">
              Real numbers from our growing ecosystem
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-[#1c2623] border border-emerald-400/30 rounded-xl p-8 text-center shadow-lg hover:shadow-[0_0_28px_#10b98130] transition">
              <div className="text-5xl font-extrabold text-emerald-300 drop-shadow-neon">
                10M+
              </div>
              <div className="mt-2 text-lg font-medium text-teal-100/80">
                Open Resources Indexed
              </div>
            </div>
            <div className="bg-[#1c2623] border border-emerald-400/30 rounded-xl p-8 text-center shadow-lg hover:shadow-[0_0_28px_#10b98130] transition">
              <div className="text-5xl font-extrabold text-emerald-300 drop-shadow-neon">
                50K+
              </div>
              <div className="mt-2 text-lg font-medium text-teal-100/80">
                Active Builders
              </div>
            </div>
            <div className="bg-[#1c2623] border border-emerald-400/30 rounded-xl p-8 text-center shadow-lg hover:shadow-[0_0_28px_#10b98130] transition">
              <div className="text-5xl font-extrabold text-emerald-300 drop-shadow-neon">
                1,000+
              </div>
              <div className="mt-2 text-lg font-medium text-teal-100/80">
                Projects Launched
              </div>
            </div>
            <div className="bg-[#1c2623] border border-emerald-400/30 rounded-xl p-8 text-center shadow-lg hover:shadow-[0_0_28px_#10b98130] transition">
              <div className="text-5xl font-extrabold text-emerald-300 drop-shadow-neon">
                100+
              </div>
              <div className="mt-2 text-lg font-medium text-teal-100/80">
                Countries Represented
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-40" />
      </section>

      <section className="py-20 bg-gradient-to-br from-[#131d18] via-[#10211b] to-[#11271b] text-white relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-2/3 top-0 w-[500px] h-[200px] bg-gradient-radial from-red-400/20 to-transparent blur-2xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-14">
            <h2 className="text-base text-cyan-300 font-semibold tracking-widest uppercase">
              Challenges
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-transparent bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text animate-glow">
              What we are solving
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Problems */}
            <div className="bg-[#192527] p-8 rounded-xl border border-red-400/30 shadow-lg">
              <h3 className="text-2xl font-bold text-red-400 flex items-center mb-4">
                <i className="fas fa-times-circle mr-2"></i> The Problems
              </h3>
              <ul className="space-y-4 text-left text-teal-100/80">
                <li className="flex items-start">
                  <i className="fas fa-dot-circle text-red-400 mt-1 mr-3"></i>
                  <span>
                    <span className="font-medium text-white">
                      Fragmentation and Scope:
                    </span>{' '}
                    Open resources are scattered across domains (software, data,
                    hardware, research, designs, media, etc.)
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-dot-circle text-red-400 mt-1 mr-3"></i>
                  <span>
                    <span className="font-medium text-white">
                      Technical Complexity:
                    </span>{' '}
                    Heterogeneous data: Unifying metadata for code, papers,
                    datasets, designs is hard—there's no single schema
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-dot-circle text-red-400 mt-1 mr-3"></i>
                  <span>
                    <span className="font-medium text-white">
                      Data Licensing & Legal Issues:
                    </span>{' '}
                    Licensing and copyright: Even open data and research have
                    varied licenses; combining or redistributing can be legally
                    tricky
                  </span>
                </li>
              </ul>
            </div>
            {/* Solutions */}
            <div className="bg-[#192527] p-8 rounded-xl border border-emerald-400/40 shadow-lg">
              <h3 className="text-2xl font-bold text-neon-green flex items-center mb-4">
                <i className="fas fa-check-circle mr-2"></i> Our Solutions
              </h3>
              <ul className="space-y-4 text-left text-teal-100/80">
                <li className="flex items-start">
                  <i className="fas fa-dot-circle text-neon-green mt-1 mr-3"></i>
                  <span>
                    <span className="font-medium text-white">
                      Unified Platform:
                    </span>{' '}
                    AI-powered aggregation across all domains with intelligent
                    semantic linking
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-dot-circle text-neon-green mt-1 mr-3"></i>
                  <span>
                    <span className="font-medium text-white">
                      Smart Architecture:
                    </span>{' '}
                    Modular, open-source infrastructure that adapts to any
                    innovation type
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-dot-circle text-neon-green mt-1 mr-3"></i>
                  <span>
                    <span className="font-medium text-white">
                      Legal Clarity:
                    </span>{' '}
                    Clear licensing frameworks and automated compliance checking
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-20 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40" />
        </div>
      </section>
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-40 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>

      <section className="py-20 bg-gradient-to-br from-[#131f21] via-[#11271b] to-[#1a2926] text-white relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-1/3 w-[500px] h-[200px] bg-gradient-radial from-cyan-400/20 to-transparent blur-2xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-14">
            <h2 className="text-base text-cyan-300 font-semibold tracking-widest uppercase">
              Technology
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-transparent bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text animate-glow">
              AI Built Over Aggregated Open Resources
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-teal-100/80 font-medium">
              What Innovation Does This Unlock?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-[#192527] p-6 rounded-xl border border-cyan-400/30 shadow-md">
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0 bg-cyan-400/20 p-3 rounded-md">
                  <i className="fas fa-brain text-cyan-300 text-xl"></i>
                </span>
                <h3 className="text-lg font-medium">
                  Semantic Search and Recommendation
                </h3>
              </div>
              <p className="mt-4 text-teal-100/80">
                AI understands meaning, not just keywords. Users can search
                "reverse aging gene therapies with open datasets" and get exact
                matches, even if sources use different language.
              </p>
            </div>
            <div className="bg-[#192527] p-6 rounded-xl border border-emerald-400/30 shadow-md">
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0 bg-emerald-400/20 p-3 rounded-md">
                  <i className="fas fa-tags text-emerald-300 text-xl"></i>
                </span>
                <h3 className="text-lg font-medium">
                  Auto-tagging & Smart Categorization
                </h3>
              </div>
              <p className="mt-4 text-teal-100/80">
                NLP models tag new resources with domains, technologies,
                methods, outcomes, licenses—without manual effort. Detects
                "hidden" connections.
              </p>
            </div>
            <div className="bg-[#192527] p-6 rounded-xl border border-purple-400/30 shadow-md">
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0 bg-purple-700/20 p-3 rounded-md">
                  <i className="fas fa-file-alt text-purple-200 text-xl"></i>
                </span>
                <h3 className="text-lg font-medium">Resource Summarization</h3>
              </div>
              <p className="mt-4 text-teal-100/80">
                LLMs auto-summarize research papers, datasets, or code repos
                into 1-minute reads or bullet points. Generate customized weekly
                digests.
              </p>
            </div>
            <div className="bg-[#192527] p-6 rounded-xl border border-cyan-400/30 shadow-md">
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0 bg-cyan-400/20 p-3 rounded-md">
                  <i className="fas fa-link text-cyan-300 text-xl"></i>
                </span>
                <h3 className="text-lg font-medium">
                  Automatic Linking & Knowledge Graph
                </h3>
              </div>
              <p className="mt-4 text-teal-100/80">
                AI detects and links related resources across silos. Surfaces
                non-obvious combinations for innovation.
              </p>
            </div>
            <div className="bg-[#192527] p-6 rounded-xl border border-red-400/30 shadow-md">
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0 bg-red-400/20 p-3 rounded-md">
                  <i className="fas fa-random text-red-300 text-xl"></i>
                </span>
                <h3 className="text-lg font-medium">
                  "Remix" or "Build with AI"
                </h3>
              </div>
              <p className="mt-4 text-teal-100/80">
                AI suggests possible project ideas: "You could combine these
                datasets and this code to create a new anti-aging predictor."
                Auto-generate starter project templates.
              </p>
            </div>
            <div className="bg-[#192527] p-6 rounded-xl border border-cyan-400/30 shadow-md">
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0 bg-indigo-400/20 p-3 rounded-md">
                  <i className="fas fa-comments text-indigo-200 text-xl"></i>
                </span>
                <h3 className="text-lg font-medium">Expert Q&A/Assistant</h3>
              </div>
              <p className="mt-4 text-teal-100/80">
                An LLM trained on your platform acts as a "community
                brain"—answering questions, suggesting resources, providing
                mentorship.
              </p>
            </div>
          </div>
          <div className="mt-20 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40" />
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-[#131d18] via-[#16231a] to-[#11271b] text-white relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-2/4 top-1/3 w-[400px] h-[150px] bg-gradient-radial from-emerald-400/15 to-transparent blur-2xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-14">
            <h2 className="text-base text-cyan-300 font-semibold tracking-widest uppercase">
              Community
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-transparent bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text animate-glow">
              Who It's For
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-teal-100/80 font-medium">
              Builders, developers, researchers, students, educators,
              entrepreneurs, creators.
            </p>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-neon-green mb-8">
              Our Values:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-[#192527] p-6 rounded-xl border border-cyan-400/30 shadow-md">
                <h4 className="text-lg font-medium text-cyan-300">
                  Open by Default
                </h4>
                <p className="mt-2 text-teal-100/80">
                  Transparency and collaboration drive breakthrough innovation
                </p>
              </div>
              <div className="bg-[#192527] p-6 rounded-xl border border-emerald-400/30 shadow-md">
                <h4 className="text-lg font-medium text-neon-green">
                  Impact First
                </h4>
                <p className="mt-2 text-teal-100/80">
                  Every project should contribute to positive global change
                </p>
              </div>
              <div className="bg-[#192527] p-6 rounded-xl border border-purple-400/30 shadow-md">
                <h4 className="text-lg font-medium text-purple-300">
                  Community Powered
                </h4>
                <p className="mt-2 text-teal-100/80">
                  Collective intelligence amplifies individual brilliance
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-40" />
        </div>
      </section>
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-40 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>

      {/* Join the Innovation Revolution */}
      <section className="py-20 bg-gradient-to-br from-[#152624] via-[#12362f] to-[#1b2a26] text-white relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-radial from-emerald-500/10 to-transparent blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-300 bg-clip-text mb-4 animate-glow">
              Join the Innovation Revolution
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center bg-[#172421]/70 rounded-xl shadow-lg p-8 border border-teal-400/20">
              <div className="mx-auto mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400/80 to-cyan-400/70 text-white shadow">
                <i className="fas fa-flask text-2xl"></i>
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                For Innovators & Makers
              </h3>
              <p className="mt-2 text-base text-teal-100/80">
                Transform your ideas into global impact. Access tools, find
                collaborators, and scale your projects with community support.
              </p>
              <div className="mt-6">
                <a
                  href="#launch"
                  className="inline-block px-6 py-2 rounded-md bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 font-medium shadow transition hover:scale-105"
                >
                  Launch Your Project
                </a>
              </div>
            </div>
            <div className="text-center bg-[#172421]/70 rounded-xl shadow-lg p-8 border border-teal-400/20">
              <div className="mx-auto mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-teal-500/80 to-emerald-400/70 text-white shadow">
                <i className="fas fa-briefcase text-2xl"></i>
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                For Investors & Partners
              </h3>
              <p className="mt-2 text-base text-teal-100/80">
                Back the entire ecosystem of innovation. Support multiple
                breakthrough technologies through a single platform investment.
              </p>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-block px-6 py-2 rounded-md border border-cyan-400 text-cyan-200 font-medium shadow transition hover:bg-cyan-400 hover:text-gray-900"
                >
                  Partner With Us
                </a>
              </div>
            </div>
            <div className="text-center bg-[#172421]/70 rounded-xl shadow-lg p-8 border border-teal-400/20">
              <div className="mx-auto mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400/80 to-emerald-400/70 text-white shadow">
                <i className="fas fa-globe-americas text-2xl"></i>
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                For Organizations & NGOs
              </h3>
              <p className="mt-2 text-base text-teal-100/80">
                Amplify your mission through open innovation. Connect your
                challenges with global problem-solvers.
              </p>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-block px-6 py-2 rounded-md border border-emerald-400 text-emerald-200 font-medium shadow transition hover:bg-emerald-400 hover:text-gray-900"
                >
                  Join the Movement
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-lg font-medium mb-6">Join our community:</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://discord.gg/ecosyz"
                className="text-cyan-300 hover:text-white"
              >
                <i className="fab fa-discord text-2xl"></i>
              </a>
              <a href="#newsletter" className="text-cyan-300 hover:text-white">
                <i className="fas fa-envelope text-2xl"></i>
              </a>
              <a href="#social" className="text-cyan-300 hover:text-white">
                <i className="fas fa-share-alt text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-40 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>

      {/* <!-- FAQ --> */}
      <section className="py-20 bg-gradient-to-br from-[#142622] via-[#152624] to-[#1b2a26] text-white relative">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base font-semibold tracking-wide uppercase text-cyan-300">
              Questions
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-300 bg-clip-text animate-glow">
              Frequently Asked Questions
            </p>
          </div>
          <div className="space-y-6">
            {/* FAQ Item */}
            <div className="rounded-lg border border-teal-400/30 bg-[#182925]/80 shadow hover:shadow-[0_0_14px_#30ffb08f] transition">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none">
                <span className="text-lg font-medium text-white">
                  What types of projects can launch on ECOSYZ?
                </span>
                <i className="fas fa-plus text-cyan-400"></i>
              </button>
              {/* Add a collapse/expand logic if needed */}
              {/* <div className="px-6 py-4"> ... </div> */}
            </div>
            <div className="rounded-lg border border-teal-400/30 bg-[#182925]/80 shadow hover:shadow-[0_0_14px_#30ffb08f] transition">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none">
                <span className="text-lg font-medium text-white">
                  Why is everything open source?
                </span>
                <i className="fas fa-plus text-cyan-400"></i>
              </button>
            </div>
            <div className="rounded-lg border border-teal-400/30 bg-[#182925]/80 shadow hover:shadow-[0_0_14px_#30ffb08f] transition">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none">
                <span className="text-lg font-medium text-white">
                  How does the AI matching work?
                </span>
                <i className="fas fa-plus text-cyan-400"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-40 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>

      {/* <!-- Final CTA --> */}
      <section className="py-20 bg-gradient-to-br from-[#162624] via-[#12362f] to-[#122324] text-white relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[220px] bg-gradient-radial from-emerald-400/15 to-transparent blur-2xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-300 bg-clip-text animate-glow">
              Be First to Join
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-teal-100/90 font-medium">
              Sign up now for early access, exclusive features, and the chance
              to shape the future of open innovation.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="#waitlist"
                className="px-6 py-3 rounded-md bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 font-semibold shadow hover:scale-105 transition"
              >
                Join the waitlist
              </a>
              <a
                href="#newsletter"
                className="px-6 py-3 rounded-md border border-cyan-400 text-cyan-200 font-semibold shadow hover:bg-cyan-400 hover:text-gray-900 transition"
              >
                Subscribe to our newsletter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
