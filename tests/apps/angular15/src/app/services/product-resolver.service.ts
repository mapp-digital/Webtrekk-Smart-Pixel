import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { WebtrekkSmartPixelAngular } from '@webtrekk-smart-pixel/angular';
import { Observable, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { DataService } from './data.service';

@Injectable()
export class ProductResolver implements Resolve<Product | Product[]> {
  constructor(
    private data: DataService,
    private pixel: WebtrekkSmartPixelAngular
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product | Product[]> {
    if (route.params.hasOwnProperty('id')) {
      const product = this.data.getProduct(route.params['id']);
      return product.pipe(
        tap((product) => {
          this.pixel.product('view', {
            id: product.id.toString(),
            cost: product.price,
            quantity: 1,
          });
        })
      );
    }
    return this.data.getAllProducts();
  }
}
