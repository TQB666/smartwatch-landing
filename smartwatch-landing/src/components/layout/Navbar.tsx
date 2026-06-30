import { Menu, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold tracking-wide">
          NovaWatch
        </h1>

        <nav className="hidden gap-10 md:flex items-center">
          <a href="#features" className="hover:text-cyan-400 transition">
            Features
          </a>

          <a href="#specs" className="hover:text-cyan-400 transition">
            Specs
          </a>

          <a href="#newsletter" className="hover:text-cyan-400 transition">
            Contact
          </a>
          
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition">
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button>
            <Menu />
            </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;