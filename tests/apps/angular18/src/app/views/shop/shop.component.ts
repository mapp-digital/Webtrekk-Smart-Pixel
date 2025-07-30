import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../models/content.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
})
export class ShopComponent implements OnInit {
  private route = inject(ActivatedRoute);
  products: Product[];
  content: Content;

  constructor() {
    this.content = this.route.snapshot.data[0];
    this.products = this.route.snapshot.data[1];
  }

  ngOnInit(): void {}
}
