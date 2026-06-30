import { useEcommerce } from "../../context/EcommerceContext";
import { ShoppingCart, Heart } from "lucide-react";
import { PRODUCTS } from "../../config/products";

const Shop = () => {
    const { addToCart, toggleWishlist, wishlist, addToHistory } = useEcommerce();

    return (
        <section id="shop" className="mx-auto max-w-7xl px-6 py-28">
            <div className="text-center mb-16">
                <p className="text-cyan-600 dark:text-cyan-400 font-semibold tracking-wide uppercase">Shop</p>
                <h2 className="mt-2 text-4xl md:text-5xl font-bold">Choose Your NovaWatch</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Find the perfect model that fits your lifestyle.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {PRODUCTS.map((product) => {
                    const isWishlisted = wishlist.includes(product.id);

                    return (
                        <div 
                            key={product.id}
                            className="relative flex flex-col rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 hover:border-cyan-400 transition cursor-pointer"
                            onClick={() => addToHistory(product)}
                        >
                            {product.badge && (
                                <span className="absolute top-4 left-4 rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                                    {product.badge}
                                </span>
                            )}
                            
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleWishlist(product.id);
                                }}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition z-10"
                            >
                                <Heart 
                                    size={20} 
                                    className={isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"} 
                                />
                            </button>

                            <div className="flex justify-center py-8">
                                <img src={product.image} alt={product.name} className="h-48 object-contain hover:scale-105 transition-transform duration-300" />
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-xl font-bold">{product.name}</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{product.description}</p>
                                <div className="mt-6 flex items-center justify-between">
                                    <span className="text-2xl font-bold">${product.price}</span>
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(product);
                                        }}
                                        className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-black hover:scale-105 transition"
                                    >
                                        <ShoppingCart size={18} />
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Shop;
