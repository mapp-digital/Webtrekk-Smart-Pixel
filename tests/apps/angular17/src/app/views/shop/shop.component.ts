import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../../models/content.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
})
export class ShopComponent implements OnInit {
  products: Product[] = this.route.snapshot.data[1];
  content: Content = this.route.snapshot.data[0];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
