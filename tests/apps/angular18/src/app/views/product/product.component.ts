import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  private route = inject(ActivatedRoute);
  product: Product;
  form: FormGroup = new FormGroup({
    'quantity': new FormControl(1)
  });
  addToCart() {
    this.cartService.addToCart({...this.product, ...this.form.value});
  }

  constructor(private cartService: CartService) {
    this.product = this.route.snapshot.data[0];
  }

  ngOnInit(): void {}
}
