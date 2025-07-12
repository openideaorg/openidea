import Header from '../components/Header';
import Footer from '../components/Footer';

export default function OpenResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
    <section
  id="open-resources"
  className="py-20 bg-gradient-to-br from-[#10171a] via-[#132726] to-[#091312] text-white relative"
>
  {/* Soft spot background */}
  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-radial from-emerald-400/10 to-transparent blur-2xl pointer-events-none" />
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-base font-semibold tracking-wide uppercase text-cyan-300">RESOURCES</h2>
      <p className="mt-2 text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-glow drop-shadow-lg">
        Open Resources
      </p>
      <p className="mt-6 text-xl text-teal-100/90 max-w-2xl mx-auto font-medium">
        Freely accessible, reusable, and modifiable assets to power your next big idea.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-[#151c1a]/90 border border-emerald-400/20 rounded-2xl shadow-xl hover:shadow-[0_0_28px_#10b98136] transition-all p-7 flex gap-4 items-start">
        <i className="fas fa-code text-3xl text-cyan-400 mt-1"></i>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Open Source Software</h3>
          <p className="text-teal-100/90">GitHub, GitLab, SourceForge, PyPI, npm, Maven — reusable code for every stack.</p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-[#151c1a]/90 border border-emerald-400/20 rounded-2xl shadow-xl hover:shadow-[0_0_28px_#10b98136] transition-all p-7 flex gap-4 items-start">
        <i className="fas fa-database text-3xl text-emerald-400 mt-1"></i>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Open Data</h3>
          <p className="text-teal-100/90">Portals like data.gov, EU Open Data, Kaggle Datasets — structured data for insights and analysis.</p>
        </div>
      </div>
      {/* Card 3 */}
      <div className="bg-[#151c1a]/90 border border-emerald-400/20 rounded-2xl shadow-xl hover:shadow-[0_0_28px_#6e8fff36] transition-all p-7 flex gap-4 items-start">
        <i className="fas fa-book text-3xl text-purple-300 mt-1"></i>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Open Access Research</h3>
          <p className="text-teal-100/90">Access papers on arXiv, PubMed Central, DOAJ — cutting-edge science at your fingertips.</p>
        </div>
      </div>
      {/* Card 4 */}
      <div className="bg-[#151c1a]/90 border border-emerald-400/20 rounded-2xl shadow-xl hover:shadow-[0_0_28px_#fff36e36] transition-all p-7 flex gap-4 items-start">
        <i className="fas fa-graduation-cap text-3xl text-yellow-300 mt-1"></i>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Educational Resources</h3>
          <p className="text-teal-100/90">MIT OCW, OpenStax, Wikibooks — free courses and textbooks for lifelong learners.</p>
        </div>
      </div>
      {/* Card 5 */}
      <div className="bg-[#151c1a]/90 border border-emerald-400/20 rounded-2xl shadow-xl hover:shadow-[0_0_28px_#ff6e6e36] transition-all p-7 flex gap-4 items-start">
        <i className="fas fa-microchip text-3xl text-pink-300 mt-1"></i>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Open Hardware</h3>
          <p className="text-teal-100/90">Arduino, Hackaday, OpenCompute — open designs and 3D models for hardware projects.</p>
        </div>
      </div>
      {/* Card 6 */}
      <div className="bg-[#151c1a]/90 border border-emerald-400/20 rounded-2xl shadow-xl hover:shadow-[0_0_28px_#3fa6ff36] transition-all p-7 flex gap-4 items-start">
        <i className="fas fa-brain text-3xl text-indigo-300 mt-1"></i>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">AI Models & APIs</h3>
          <p className="text-teal-100/90">Hugging Face, TensorFlow Hub, OpenAI code samples — models and tools to build intelligent apps.</p>
        </div>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
}
