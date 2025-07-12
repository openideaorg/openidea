import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-8">
      <div className="bg-gradient-to-br from-[#10171a] via-[#132726] to-[#091312] text-white min-h-screen pb-16">
  {/* Hero Section */}
  <section className="hero-gradient py-20 relative">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[300px] bg-gradient-radial from-emerald-400/10 to-transparent blur-2xl pointer-events-none"/>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-2">
        <span className="block">Open Idea</span>
        <span className="block bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent animate-glow drop-shadow-lg">Whitepaper</span>
      </h1>
      <p className="mt-4 text-xl text-teal-100/90 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5">
        Democratizing Innovation Through Unified Open Knowledge
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <a
          href="https://github.com/Sony17/Ecosyz/blob/main/Open%20Idea.pdf?raw=true"
          download="Open_Idea_Whitepaper.pdf"
          className="px-6 py-3 rounded-md bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 font-semibold shadow hover:scale-105 transition"
        >
          Download PDF
        </a>
      </div>
    </div>
  </section>

  {/* Table of Contents */}
  <section className="py-12 bg-gradient-to-br from-[#121b1a] via-[#172524] to-[#121819]">
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <div className="bg-[#162322]/80 p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-cyan-200 mb-4">Table of Contents</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          {[
            { href: "#mission", label: "Mission and Vision" },
            { href: "#problem", label: "The Fragmentation Problem in Open Knowledge" },
            { href: "#solution", label: "Open Idea: A Unified Solution" },
            { href: "#system", label: "How the System Works" },
            { href: "#users", label: "User Types and Use Cases" },
            { href: "#technology", label: "Technology Stack and Architecture" },
            { href: "#monetization", label: "Monetization Strategy" },
            { href: "#roadmap", label: "Roadmap and Milestones" },
            { href: "#action", label: "Call to Action" },
          ].map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-cyan-300 hover:text-emerald-300 transition">{item.label}</a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>

  {/* --- Sample Content Structure for Each Section --- */}
  {/* 1. Mission and Vision */}
  <section id="mission" className="py-16">
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent animate-glow mb-8">1. Mission and Vision</h2>
      <div className="bg-[#182925]/80 p-6 rounded-xl mb-6 shadow-lg border border-emerald-400/20">
        <p className="text-lg font-medium text-teal-100/90">Open Idea's mission is to democratize innovation by providing an open, AI-powered platform where impactful projects across all domains can launch, connect, and thrive together.</p>
      </div>
      <p className="mb-4 text-teal-100/80">Our vision is a world where every breakthrough – in science, technology, or social impact – has the open platform, community, and resources to change the world. In essence, Open Idea aspires to be "the world's open innovation infrastructure", unifying knowledge and people to accelerate positive change.</p>
      <p className="mb-4 text-teal-100/80">By bringing every open resource under one roof and empowering anyone to build on them, Open Idea aims to multiply the impact of individual ideas through global collaboration.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-gradient-to-br from-emerald-900/50 to-emerald-800/10 border border-emerald-400/30 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-emerald-300 mb-3">Core Mission</h3>
          <ul className="space-y-3">
            <li className="flex items-start"><i className="fas fa-check-circle text-emerald-300 mt-1 mr-2"></i> <span>Democratize access to innovation resources</span></li>
            <li className="flex items-start"><i className="fas fa-check-circle text-emerald-300 mt-1 mr-2"></i> <span>Connect disparate open knowledge silos</span></li>
            <li className="flex items-start"><i className="fas fa-check-circle text-emerald-300 mt-1 mr-2"></i> <span>Empower collaborative problem-solving</span></li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/10 border border-cyan-400/30 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-cyan-300 mb-3">Strategic Vision</h3>
          <ul className="space-y-3">
            <li className="flex items-start"><i className="fas fa-bullseye text-cyan-300 mt-1 mr-2"></i> <span>Become the default infrastructure for open innovation</span></li>
            <li className="flex items-start"><i className="fas fa-bullseye text-cyan-300 mt-1 mr-2"></i> <span>10x the velocity of impactful innovation</span></li>
            <li className="flex items-start"><i className="fas fa-bullseye text-cyan-300 mt-1 mr-2"></i> <span>Create a virtuous cycle of open contribution</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
{/* Solution Section */}
<section id="solution" className="py-20 bg-gradient-to-br from-[#101b1d] via-[#112124] to-[#11181c] text-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6">
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent animate-glow">
      3. Open Idea: A Unified Solution
    </h2>
    <p className="mb-6 text-teal-100/90">
      Open Idea addresses the fragmentation head-on by serving as a unified, AI-powered platform for all open resources. It acts as a one-stop hub where users can seamlessly discover and utilize open knowledge across domains, transforming isolated information into integrated action.
    </p>
    <h3 className="text-2xl font-semibold text-cyan-200 mb-6">Key Aspects of Our Solution:</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Card 1 */}
      <div className="p-6 rounded-xl border border-emerald-400/20 bg-[#152521]/80 shadow hover:shadow-[0_0_16px_#30ffe07c] transition">
        <div className="flex items-start">
          <span className="bg-emerald-600/30 p-3 rounded-lg mr-4"><i className="fas fa-search text-emerald-300 text-xl"></i></span>
          <div>
            <h4 className="text-xl font-bold text-emerald-200">Unified Open Knowledge Platform</h4>
            <p className="mt-2 text-teal-100/80">Aggregates research, code, data, designs, and more—into one searchable, AI-boosted space. Intelligent crawlers index resources from all major open hubs.</p>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="p-6 rounded-xl border border-cyan-400/20 bg-[#162729]/80 shadow hover:shadow-[0_0_16px_#38bdf87c] transition">
        <div className="flex items-start">
          <span className="bg-cyan-600/30 p-3 rounded-lg mr-4"><i className="fas fa-link text-cyan-300 text-xl"></i></span>
          <div>
            <h4 className="text-xl font-bold text-cyan-200">Intelligent Semantic Linking</h4>
            <p className="mt-2 text-teal-100/80">Uses AI to connect related content across silos—linking papers to datasets, code to publications, projects to people, and more via knowledge graphs.</p>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="p-6 rounded-xl border border-purple-400/20 bg-[#18192b]/80 shadow hover:shadow-[0_0_16px_#a48cff7c] transition">
        <div className="flex items-start">
          <span className="bg-purple-700/30 p-3 rounded-lg mr-4"><i className="fas fa-project-diagram text-purple-300 text-xl"></i></span>
          <div>
            <h4 className="text-xl font-bold text-purple-200">Modular, Scalable Architecture</h4>
            <p className="mt-2 text-teal-100/80">Built as a smart, modular infrastructure—adapts to any resource type. Microservices power search, data handling, AI, and more.</p>
          </div>
        </div>
      </div>
      {/* Card 4 */}
      <div className="p-6 rounded-xl border border-yellow-400/20 bg-[#28291a]/80 shadow hover:shadow-[0_0_16px_#ffe27c7c] transition">
        <div className="flex items-start">
          <span className="bg-yellow-700/20 p-3 rounded-lg mr-4"><i className="fas fa-gavel text-yellow-300 text-xl"></i></span>
          <div>
            <h4 className="text-xl font-bold text-yellow-200">Built-in Legal & License Compliance</h4>
            <p className="mt-2 text-teal-100/80">Automatically tracks licenses, highlights rights, and prevents invalid content combinations—keeping your projects safe and open.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-10 bg-[#162322]/90 p-6 rounded-lg border border-emerald-400/10 shadow text-teal-100/90 text-lg italic">
      In summary, Open Idea is the bridge across the open knowledge silos—an AI-enhanced platform that unifies everything open in one place, making it dramatically easier to go from discovery to action.
    </div>
  </div>
</section>
{/* How the System Works */}
<section id="system" className="py-20 bg-gradient-to-br from-[#10241d] via-[#16252a] to-[#182025] text-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6">
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent animate-glow">
      4. How the System Works
    </h2>
    <p className="mb-6 text-teal-100/90">
      Open Idea's platform workflow combines powerful search technology, AI-driven enrichment, and collaborative project workspaces. From a user's perspective, the journey on Open Idea might look like this:
    </p>
    <div className="space-y-8">
      {/* Step 1 */}
      <div className="bg-[#172921]/80 border-l-4 border-emerald-400 pl-6 py-4 rounded-xl shadow">
        <h3 className="text-xl font-bold text-emerald-200">1. Comprehensive Search Engine</h3>
        <p className="mt-2 text-teal-100/80">Unified search across all resources—enter a natural-language query, retrieve research, code, datasets, hardware, and more ranked by semantic relevance.</p>
      </div>
      {/* Step 2 */}
      <div className="bg-[#172429]/80 border-l-4 border-cyan-400 pl-6 py-4 rounded-xl shadow">
        <h3 className="text-xl font-bold text-cyan-200">2. Semantic Enrichment & Auto-Tagging</h3>
        <p className="mt-2 text-teal-100/80">AI tags and categorizes each resource with rich metadata (like field, type, keywords, license, etc.), making everything more discoverable and remixable.</p>
      </div>
      {/* Step 3 */}
      <div className="bg-[#18192b]/80 border-l-4 border-purple-400 pl-6 py-4 rounded-xl shadow">
        <h3 className="text-xl font-bold text-purple-200">3. AI-Powered Discovery Tools</h3>
        <p className="mt-2 text-teal-100/80">Advanced AI assistants help digest, summarize, and connect content. Example: auto-summary of long papers or technical docs, concept-mapping, recommendations.</p>
      </div>
      {/* Step 4 */}
      <div className="bg-[#192818]/80 border-l-4 border-yellow-400 pl-6 py-4 rounded-xl shadow">
        <h3 className="text-xl font-bold text-yellow-200">4. Project Workspaces & Remixing</h3>
        <p className="mt-2 text-teal-100/80">Create live projects, pull in any open resource, remix and collaborate—all in-browser. Every user gets an innovation studio for building together.</p>
      </div>
      {/* Step 5 */}
      <div className="bg-[#1a2129]/80 border-l-4 border-emerald-300 pl-6 py-4 rounded-xl shadow">
        <h3 className="text-xl font-bold text-emerald-200">5. Community Collaboration</h3>
        <p className="mt-2 text-teal-100/80">Invite, open-source, and co-create—extend the open-source workflow to every format and domain.</p>
      </div>
    </div>
    <div className="mt-10 bg-[#162322]/90 p-6 rounded-lg border border-emerald-400/10 shadow text-teal-100/90 text-lg italic">
      “This seamless workflow from search to creation is what makes Open Idea a game-changer in harnessing the world's open resources.”
    </div>
  </div>
</section>
{/* User Types & Use Cases */}
<section id="users" className="py-20 bg-gradient-to-br from-[#11212a] via-[#132921] to-[#181822] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent animate-glow">
      5. User Types and Use Cases
    </h2>
    <p className="mb-8 text-teal-100/90">
      Open Idea is designed to serve a broad spectrum of users—essentially anyone driven to create or learn using open resources.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Researchers */}
      <div className="rounded-xl border border-emerald-400/20 bg-[#172921]/80 shadow overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-400 to-teal-400 px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">Researchers & Scientists</h3>
        </div>
        <div className="p-6">
          <p className="text-teal-100/90 mb-4">Unified research hub. Quickly survey literature across fields (e.g. climate science preprints + code implementations).</p>
          <div className="bg-emerald-900/30 p-4 rounded-lg">
            <h4 className="font-medium text-emerald-200 mb-2">Use Case:</h4>
            <p className="text-sm text-teal-100/80">A biomedical researcher finds a new imaging paper, its open dataset, and a GitHub repo of analysis code—all in one search, then invites a statistician to collaborate on her project.</p>
          </div>
        </div>
      </div>
      {/* Engineers */}
      <div className="rounded-xl border border-cyan-400/20 bg-[#172429]/80 shadow overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-400 to-blue-400 px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">Engineers & Developers</h3>
        </div>
        <div className="p-6">
          <p className="text-teal-100/90 mb-4">Accelerate product dev or hobby projects—find open-source components and insights, remix and ship faster.</p>
          <div className="bg-cyan-900/30 p-4 rounded-lg">
            <h4 className="font-medium text-cyan-200 mb-2">Use Case:</h4>
            <p className="text-sm text-teal-100/80">An AI engineer finds a public satellite dataset and open-source crop health model. Remixes them, tweaks model with platform AI.</p>
          </div>
        </div>
      </div>
      {/* Students */}
      <div className="rounded-xl border border-purple-400/20 bg-[#18192b]/80 shadow overflow-hidden">
        <div className="bg-gradient-to-r from-purple-400 to-cyan-400 px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">Students & Educators</h3>
        </div>
        <div className="p-6">
          <p className="text-teal-100/90 mb-4">Rich educational resource. Students find free courseware, example projects; educators get open textbooks, datasets, etc.</p>
          <div className="bg-purple-900/30 p-4 rounded-lg">
            <h4 className="font-medium text-purple-200 mb-2">Use Case:</h4>
            <p className="text-sm text-teal-100/80">A CS student learning blockchain finds MIT OCW lectures, an open-source project, and a security article, all linked.</p>
          </div>
        </div>
      </div>
      {/* Entrepreneurs */}
      <div className="rounded-xl border border-yellow-400/20 bg-[#29291a]/80 shadow overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-400 to-emerald-400 px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">Entrepreneurs & Innovators</h3>
        </div>
        <div className="p-6">
          <p className="text-teal-100/90 mb-4">Validate and prototype ideas fast using existing open tech and global knowledge.</p>
          <div className="bg-yellow-900/30 p-4 rounded-lg">
            <h4 className="font-medium text-yellow-200 mb-2">Use Case:</h4>
            <p className="text-sm text-teal-100/80">A social entrepreneur finds rural health datasets, diagnostic AI models, and telemedicine case studies for a new project.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Technology Stack */}
