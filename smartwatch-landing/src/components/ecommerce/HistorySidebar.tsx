import { useEcommerce } from "../../context/EcommerceContext";
import { X, Clock, ArrowRight } from "lucide-react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const HistorySidebar = ({ isOpen, onClose }: Props) => {
    const { history } = useEcommerce();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex justify-end">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-md bg-white dark:bg-[#09090B] h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
                <div className="flex items-center justify-between p-6 border-b border-black/10 dark:border-white/10">
                    <div className="flex items-center gap-2">
                        <Clock className="text-cyan-500" />
                        <h2 className="text-2xl font-bold">Recently Viewed</h2>
                    </div>
                    <button onClick={onClose} aria-label="Close history" className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {history.length === 0 ? (
                        <p className="text-center text-gray-500 mt-10">You haven't viewed any products yet.</p>
                    ) : (
                        history.map((product, idx) => (
                            <a 
                                href="#shop"
                                onClick={onClose}
                                key={`${product.id}-${idx}`} 
                                className="flex gap-4 items-center p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition border border-transparent hover:border-black/10 dark:hover:border-white/10 group"
                            >
                                <img src={product.image} alt={product.name} className="w-16 h-16 object-contain bg-black/5 dark:bg-white/5 rounded-lg p-1" />
                                <div className="flex-1">
                                    <h3 className="font-semibold">{product.name}</h3>
                                    <p className="text-sm text-gray-500">${product.price}</p>
                                </div>
                                <ArrowRight size={16} className="text-gray-400 group-hover:text-cyan-500 transition mr-2" />
                            </a>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default HistorySidebar;
