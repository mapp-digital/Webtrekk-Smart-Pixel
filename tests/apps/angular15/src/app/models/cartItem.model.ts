export interface CartItem {
    description: string, 
    name: string,
    id: number,
    imageUrl: string,
    price: number,
    sku: string,
    quantity?: number,
    sum?: number
}
