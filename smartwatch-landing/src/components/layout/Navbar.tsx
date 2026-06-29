import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold tracking-wide">
          NovaWatch
        </h1>

        <nav className="hidden gap-10 md:flex">
          <a href="#features" className="hover:text-cyan-400 transition">
            Features
          </a>

          <a href="#specs" className="hover:text-cyan-400 transition">
            Specs
          </a>

          <a href="#newsletter" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </nav>

        <button className="md:hidden">
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default Navbar;