export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Fridgenizer
        </h1>

        <div className="hidden items-center gap-8 text-gray-300 md:flex">
          <a href="#features" className="transition hover:text-green-400">
            Features
          </a>

          <a href="#how" className="transition hover:text-green-400">
            How it works
          </a>

          <a href="#waitlist" className="transition hover:text-green-400">
            Waitlist
          </a>
        </div>

        <button className="rounded-full bg-green-500 px-6 py-3 font-semibold transition hover:bg-green-400">
          Early Access
        </button>
      </div>
    </nav>
  );
}