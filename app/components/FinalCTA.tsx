'use client';

export default function FinalCTA() {
  return (
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
            Sign up now for early access, exclusive features, and the chance to
            shape the future of open innovation.
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
  );
}
