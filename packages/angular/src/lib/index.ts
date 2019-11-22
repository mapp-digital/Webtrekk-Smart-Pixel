export { WebtrekkSmartPixelModule } from './WebtrekkSmartPixelModule';
export { WebtrekkSmartPixelAngular } from './WebtrekkSmartPixelAngular';

import { WebtrekkSmartPixelModule } from './WebtrekkSmartPixelModule';
import { WebtrekkSmartPixelAngular } from './WebtrekkSmartPixelAngular';

// compatibility for v0
export const webtrekkSmartPixelAngular = new WebtrekkSmartPixelAngular();

export default {
  WebtrekkSmartPixelModule,
  WebtrekkSmartPixelAngular,

  // compatibility for v0
  webtrekkSmartPixelAngular
}
