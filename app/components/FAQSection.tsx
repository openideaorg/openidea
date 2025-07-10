'use client';

export default function FAQSection() {
  return (
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
          <div className="rounded-lg border border-teal-400/30 bg-[#182925]/80 shadow hover:shadow-[0_0_14px_#30ffb08f] transition">
            <button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none">
              <span className="text-lg font-medium text-white">
                What types of projects can launch on ECOSYZ?
              </span>
              <i className="fas fa-plus text-cyan-400"></i>
            </button>
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
  );
}
