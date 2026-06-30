export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    badge?: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}
