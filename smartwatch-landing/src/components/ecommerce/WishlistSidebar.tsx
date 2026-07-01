import { useEcommerce } from "../../context/EcommerceContext";
import { X, ShoppingCart, Trash2 } from "lucide-react";
import type { Product } from "../../types/ecommerce";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    products: Product[]; // Pass the products list to match IDs
}

const WishlistSidebar = ({ isOpen, onClose, products }: Props) => {
    const { wishlist, toggleWishlist, addToCart } = useEcommerce();

    if (!isOpen) return null;

    const wishlistItems = products.filter(p => wishlist.includes(p.id));

    return (
        <div className="fixed inset-0 z-[60] flex justify-end">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-md bg-white dark:bg-[#09090B] h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
                <div className="flex items-center justify-between p-6 border-b border-black/10 dark:border-white/10">
                    <h2 className="text-2xl font-bold">Wishlist</h2>
                    <button onClick={onClose} className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {wishlistItems.length === 0 ? (
                        <p className="text-center text-gray-500 mt-10">Your wishlist is empty.</p>
                    ) : (
                        wishlistItems.map((product) => (
                            <div key={product.id} className="flex gap-4 items-center">
                                <img src={product.image} alt={product.name} className="w-20 h-20 object-contain bg-black/5 dark:bg-white/5 rounded-xl p-2" />
                                <div className="flex-1">
                                    <h3 className="font-semibold">{product.name}</h3>
                                    <p className="text-cyan-600 dark:text-cyan-400 font-bold">${product.price}</p>
                                    <div className="flex items-center gap-3 mt-3">
                                        <button 
                                            onClick={() => addToCart(product)}
                                            className="flex-1 flex justify-center items-center gap-2 bg-cyan-500 text-black py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
                                        >
                                            <ShoppingCart size={16} /> Add
                                        </button>
                                        <button onClick={() => toggleWishlist(product.id)} className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default WishlistSidebar;
