import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import type { CartItem } from "../types/ecommerce";

export const createOrder = async (cartItems: CartItem[], totalAmount: number) => {
    try {
        const orderData = {
            items: cartItems.map(item => ({
                productId: item.product.id,
                name: item.product.name,
                price: item.product.price,
                quantity: item.quantity
            })),
            totalAmount,
            status: "pending",
            createdAt: serverTimestamp()
        };

        const docRef = await addDoc(collection(db, "orders"), orderData);
        return docRef.id;
    } catch (error) {
        console.error("Error creating order: ", error);
        throw new Error("Could not process checkout at this time.");
    }
};
