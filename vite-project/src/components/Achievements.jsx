export default function Achievements() {
    const achievements = [
      {
        title: "Delivery Excellence",
        description:
          "Recognized for exceptional performance in high-pressure enterprise project environments, demonstrating ownership, adaptability, and independent delivery capabilities."
      },
  
      {
        title: "AI Ready",
        description:
          "Recognized for adopting AI-assisted engineering workflows using GitHub Copilot and GenAI tools for development, testing, and productivity enhancement."
      },
  
      {
        title: "Product Mindset",
        description:
          "Recognized for maintaining strong product quality focus during Agile sprint deliveries, demos, and enterprise collaboration workflows."
      },
  
      {
        title: "Playwright Automation Appreciation",
        description:
          "Received appreciation for delivering structured Playwright automation demonstrations and collaborative testing workflows."
      },
  
      {
        title: "Team of Stars",
        description:
          "Appreciated for enthusiasm, collaboration, and active contribution toward positive engineering team engagement."
      },
  
      {
        title: "Keep Going",
        description:
          "Recognized for continuous learning, growth mindset, and positive contribution within project activities and engineering collaboration."
      }
    ]
  
    return (
      <section
        id="achievements"
        className="py-40 px-6 lg:px-20 bg-[#020617]"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-6">
            Achievements
          </p>
  
          <h2 className="text-5xl lg:text-7xl font-black leading-tight">
            Recognition,
            <br />
            awards & impact.
          </h2>
  
          <div className="grid lg:grid-cols-2 gap-10 mt-24">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 hover:-translate-y-3 transition duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-3xl mb-8">
                  ✦
                </div>
  
                <h3 className="text-3xl font-bold mb-6">
                  {achievement.title}
                </h3>
  
                <p className="text-slate-300 text-lg leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }