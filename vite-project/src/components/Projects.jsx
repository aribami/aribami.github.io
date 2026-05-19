export default function Projects() {
    const projects = [
      {
        title: "Backfeed",
        description:
          "Anonymous feedback platform with secure authentication, scalable backend workflows, and modern frontend architecture.",
        tech: [
          "Laravel",
          "PHP",
          "Blade",
          "MySQL"
        ],
        github: "https://github.com/aribami/backfeed",
        live: "",
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop"
      },
  
      {
        title: "FLAMES Progressive Web App",
        description:
          "Progressive Web App implementation of the traditional FLAMES game with responsive UI and installable mobile experience.",
        tech: [
          "JavaScript",
          "HTML",
          "CSS",
          "PWA"
        ],
        github: "https://github.com/aribami/flames",
        live: "https://play.google.com/",
        image:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop"
      },
  
      {
        title: "Employee Feedback Portal",
        description:
          "Internal enterprise feedback portal developed using ReactJS with AI-assisted workflows and containerized deployment architecture.",
        tech: [
          "ReactJS",
          "Docker",
          "GenAI",
          "Enterprise Frontend"
        ],
        github: "",
        live: "",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
      },
  
      {
        title: "ONLYOFFICE Plugin Development",
        description:
          "Custom ONLYOFFICE plugins and enterprise frontend integrations developed for advanced analytics and life sciences clients.",
        tech: [
          "ONLYOFFICE",
          "ReactJS",
          "Plugin Development"
        ],
        github: "",
        live: "",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
      }
    ]
  
    return (
      <section
        id="projects"
        className="py-40 px-6 lg:px-20 bg-[#020617]"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-6">
            Projects
          </p>
  
          <h2 className="text-5xl lg:text-7xl font-black leading-tight">
            Selected work &
            <br />
            engineering projects.
          </h2>
  
          <div className="grid lg:grid-cols-2 gap-10 mt-24">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] overflow-hidden hover:-translate-y-3 transition duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
  
                <div className="p-10">
                  <h3 className="text-3xl font-bold mb-6">
                    {project.title}
                  </h3>
  
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((item) => (
                      <div
                        key={item}
                        className="bg-black/30 border border-white/10 px-4 py-2 rounded-2xl text-sm text-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
  
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="bg-violet-500 hover:bg-violet-400 transition px-6 py-3 rounded-2xl font-semibold"
                      >
                        GitHub
                      </a>
                    )}
  
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        className="bg-white/5 border border-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl hover:bg-white/10 transition"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }