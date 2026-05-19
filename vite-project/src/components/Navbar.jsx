export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-black">
            AK.
          </h1>
  
          <div className="hidden md:flex gap-8 text-slate-300">
            <a href="#" className="hover:text-white transition">
              About
            </a>
  
            <a href="#" className="hover:text-white transition">
              Skills
            </a>
  
            <a href="#" className="hover:text-white transition">
              Projects
            </a>
  
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>
    )
  }