import { NgModule, ModuleWithProviders } from '@angular/core';

import { DataDirective } from './Directives/DataDirective';
import { TeaserDirective } from './Directives/TeaserDirective';
import { ProductListDirective } from './Directives/ProductListDirective';
import { ContentEngagementDirective } from './Directives/ContentEngagementDirective';
import { ExtensionDirective } from './Directives/ExtensionDirective';

import { WebtrekkSmartPixelAngular } from './WebtrekkSmartPixelAngular';
import { WebtrekkSmartPixelAutoTracking } from './WebtrekkSmartPixelAutoTracking';
import { WebtrekkSmartPixelConfig, DefaultConfig } from './WebtrekkSmartPixelConfig';
import { WEBTREKK_SMART_PIXEL_TOKEN } from './WebtrekkSmartPixelToken';

import { webtrekkSmartPixelAngular } from './index';

const defaultConfig = new DefaultConfig();

@NgModule({
    declarations: [
        DataDirective,
        ExtensionDirective,
        TeaserDirective,
        ProductListDirective,
        ContentEngagementDirective
    ],
    exports: [
        DataDirective,
        ExtensionDirective,
        TeaserDirective,
        ProductListDirective,
        ContentEngagementDirective,

        WebtrekkSmartPixelAutoTracking
    ],
    imports: [
        WebtrekkSmartPixelAutoTracking
    ],
    providers: [],
    bootstrap: []
})
export class WebtrekkSmartPixelModule {
    static forRoot(conf: WebtrekkSmartPixelConfig = {}): ModuleWithProviders<WebtrekkSmartPixelModule> {
        return {
            ngModule: WebtrekkSmartPixelModule,
            providers: [
                {
                    provide: WEBTREKK_SMART_PIXEL_TOKEN,
                    useValue: { ...defaultConfig, ...conf }
                },
                {
                    provide: WebtrekkSmartPixelAngular,
                    useValue: webtrekkSmartPixelAngular
                }
            ]
        };
    }
}