<section id="technology" className="py-20 bg-gradient-to-br from-[#132926] via-[#192129] to-[#181e24] text-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6">
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent animate-glow">
      6. Technology Stack and Architecture
    </h2>
    <p className="mb-8 text-teal-100/90">
      Open Idea’s tech stack is open, modular, and scalable—reflecting our mission to embrace open-source and adapt to diverse content.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Aggregation */}
      <div className="p-6 rounded-xl border border-cyan-400/20 bg-[#162829]/80 shadow">
        <h3 className="text-xl font-bold text-cyan-200 mb-3">Data Aggregation Layer</h3>
        <p className="text-teal-100/80">Connectors and crawlers fetch content from APIs (arXiv, CrossRef, GitHub, etc.) and sites—aggregating everything open, everywhere.</p>
      </div>
      {/* Indexing */}
      <div className="p-6 rounded-xl border border-emerald-400/20 bg-[#172921]/80 shadow">
        <h3 className="text-xl font-bold text-emerald-200 mb-3">Indexing & Storage</h3>
        <p className="text-teal-100/80">Unified index supports full-text & semantic search. Combines Elasticsearch (keywords) and a vector DB (semantic similarity).</p>
      </div>
      {/* AI/ML */}
      <div className="p-6 rounded-xl border border-purple-400/20 bg-[#18192b]/80 shadow">
        <h3 className="text-xl font-bold text-purple-200 mb-3">AI/ML Services</h3>
        <p className="text-teal-100/80">NLP & LLMs enrich and summarize content, power search, and generate semantic embeddings (e.g., with Sentence-BERT or OpenAI embeddings).</p>
      </div>
      {/* Backend */}
      <div className="p-6 rounded-xl border border-yellow-400/20 bg-[#29291a]/80 shadow">
        <h3 className="text-xl font-bold text-yellow-200 mb-3">Application Backend (API)</h3>
        <p className="text-teal-100/80">REST & GraphQL APIs orchestrate search, user/project management, comments, and all user-facing features.</p>
      </div>
    </div>
    <div className="mt-10 bg-[#162322]/90 p-6 rounded-lg border border-emerald-400/10 shadow text-teal-100/90 text-lg italic">
      True to its philosophy, Open Idea's architecture is being developed as open-source modules—ready for the world to inspect, contribute, or run themselves.
    </div>
  </div>
