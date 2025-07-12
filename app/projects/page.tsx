'use client';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Projects() {
  return (
     <div className="min-h-screen flex flex-col">
          <Header />
    <div className="min-h-screen bg-gradient-to-br from-[#0c2321] via-[#111c1c] to-[#182931] text-white">
      <Head>
        <title>Projects | Open Idea</title>
      </Head>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-glow mb-4">
            Explore Open Projects
          </h1>
          <p className="text-lg text-teal-100/80 font-medium max-w-2xl mx-auto">
            Discover, remix, and contribute to breakthrough innovations. All projects here are community-powered and open by default.
          </p>
        </div>

        {/* Example project cards (replace with dynamic mapping) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Project Card */}
          <div className="bg-[#172824]/90 p-6 rounded-xl border border-emerald-400/20 shadow-lg hover:shadow-[0_0_32px_#10b98145] transition">
            <h2 className="text-xl font-bold text-emerald-200 mb-2">Open Climate Model</h2>
            <p className="text-teal-100/80 mb-4">Collaborative, open-source AI for predicting climate impacts. Integrates public data and global code contributions.</p>
            <a href="#" className="text-cyan-300 hover:text-white underline text-sm">View Project</a>
          </div>
          {/* More cards... */}
          <div className="bg-[#162332]/80 p-6 rounded-xl border border-cyan-400/20 shadow-lg hover:shadow-[0_0_32px_#00d9ff45] transition">
            <h2 className="text-xl font-bold text-cyan-200 mb-2">Healthcare AI Toolkit</h2>
            <p className="text-teal-100/80 mb-4">Open health datasets and code for diagnosis, available for doctors and researchers worldwide.</p>
            <a href="#" className="text-cyan-300 hover:text-white underline text-sm">View Project</a>
          </div>
          <div className="bg-[#1a2531]/80 p-6 rounded-xl border border-purple-400/20 shadow-lg hover:shadow-[0_0_32px_#c084fc45] transition">
            <h2 className="text-xl font-bold text-purple-200 mb-2">Open Hardware Lab</h2>
            <p className="text-teal-100/80 mb-4">Build and share 3D printable hardware, circuits, and robotics—all designs open for remix.</p>
            <a href="#" className="text-cyan-300 hover:text-white underline text-sm">View Project</a>
          </div>
        </div>

        <div className="mt-20 text-center">
          <a href="#create" className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 font-semibold rounded-lg shadow-lg transition hover:scale-105">
            Start a New Project
          </a>
        </div>
      </div>
    </div>
     <Footer />
        </div>
  );
}
