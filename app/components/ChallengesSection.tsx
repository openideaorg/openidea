'use client';

export default function ChallengesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#131d18] via-[#10211b] to-[#11271b] text-white relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-2/3 top-0 w-[500px] h-[200px] bg-gradient-radial from-red-400/20 to-transparent blur-2xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-14">
          <h2 className="text-base text-cyan-300 font-semibold tracking-widest uppercase">Challenges</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-transparent bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text animate-glow">
            What we are solving
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-[#192527] p-8 rounded-xl border border-red-400/30 shadow-lg">
            <h3 className="text-2xl font-bold text-red-400 flex items-center mb-4">
              <i className="fas fa-times-circle mr-2"></i> The Problems
            </h3>
            <ul className="space-y-4 text-left text-teal-100/80">
              <li className="flex items-start"><i className="fas fa-dot-circle text-red-400 mt-1 mr-3"></i>
                <span><span className="font-medium text-white">Fragmentation and Scope:</span> Open resources are scattered across domains (software, data, hardware, research, designs, media, etc.)</span>
              </li>
              <li className="flex items-start"><i className="fas fa-dot-circle text-red-400 mt-1 mr-3"></i>
                <span><span className="font-medium text-white">Technical Complexity:</span> Heterogeneous data: Unifying metadata for code, papers, datasets, designs is hard—there's no single schema</span>
              </li>
              <li className="flex items-start"><i className="fas fa-dot-circle text-red-400 mt-1 mr-3"></i>
                <span><span className="font-medium text-white">Data Licensing & Legal Issues:</span> Licensing and copyright: Even open data and research have varied licenses; combining or redistributing can be legally tricky</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#192527] p-8 rounded-xl border border-emerald-400/40 shadow-lg">
            <h3 className="text-2xl font-bold text-neon-green flex items-center mb-4">
              <i className="fas fa-check-circle mr-2"></i> Our Solutions
            </h3>
            <ul className="space-y-4 text-left text-teal-100/80">
              <li className="flex items-start"><i className="fas fa-dot-circle text-neon-green mt-1 mr-3"></i>
                <span><span className="font-medium text-white">Unified Platform:</span> AI-powered aggregation across all domains with intelligent semantic linking</span>
              </li>
              <li className="flex items-start"><i className="fas fa-dot-circle text-neon-green mt-1 mr-3"></i>
                <span><span className="font-medium text-white">Smart Architecture:</span> Modular, open-source infrastructure that adapts to any innovation type</span>
              </li>
              <li className="flex items-start"><i className="fas fa-dot-circle text-neon-green mt-1 mr-3"></i>
                <span><span className="font-medium text-white">Legal Clarity:</span> Clear licensing frameworks and automated compliance checking</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40" />
      </div>
    </section>
  );
}
