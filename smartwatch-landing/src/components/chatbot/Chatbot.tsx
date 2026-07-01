import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { getGeminiResponse } from "../../services/gemini";

interface ChatMessage {
    role: "user" | "model";
    parts: string;
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: "model", parts: "Xin chào! Tôi là Nova. Tôi có thể giúp gì cho bạn hôm nay?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = input.trim();
        setInput("");
        
        // Cập nhật tin nhắn user
        setMessages(prev => [...prev, { role: "user", parts: userMsg }]);
        setIsLoading(true);

        // Gọi API Gemini
        const historyForApi = messages.slice(1); // Bỏ qua tin chào mừng tĩnh
        const response = await getGeminiResponse(historyForApi, userMsg);

        // Cập nhật tin nhắn bot
        setMessages(prev => [...prev, { role: "model", parts: response }]);
        setIsLoading(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            {isOpen && (
                <div className="mb-4 w-80 sm:w-96 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#09090B] shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-600 p-4 text-white">
                        <div className="flex items-center gap-2">
                            <Bot size={20} />
                            <h3 className="font-bold">Nova Assistant</h3>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-4 p-4 h-80 overflow-y-auto bg-gray-50 dark:bg-black/20">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === "user" ? "bg-cyan-500 text-black" : "bg-gray-200 dark:bg-gray-800"}`}>
                                    {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                                </div>
                                <div className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${msg.role === "user" ? "bg-cyan-500 text-black rounded-tr-none" : "bg-white dark:bg-gray-800 border border-black/5 dark:border-white/5 rounded-tl-none"}`}>
                                    {msg.parts}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex gap-2 flex-row">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                                    <Bot size={16} />
                                </div>
                                <div className="bg-white dark:bg-gray-800 border border-black/5 dark:border-white/5 rounded-2xl rounded-tl-none px-4 py-2 text-sm flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-3 border-t border-black/10 dark:border-white/10 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Hỏi Nova về sản phẩm..."
                            className="flex-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-2 text-sm outline-none focus:border-cyan-500"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim() || isLoading}
                            className="p-2 rounded-full bg-cyan-500 text-black hover:bg-cyan-400 transition disabled:opacity-50"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}

            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-4 rounded-full bg-cyan-500 text-black shadow-xl hover:scale-110 transition-transform animate-bounce"
                >
                    <MessageCircle size={28} />
                </button>
            )}
        </div>
    );
};

export default Chatbot;
