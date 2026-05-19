export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fff7ed] px-6 pb-24 pt-36 grid-bg">
      <div className="absolute left-[-80px] top-32 h-72 w-72 rounded-full bg-[#fdba74]" />

      <div className="absolute bottom-20 right-[-60px] h-64 w-64 rounded-full bg-[#a78bfa]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-8 inline-flex rounded-full border-2 border-black bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.25em] card-shadow">
            Frontend Engineer • QA Automation • PMO Collaboration
          </div>

          <h1 className="text-6xl font-black leading-[0.9] tracking-tight text-black md:text-8xl">
            Abhirami
            <span className="block text-[#7c3aed]">Kirthivasan</span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl font-semibold leading-relaxed text-neutral-700 md:text-2xl">
            Junior Software Engineer at EPAM Systems working across
            ReactJS development, Playwright automation, PMO workflows,
            enterprise applications, and AI-assisted engineering.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="rounded-full border-2 border-black bg-[#7c3aed] px-8 py-4 text-lg font-black text-white transition hover:-translate-y-1 card-shadow"
            >
              View Projects
            </a>

            <a
              href="https://github.com/aribami"
              target="_blank"
              className="rounded-full border-2 border-black bg-[#86efac] px-8 py-4 text-lg font-black transition hover:-translate-y-1 card-shadow"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/abhiramikirthivasan"
              target="_blank"
              className="rounded-full border-2 border-black bg-[#f9a8d4] px-8 py-4 text-lg font-black transition hover:-translate-y-1 card-shadow"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-full w-full rounded-[3rem] border-2 border-black bg-[#facc15]" />

          <img
            src="/profile.jpeg"
            alt="Abhirami"
            className="relative z-10 h-[650px] w-full rounded-[3rem] border-2 border-black object-cover card-shadow"
          />
        </div>
      </div>
    </section>
  )
}
