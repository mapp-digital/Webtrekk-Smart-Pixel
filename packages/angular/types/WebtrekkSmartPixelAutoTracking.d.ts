import { Router } from '@angular/router';
import { WebtrekkSmartPixelAngular } from './WebtrekkSmartPixelAngular';
import { WebtrekkSmartPixelConfig } from './WebtrekkSmartPixelConfig';
export declare class WebtrekkSmartPixelAutoTracking {
    private router;
    private pixel;
    private config;
    constructor(router: Router, pixel: WebtrekkSmartPixelAngular, config: WebtrekkSmartPixelConfig);
}
