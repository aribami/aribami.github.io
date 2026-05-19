export default function Hero() {
    return (
      <section className="min-h-screen bg-[#020617] text-white flex items-center relative overflow-hidden px-6">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-violet-500/20 blur-[120px] rounded-full" />
  
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />
  
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-8">
            Frontend Engineer • Automation Enthusiast
          </p>
  
          <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight">
            Building elegant
            <br />
            enterprise
            <br />
            experiences.
          </h1>
  
          <p className="text-slate-300 text-xl mt-10 max-w-2xl leading-relaxed">
            Junior Software Engineer at EPAM Systems specializing in
            ReactJS, Playwright automation,
            PMO collaboration,
            and AI-assisted workflows.
          </p>
  
          <div className="flex gap-5 mt-12">
            <button className="bg-violet-500 hover:bg-violet-400 transition px-8 py-4 rounded-2xl font-semibold">
              View Projects
            </button>
  
            <a
              href="https://github.com/aribami"
              target="_blank"
              className="bg-white/5 border border-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl hover:bg-white/10 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    )
  }