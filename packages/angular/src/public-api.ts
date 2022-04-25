/*
 * Public API Surface of smart-pixel-angular
 */
export {WebtrekkSmartPixelModule} from './lib/WebtrekkSmartPixelModule';
export {WebtrekkSmartPixelAngular} from './lib/WebtrekkSmartPixelAngular';

import {WebtrekkSmartPixelModule} from './lib/WebtrekkSmartPixelModule';
import {WebtrekkSmartPixelAngular} from './lib/WebtrekkSmartPixelAngular';

export {DataDirective} from './lib/Directives/DataDirective';
export {TeaserDirective} from './lib/Directives/TeaserDirective';
export {ProductListDirective} from './lib/Directives/ProductListDirective';
export {ContentEngagementDirective} from './lib/Directives/ContentEngagementDirective';
export {ExtensionDirective} from './lib/Directives/ExtensionDirective';
export {WebtrekkSmartPixelAutoTracking} from './lib/WebtrekkSmartPixelAutoTracking';

// compatibility for v0
export const webtrekkSmartPixelAngular = new WebtrekkSmartPixelAngular();

export default {
    WebtrekkSmartPixelModule,
    WebtrekkSmartPixelAngular,

    // compatibility for v0
    webtrekkSmartPixelAngular
};
