export default function Footer() {
    return (
      <footer className="border-t border-white/10 bg-[#020617] px-6 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black">
              Abhirami Kirthivasan
            </h2>
  
            <p className="text-slate-400 mt-2">
              Junior Software Engineer • ReactJS • Playwright • AI Workflows
            </p>
          </div>
  
          <div className="flex gap-6 text-slate-400">
            <a
              href="https://github.com/aribami"
              target="_blank"
              className="hover:text-white transition"
            >
              GitHub
            </a>
  
            <a
              href="https://linkedin.com/in/abhiramikirthivasan"
              target="_blank"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
  
            <a
              href="mailto:abhiramikirthivasan@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    )
  }