import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html'
})
export class ProductPreviewComponent implements OnInit {

  @Input() product: Product = {
    description: '',
    name: '',
    id: 0,
    imageUrl: '',
    price: 0,
    sku: ''
  };
  @Input() position: number = 0;

  onAddToCart() {
    this.cartService.addToCart(this.product);
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
