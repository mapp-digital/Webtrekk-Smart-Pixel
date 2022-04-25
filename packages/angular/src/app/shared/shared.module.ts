import { NgModule } from "@angular/core";

import { WebtrekkSmartPixelModule } from '@webtrekk-smart-pixel/angular';

@NgModule({
  imports: [
    WebtrekkSmartPixelModule.forRoot({
      trackId: '123451234512345',
      trackDomain: 'analytics01.webtrekk.net',
      activateAutoTracking: true,
      activateActions: true,
      activateContentEngagement: true,
      activateTeaser: true,
      activateProductList: true
    })
  ],
  declarations: [],
  exports: [
    WebtrekkSmartPixelModule
  ],
  providers: []
})
export class SharedModule {}
