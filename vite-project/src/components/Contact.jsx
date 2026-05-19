export default function Contact() {
    return (
      <section
        id="contact"
        className="py-40 px-6 lg:px-20 bg-[#020617] relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/10 blur-[150px] rounded-full" />
  
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-6">
            Contact
          </p>
  
          <h2 className="text-5xl lg:text-7xl font-black leading-tight">
            Let’s build something
            <br />
            impactful together.
          </h2>
  
          <p className="text-slate-300 text-xl leading-relaxed mt-10 max-w-3xl mx-auto">
            I’m interested in frontend engineering,
            automation testing,
            enterprise software,
            AI-assisted workflows,
            and scalable product experiences.
          </p>
  
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            <a
              href="mailto:abhiramikirthivasan@gmail.com"
              className="bg-violet-500 hover:bg-violet-400 transition px-8 py-4 rounded-2xl font-semibold"
            >
              Email Me
            </a>
  
            <a
              href="https://github.com/aribami"
              target="_blank"
              className="bg-white/5 border border-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl hover:bg-white/10 transition"
            >
              GitHub
            </a>
  
            <a
              href="https://linkedin.com/in/abhiramikirthivasan"
              target="_blank"
              className="bg-white/5 border border-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl hover:bg-white/10 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    )
  }