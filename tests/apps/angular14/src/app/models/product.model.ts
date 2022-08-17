export class Product {
    constructor(
        public description: string, 
        public name: string,
        public id: number,
        public imageUrl: string,
        public price: number,
        public sku: string
        ) {}
}