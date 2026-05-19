export default function About() {
    return (
      <section
        id="about"
        className="py-40 px-6 lg:px-20 bg-[#020617]"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-6">
            About
          </p>
  
          <h2 className="text-5xl lg:text-7xl font-black leading-tight max-w-5xl">
            Engineering experiences
            <br />
            beyond just code.
          </h2>
  
          <div className="mt-20 grid lg:grid-cols-2 gap-10">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10">
              <h3 className="text-3xl font-bold mb-6">
                Frontend Engineering
              </h3>
  
              <p className="text-slate-300 text-lg leading-relaxed">
                Building scalable enterprise interfaces using ReactJS,
                modern component architecture,
                responsive design systems,
                and AI-assisted engineering workflows.
              </p>
            </div>
  
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10">
              <h3 className="text-3xl font-bold mb-6">
                Cross Functional Roles
              </h3>
  
              <p className="text-slate-300 text-lg leading-relaxed">
                Experience rotating between Developer,
                PMO,
                Business Analyst,
                and Tester responsibilities while collaborating in Agile enterprise teams.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }