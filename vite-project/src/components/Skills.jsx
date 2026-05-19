export default function Skills() {
    const skillGroups = [
      {
        title: "Frontend",
        skills: [
          "ReactJS",
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "Vite"
        ]
      },
  
      {
        title: "Automation & Testing",
        skills: [
          "Playwright",
          "Postman",
          "REST API Testing",
          "Jenkins",
          "SonarQube",
          "Jest"
        ]
      },
  
      {
        title: "Cloud & AI",
        skills: [
          "AWS",
          "Azure",
          "GenAI Tools",
          "GitHub Copilot",
          "MCP Tools",
          "Deep Learning"
        ]
      },
  
      {
        title: "PMO & Business",
        skills: [
          "Agile Workflows",
          "PMO Support",
          "Stakeholder Coordination",
          "Reporting",
          "Requirements Gathering",
          "Data Analysis"
        ]
      }
    ]
  
    return (
      <section
        id="skills"
        className="py-40 px-6 lg:px-20 bg-[#020617]"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-6">
            Skills
          </p>
  
          <h2 className="text-5xl lg:text-7xl font-black leading-tight">
            Technologies &
            <br />
            engineering expertise.
          </h2>
  
          <div className="grid lg:grid-cols-2 gap-10 mt-24">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-3xl font-bold mb-8">
                  {group.title}
                </h3>
  
                <div className="flex flex-wrap gap-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-black/30 border border-white/10 px-5 py-3 rounded-2xl text-slate-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }