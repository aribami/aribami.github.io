export default function Experience() {
    const experiences = [
      {
        year: "2024 - Present",
        company: "EPAM Systems",
        role: "Junior Software Engineer",
        description:
          "Worked across frontend engineering, Playwright automation testing, PMO collaboration, and enterprise Agile workflows for multiple international clients."
      },
  
      {
        year: "Enterprise Frontend",
        company: "Internal Feedback Portal",
        role: "ReactJS Development",
        description:
          "Built scalable frontend interfaces using ReactJS and AI-assisted workflows while contributing to containerized deployments and enterprise engineering practices."
      },
  
      {
        year: "Automation & QA",
        company: "Automotive Client",
        role: "Testing & Delivery",
        description:
          "Worked with Playwright automation, Agile delivery coordination, stakeholder communication, and cross-functional collaboration under accelerated timelines."
      },
  
      {
        year: "Business & PMO",
        company: "Cross Functional Rotation",
        role: "PMO / BA / Developer",
        description:
          "Rotated between PMO, Business Analyst, Developer, and Tester responsibilities while supporting enterprise workflows and project coordination."
      }
    ]
  
    return (
      <section
        id="experience"
        className="py-40 px-6 lg:px-20 bg-[#020617]"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-6">
            Experience
          </p>
  
          <h2 className="text-5xl lg:text-7xl font-black leading-tight">
            Building enterprise
            <br />
            software experiences.
          </h2>
  
          <div className="relative mt-24">
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10" />
  
            <div className="space-y-16">
              {experiences.map((exp) => (
                <div
                  key={exp.company}
                  className="relative pl-16"
                >
                  <div className="absolute left-0 top-3 w-8 h-8 rounded-full bg-violet-500 shadow-[0_0_40px_rgba(139,92,246,0.8)]" />
  
                  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 hover:-translate-y-2 transition duration-300">
                    <p className="text-cyan-400 text-sm uppercase tracking-[0.2em] mb-4">
                      {exp.year}
                    </p>
  
                    <h3 className="text-3xl font-bold">
                      {exp.company}
                    </h3>
  
                    <p className="text-violet-400 text-xl mt-2 mb-6">
                      {exp.role}
                    </p>
  
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }