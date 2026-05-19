export default function Navbar() {
  const navItems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Achievements", "#achievements"],
    ["Contact", "#contact"]
  ]

  return (
    <nav className="fixed top-0 z-50 w-full border-b-2 border-black bg-[#fff7ed]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="rounded-full border-2 border-black bg-[#facc15] px-5 py-2 text-2xl font-black card-shadow">
          AK.
        </div>

        <div className="hidden gap-3 md:flex">
          {navItems.map(([label, link]) => (
            <a
              key={label}
              href={link}
              className="rounded-full border-2 border-black bg-white px-5 py-2 font-bold transition hover:-translate-y-1 hover:bg-[#c4b5fd]"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
