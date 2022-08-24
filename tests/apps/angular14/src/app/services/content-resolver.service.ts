import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { WebtrekkSmartPixelAngular } from '@webtrekk-smart-pixel/angular';
import { Observable } from 'rxjs';
import { Content } from '../models/content.model';
import { DataService } from './data.service';

@Injectable()
export class ContentResolver implements Resolve<Content> {
  constructor(private data: DataService) {}

  private getSlug(route: ActivatedRouteSnapshot) {
    return route.url.length === 0 ? 'home' : route.url[0].path;
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Content> {
    return this.data.getContent(this.getSlug(route));
  }
}
