import { GoogleGenerativeAI } from "@google/generative-ai";
import { PRODUCTS } from "../config/products";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

let genAI: GoogleGenerativeAI | null = null;
if (apiKey) {
    genAI = new GoogleGenerativeAI(apiKey);
}

const SYSTEM_PROMPT = `
Bạn là Nova, nhân viên tư vấn ảo của thương hiệu đồng hồ thông minh NovaWatch.
Nhiệm vụ của bạn là tư vấn cho khách hàng một cách thân thiện, nhiệt tình và chuyên nghiệp về 3 dòng sản phẩm đồng hồ hiện có:

${PRODUCTS.map(p => `- ${p.name}: Giá $${p.price}. Tính năng: ${p.description}`).join('\n')}

Lưu ý khi trả lời:
- Luôn thân thiện, ngắn gọn và súc tích (dưới 5 câu).
- Khuyên người dùng thêm sản phẩm vào giỏ hàng hoặc wishlist.
- Nếu được hỏi về các tính năng như chống nước, pin, hãy tham khảo các thông số chung: Pin 14 ngày, chống nước IP68, AI Assistant.
- Từ chối trả lời các câu hỏi không liên quan đến đồng hồ NovaWatch.
`;

export const getGeminiResponse = async (history: {role: "user" | "model", parts: string}[], message: string) => {
    if (!genAI) {
        return "Xin lỗi, hệ thống AI tư vấn đang được bảo trì. Vui lòng thêm Gemini API Key vào file .env!";
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const chat = model.startChat({
            history: [
                { role: "user", parts: [{ text: "Hãy đóng vai nhân viên Nova tư vấn bán hàng." }] },
                { role: "model", parts: [{ text: "Vâng, tôi đã hiểu. Tôi là Nova, nhân viên tư vấn của NovaWatch." }] },
                { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
                { role: "model", parts: [{ text: "Tôi đã ghi nhớ toàn bộ thông tin sản phẩm và sẵn sàng tư vấn." }] },
                ...history.map(h => ({
                    role: h.role,
                    parts: [{ text: h.parts }]
                }))
            ],
            generationConfig: {
                maxOutputTokens: 200,
            }
        });

        const result = await chat.sendMessage(message);
        return result.response.text();
    } catch (error) {
        console.error("Gemini Error:", error);
        return "Xin lỗi, tôi đang gặp chút sự cố kết nối. Bạn vui lòng thử lại sau nhé.";
    }
};
