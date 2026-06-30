import type { Product } from "../types/ecommerce";
import { S3_IMAGES } from "./s3";

export const PRODUCTS: Product[] = [
    {
        id: "nova-sport",
        name: "NovaWatch Sport",
        price: 199,
        description: "Lightweight and durable, perfect for active lifestyles.",
        image: S3_IMAGES.hero,
        badge: "Most Popular"
    },
    {
        id: "nova-pro",
        name: "NovaWatch Pro",
        price: 299,
        description: "Premium materials with advanced health tracking.",
        image: S3_IMAGES.hero, // Using same image for demo
    },
    {
        id: "nova-elite",
        name: "NovaWatch Elite",
        price: 399,
        description: "Titanium body, sapphire glass, ultimate luxury.",
        image: S3_IMAGES.hero, // Using same image for demo
        badge: "Premium"
    }
];
