import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <div className="min-h-screen bg-gradient-to-br from-[#11271b] via-[#101c1c] to-[#163131] text-white">
     
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent animate-glow mb-4">
            Join Our Community
          </h1>
          <p className="text-lg text-teal-100/80 font-medium max-w-2xl mx-auto">
            Connect with open-source builders, researchers, and innovators from 100+ countries. Share ideas, get help, and grow together!
          </p>
        </div>

        {/* Example Community features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div className="bg-[#172421]/90 p-8 rounded-xl border border-teal-400/20 shadow-lg flex flex-col items-center">
            <i className="fas fa-users text-3xl text-cyan-300 mb-4"></i>
            <h2 className="text-lg font-semibold text-cyan-200 mb-2">Discussion Groups</h2>
            <p className="text-teal-100/80 text-center">Exchange ideas, feedback, and opportunities with other community members.</p>
          </div>
          <div className="bg-[#15282d]/80 p-8 rounded-xl border border-emerald-400/20 shadow-lg flex flex-col items-center">
            <i className="fas fa-chalkboard-teacher text-3xl text-emerald-300 mb-4"></i>
            <h2 className="text-lg font-semibold text-emerald-200 mb-2">Events & Workshops</h2>
            <p className="text-teal-100/80 text-center">Join live workshops, webinars, hackathons, and more to level up and network.</p>
          </div>
          <div className="bg-[#1b2234]/80 p-8 rounded-xl border border-purple-400/20 shadow-lg flex flex-col items-center">
            <i className="fas fa-trophy text-3xl text-purple-200 mb-4"></i>
            <h2 className="text-lg font-semibold text-purple-200 mb-2">Community Challenges</h2>
            <p className="text-teal-100/80 text-center">Participate in innovation challenges and win prizes or recognition for your work.</p>
          </div>
        </div>

        <div className="text-center">
          <a href="https://discord.gg/ecosyz" target="_blank" rel="noopener" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-emerald-400 text-gray-900 font-semibold rounded-lg shadow-lg transition hover:scale-105">
            <i className="fab fa-discord text-2xl mr-3"></i>
            Join Discord
          </a>
        </div>
      </div>
    </div>
      </main>
      <Footer />
    </div>
  );
}
