import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Product, CartItem } from "../types/ecommerce";
import toast from "react-hot-toast";

interface EcommerceContextType {
    cart: CartItem[];
    wishlist: string[];
    history: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    toggleWishlist: (productId: string) => void;
    addToHistory: (product: Product) => void;
    clearCart: () => void;
    cartTotal: number;
}

const EcommerceContext = createContext<EcommerceContextType | undefined>(undefined);

export const EcommerceProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });

    const [wishlist, setWishlist] = useState<string[]>(() => {
        const saved = localStorage.getItem("wishlist");
        return saved ? JSON.parse(saved) : [];
    });

    const [history, setHistory] = useState<Product[]>(() => {
        const saved = localStorage.getItem("history");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    useEffect(() => {
        localStorage.setItem("history", JSON.stringify(history));
    }, [history]);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.product.id === product.id);
            if (existing) {
                toast.success(`Increased ${product.name} quantity`);
                return prev.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            toast.success(`Added ${product.name} to cart`);
            return [...prev, { product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCart((prev) => prev.filter((item) => item.product.id !== productId));
        toast.success("Item removed from cart");
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity < 1) return;
        setCart((prev) =>
            prev.map((item) =>
                item.product.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const toggleWishlist = (productId: string) => {
        setWishlist((prev) => {
            if (prev.includes(productId)) {
                toast.success("Removed from wishlist");
                return prev.filter((id) => id !== productId);
            } else {
                toast.success("Added to wishlist");
                return [...prev, productId];
            }
        });
    };

    const addToHistory = (product: Product) => {
        setHistory((prev) => {
            const newHistory = prev.filter((p) => p.id !== product.id);
            return [product, ...newHistory].slice(0, 10); // Keep last 10
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartTotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

    return (
        <EcommerceContext.Provider
            value={{
                cart,
                wishlist,
                history,
                addToCart,
                removeFromCart,
                updateQuantity,
                toggleWishlist,
                addToHistory,
                clearCart,
                cartTotal,
            }}
        >
            {children}
        </EcommerceContext.Provider>
    );
};

export const useEcommerce = () => {
    const context = useContext(EcommerceContext);
    if (context === undefined) {
        throw new Error("useEcommerce must be used within an EcommerceProvider");
    }
    return context;
};
