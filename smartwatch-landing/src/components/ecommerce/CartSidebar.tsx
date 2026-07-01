import { useEcommerce } from "../../context/EcommerceContext";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";
import { createOrder } from "../../services/order";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: Props) => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useEcommerce();
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");

    if (!isOpen) return null;

    const handleCheckout = async () => {
        if (cart.length === 0) return;
        
        if (!customerName.trim() || !customerPhone.trim()) {
            toast.error("Vui lòng nhập đầy đủ Tên và Số điện thoại!");
            return;
        }

        setIsCheckingOut(true);
        try {
            await createOrder(cart, cartTotal, customerName, customerPhone);
            clearCart();
            setCustomerName("");
            setCustomerPhone("");
            toast.success("Checkout thành công!");
            onClose();
        } catch (error) {
            toast.error("Checkout failed. Please try again.");
        } finally {
            setIsCheckingOut(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex justify-end">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-md bg-white dark:bg-[#09090B] h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
                <div className="flex items-center justify-between p-6 border-b border-black/10 dark:border-white/10">
                    <h2 className="text-2xl font-bold">Your Cart</h2>
                    <button onClick={onClose} aria-label="Close cart" className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cart.length === 0 ? (
                        <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
                    ) : (
                        cart.map((item) => (
                            <div key={item.product.id} className="flex gap-4 items-center">
                                <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-contain bg-black/5 dark:bg-white/5 rounded-xl p-2 mix-blend-multiply dark:mix-blend-normal" />
                                <div className="flex-1">
                                    <h3 className="font-semibold">{item.product.name}</h3>
                                    <p className="text-cyan-600 dark:text-cyan-400 font-bold">${item.product.price}</p>
                                    <div className="flex items-center gap-3 mt-2">
                                        <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 rounded-lg px-2 py-1">
                                            <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} disabled={item.quantity <= 1} aria-label="Decrease quantity" className="disabled:opacity-50 hover:text-cyan-500">
                                                <Minus size={14} />
                                            </button>
                                            <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} aria-label="Increase quantity" className="hover:text-cyan-500">
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        <button onClick={() => removeFromCart(item.product.id)} aria-label="Remove item" className="text-red-500 hover:bg-red-500/10 p-1.5 rounded-lg transition ml-auto">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="p-6 border-t border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 space-y-4">
                        <div className="space-y-3">
                            <input 
                                type="text"
                                placeholder="Họ và Tên"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/20 p-3 text-gray-900 dark:text-white outline-none focus:border-cyan-500"
                            />
                            <input 
                                type="tel"
                                placeholder="Số điện thoại"
                                value={customerPhone}
                                onChange={(e) => setCustomerPhone(e.target.value)}
                                className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/20 p-3 text-gray-900 dark:text-white outline-none focus:border-cyan-500"
                            />
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-lg font-semibold">Total</span>
                            <span className="text-2xl font-bold">${cartTotal}</span>
                        </div>
                        <button 
                            onClick={handleCheckout} 
                            disabled={isCheckingOut}
                            className="w-full bg-cyan-500 text-black font-bold py-4 rounded-xl hover:bg-cyan-400 transition disabled:opacity-50"
                        >
                            {isCheckingOut ? "Processing..." : "Checkout"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartSidebar;
