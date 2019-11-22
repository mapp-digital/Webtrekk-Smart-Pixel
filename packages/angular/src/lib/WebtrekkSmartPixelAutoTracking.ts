import { NgModule, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, delay } from 'rxjs/operators';

import { WebtrekkSmartPixelAngular } from './WebtrekkSmartPixelAngular';
import { WebtrekkSmartPixelConfig } from './WebtrekkSmartPixelConfig';
import { WEBTREKK_SMART_PIXEL_TOKEN } from './WebtrekkSmartPixelToken';

@NgModule()
export class WebtrekkSmartPixelAutoTracking {
    constructor(
        private router: Router,
        private pixel: WebtrekkSmartPixelAngular,
        @Inject(WEBTREKK_SMART_PIXEL_TOKEN) private config: WebtrekkSmartPixelConfig
    ) {
        this.pixel.init(this.config);

        if (this.config.activateActions) {
            this.pixel.extension('action', 'activate');
        }

        if (this.config.activateTeaser) {
            this.pixel.extension('teaser_tracking', 'activate');
        }

        if (this.config.activateProductList) {
            this.pixel.extension('product_list_tracking', 'activate');
        }

        if (this.config.activateContentEngagement) {
            this.pixel.extension('content_engagement', 'activate');
        }

        if (this.config.activateAutoTracking || this.config.activateActions) {
            this.router.events.pipe(
                filter(e => e instanceof NavigationEnd),
                delay(0)
            ).subscribe(() => {
                if (this.config.activateAutoTracking) {
                    this.pixel.trackPage();
                }

                if (this.config.activateActions) {
                    this.pixel.extension('action', 'reload');
                }
            });
        }
    }
}