</section>

{/* Monetization Strategy */}
<section id="monetization" className="py-20 bg-gradient-to-br from-[#131f21] via-[#152624] to-[#0f191c] text-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent animate-glow mb-8">
      7. Monetization Strategy
    </h2>
    <p className="mb-4 text-teal-100/90">
      As an open-oriented platform, Open Idea will always provide core discovery and collaboration features for free to maximize community participation. However, to sustain and grow the platform, a sustainable monetization strategy is planned, focused on value-added services and partnerships rather than paywalling knowledge.
    </p>
    <h3 className="text-2xl font-semibold text-cyan-200 mt-8 mb-6">Key Revenue Streams:</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="p-6 rounded-xl border border-cyan-400/30 bg-[#172024]/80 shadow-lg hover:shadow-[0_0_18px_#30ffe07c] transition">
        <h4 className="text-xl font-medium text-cyan-300 flex items-center mb-2">
          <i className="fas fa-plug text-cyan-400 mr-2"></i>
          API Access & Enterprise Solutions
        </h4>
        <p className="text-teal-100/90 text-base">
          Open Idea will offer a commercial API for third-parties (companies, developers, institutions) to programmatically access its aggregated knowledge base and intelligence. Enterprise clients like R&D labs or innovation departments might subscribe to a premium API tier for high-volume queries, custom data feeds, or integration with their internal systems.
        </p>
      </div>
      {/* Card 2 */}
      <div className="p-6 rounded-xl border border-emerald-400/30 bg-[#182925]/80 shadow-lg hover:shadow-[0_0_18px_#18ffb87c] transition">
        <h4 className="text-xl font-medium text-emerald-300 flex items-center mb-2">
          <i className="fas fa-chart-line text-emerald-400 mr-2"></i>
          Advanced Discovery & Analytics
        </h4>
        <p className="text-teal-100/90 text-base">
          While basic search is free, professional users could pay for advanced discovery tools. This might include paid discovery reports or analytics—e.g. a curated landscape report on a given topic (using the platform's AI to summarize state-of-the-art from open resources), or alerts and monitoring of new open resources in specific areas.
        </p>
      </div>
      {/* Card 3 */}
      <div className="p-6 rounded-xl border border-purple-400/30 bg-[#1a1d29]/80 shadow-lg hover:shadow-[0_0_18px_#b38fff7c] transition">
        <h4 className="text-xl font-medium text-purple-300 flex items-center mb-2">
          <i className="fas fa-lightbulb text-purple-300 mr-2"></i>
          Open Innovation Consulting & Services
        </h4>
        <p className="text-teal-100/90 text-base">
          Building on the platform, Open Idea can offer consulting services to organizations (corporates, NGOs, governments) seeking to leverage open innovation. This might involve bespoke research, facilitating hackathons or open innovation challenges for a fee, or providing technical support to integrate a company’s own open projects with the community.
        </p>
      </div>
    </div>
    <div className="mt-10 bg-[#162322]/90 p-6 rounded-lg border border-emerald-400/10 shadow text-teal-100/90 text-lg italic">
      “Importantly, Open Idea will remain open-by-default—meaning all openly licensed resources and community contributions stay freely accessible. The monetization focuses on convenience, scale, and enterprise value-add.”
    </div>
  </div>
</section>

  {/* Insert a divider */}
  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-30 my-8" />

{/* Roadmap and Milestones */}
<section id="roadmap" className="py-20 bg-gradient-to-br from-[#12271c] via-[#152624] to-[#1a2926] text-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent animate-glow mb-8">
      8. Roadmap and Milestones
    </h2>
    <p className="mb-4 text-teal-100/90">
      Open Idea is in early-stage development, and the path from a mini-MVP to the fully realized platform is mapped out in iterative phases. Each phase of the roadmap focuses on delivering key features, testing with users, and expanding the open resource base.
    </p>
    <div className="mt-8 space-y-10">
      {/* Phase 1 */}
      <div className="border-l-4 border-emerald-400 pl-6 py-2 bg-[#182925]/70 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-emerald-300 mb-2">Phase 1: Mini-MVP (Prototype Stage) – Target: Q4 2025</h3>
        <p className="text-teal-100/80">This initial release will validate core functionality with a limited feature set. Features: A basic unified search across a few select data sources (e.g. arXiv for papers, GitHub for code, and one open data repository) with keyword search.</p>
        <div className="mt-3 bg-gradient-to-r from-emerald-900/40 to-transparent p-4 rounded-lg">
          <h4 className="font-medium text-emerald-200">Milestone:</h4>
          <p className="text-sm text-teal-100/90">Index ~1 million resources, onboard first small group of beta users (researchers, developers) to test search.</p>
        </div>
      </div>
      {/* Phase 2 */}
      <div className="border-l-4 border-cyan-400 pl-6 py-2 bg-[#172024]/70 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">Phase 2: Beta Launch (Search & Community) – Target: Mid 2026</h3>
        <p className="text-teal-100/80">An expanded beta release with broader content coverage and introduction of community elements. Features: Unified search extended to many more sources (targeting tens of millions of indexed items), now with full semantic search and filtering.</p>
        <div className="mt-3 bg-gradient-to-r from-cyan-900/40 to-transparent p-4 rounded-lg">
          <h4 className="font-medium text-cyan-200">Milestone:</h4>
          <p className="text-sm text-teal-100/90">&gt;10 million resources indexed; first community projects initiated on the platform; partnerships with one or two institutions for data integration.</p>
        </div>
      </div>
      {/* Phase 3 */}
      <div className="border-l-4 border-purple-400 pl-6 py-2 bg-[#181829]/70 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-purple-300 mb-2">Phase 3: Full Platform MVP (Launch 1.0) – Target: 2027</h3>
        <p className="text-teal-100/80">The first public version of Open Idea 1.0, offering the complete suite of features as envisioned. Features: Project workspaces, public/private projects, import resources, real-time collaboration, publish project outputs.</p>
        <div className="mt-3 bg-gradient-to-r from-purple-900/40 to-transparent p-4 rounded-lg">
          <h4 className="font-medium text-purple-200">Milestone:</h4>
          <p className="text-sm text-teal-100/90">Public launch with at least 50–100 million aggregated resources, a growing user base across multiple countries, and success stories of projects built via Open Idea.</p>
        </div>
      </div>
      {/* Phase 4 */}
      <div className="border-l-4 border-yellow-400 pl-6 py-2 bg-[#292918]/70 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-yellow-300 mb-2">Phase 4: Growth and Scale – Target: 2028 and beyond</h3>
        <p className="text-teal-100/80">With the core platform established, this phase focuses on scaling up and continuously improving: Rapid expansion of indexed content, non-English resources, optimization of search and AI, and scaling infrastructure for high availability.</p>
        <div className="mt-3 bg-gradient-to-r from-yellow-900/40 to-transparent p-4 rounded-lg">
          <h4 className="font-medium text-yellow-200">Milestone:</h4>
          <p className="text-sm text-teal-100/90">1 million+ active users, 100+ countries, and a healthy ecosystem where external developers build plugins/apps on the Open Idea API.</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Call to Action */}
