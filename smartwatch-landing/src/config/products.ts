import type { Product } from "../types/ecommerce";
import imgSport from "../assets/images/gray.webp";
import imgPro from "../assets/images/watch-black.webp";
import imgElite from "../assets/images/watch.webp";

export const PRODUCTS: Product[] = [
    {
        id: "nova-sport",
        name: "NovaWatch Sport",
        price: 199,
        description: "Lightweight and durable, perfect for active lifestyles.",
        image: imgSport,
        badge: "Most Popular"
    },
    {
        id: "nova-pro",
        name: "NovaWatch Pro",
        price: 299,
        description: "Premium materials with advanced health tracking.",
        image: imgPro,
    },
    {
        id: "nova-elite",
        name: "NovaWatch Elite",
        price: 399,
        description: "Titanium body, sapphire glass, ultimate luxury.",
        image: imgElite,
        badge: "Premium"
    }
];
