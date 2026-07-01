import { Menu, Moon, Sun, ShoppingCart, Heart, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { useEcommerce } from "../../context/EcommerceContext";
import CartSidebar from "../ecommerce/CartSidebar";
import WishlistSidebar from "../ecommerce/WishlistSidebar";
import HistorySidebar from "../ecommerce/HistorySidebar";
import { PRODUCTS } from "../../config/products";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const { cart, wishlist, history } = useEcommerce();
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

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

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <h1 
            className="text-2xl font-bold tracking-wide cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            NovaWatch
          </h1>

          <nav className="hidden gap-8 md:flex items-center">
            <a href="#features" className="hover:text-cyan-400 transition">
              Features
            </a>
            <a href="#specs" className="hover:text-cyan-400 transition">
              Specs
            </a>
            <a href="#shop" className="hover:text-cyan-400 transition">
              Shop
            </a>
            
            <div className="flex items-center gap-4 ml-4 border-l border-black/10 dark:border-white/10 pl-4">
                <button onClick={() => setIsHistoryOpen(true)} className="relative p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition">
                  <Clock size={20} />
                </button>
                <button onClick={() => setIsWishlistOpen(true)} className="relative p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition">
                  <Heart size={20} />
                  {wishlist.length > 0 && (
                      <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                          {wishlist.length}
                      </span>
                  )}
                </button>
                <button onClick={() => setIsCartOpen(true)} className="relative p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition">
                  <ShoppingCart size={20} />
                  {totalCartItems > 0 && (
                      <span className="absolute top-0 right-0 bg-cyan-500 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                          {totalCartItems}
                      </span>
                  )}
                </button>
                <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition">
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
              <button onClick={() => setIsCartOpen(true)} className="relative p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition">
                  <ShoppingCart size={20} />
                  {totalCartItems > 0 && (
                      <span className="absolute top-0 right-0 bg-cyan-500 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                          {totalCartItems}
                      </span>
                  )}
              </button>
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition">
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button>
                <Menu />
              </button>
          </div>
        </div>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistSidebar isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} products={PRODUCTS} />
      <HistorySidebar isOpen={isHistoryOpen} onClose={() => setIsHistoryOpen(false)} />
    </>
  );
};

export default Navbar;