<section id="action" className="py-20 bg-gradient-to-br from-[#152624] via-[#12362f] to-[#1b2a26] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent animate-glow mb-8">
      9. Call to Action
    </h2>
    <p className="mb-4 text-teal-100/90">
      Open Idea is more than just a product—it's a movement to unlock the world's knowledge for collective progress. We invite you to join us on this journey:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {/* Card 1 */}
      <div className="rounded-xl border border-emerald-400/30 bg-[#172921]/80 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">For Open-Source Contributors & Innovators</h3>
        </div>
        <div className="p-6">
          <p className="text-teal-100/90 mb-4">If you are a developer, designer, researcher, or creator who believes in the power of open collaboration, join our community and help build Open Idea.</p>
          <a href="#join" className="inline-flex items-center px-4 py-2 border border-emerald-400 text-emerald-200 rounded-md font-medium hover:bg-emerald-400 hover:text-gray-900 transition">
            Join Community <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
      {/* Card 2 */}
      <div className="rounded-xl border border-cyan-400/30 bg-[#182429]/80 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">For Investors & Visionary Backers</h3>
        </div>
        <div className="p-6">
          <p className="text-teal-100/90 mb-4">We are seeking partners who see the transformative potential of a unified open innovation platform and want to be part of its growth.</p>
          <a href="#invest" className="inline-flex items-center px-4 py-2 border border-cyan-400 text-cyan-200 rounded-md font-medium hover:bg-cyan-400 hover:text-gray-900 transition">
            Learn More <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
      {/* Card 3 */}
      <div className="rounded-xl border border-purple-400/30 bg-[#231829]/80 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-400 via-purple-600 to-teal-400 px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">For Partners: Universities, NGOs, Institutions</h3>
        </div>
        <div className="p-6">
          <p className="text-teal-100/90 mb-4">Open Idea thrives on collaboration with organizations that champion open innovation. We invite universities and research institutions to partner with us.</p>
          <a href="#partner" className="inline-flex items-center px-4 py-2 border border-purple-400 text-purple-200 rounded-md font-medium hover:bg-purple-400 hover:text-gray-900 transition">
            Partner With Us <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="mt-10 bg-[#162322]/90 p-6 rounded-lg border border-emerald-400/10 shadow text-teal-100/90 text-lg italic text-center">
      Visit our website (openidea.world) to sign up for early access, contribute to our open whitepaper discussions, or reach out directly at <span className="underline decoration-dotted decoration-cyan-400">hello@ecosyz.com</span>.
      <br />
      Let's build the future of open innovation together.
    </div>
  </div>
</section>

  {/* Final CTA */}
  <section className="py-16 bg-gradient-to-br from-[#12281e] via-[#162624] to-[#152620] text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent animate-glow mb-3">
        Ready to Join the Open Innovation Movement?
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-teal-100/90">
        Be part of shaping the future of collaborative problem-solving.
      </p>
      <div className="mt-8">
        <a
          href="#signup"
          className="px-6 py-3 rounded-md bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 font-semibold shadow hover:scale-105 transition"
        >
          Get Early Access
        </a>
      </div>
    </div>
  </section>
</div>
      </main>
      <Footer />
    </div>
  );
}
