export default function Certifications() {
    const certifications = [
      "Microsoft 365 Certified: Fundamentals",
      "Microsoft Certified: Azure Fundamentals",
      "Salesforce AI Associate",
      "AWS Cloud Practitioner Essentials",
      "Software Testing – NPTEL",
      "Database Programming with SQL – Oracle"
    ]
  
    return (
      <section
        id="certifications"
        className="py-40 px-6 lg:px-20 bg-[#020617]"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-6">
            Certifications
          </p>
  
          <h2 className="text-5xl lg:text-7xl font-black leading-tight">
            Continuous learning
            <br />
            & professional growth.
          </h2>
  
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-24">
            {certifications.map((certification) => (
              <div
                key={certification}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl mb-6">
                  ✓
                </div>
  
                <h3 className="text-2xl font-semibold leading-relaxed">
                  {certification}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }