import { Directive, Input, AfterContentInit } from '@angular/core';
import { WebtrekkExtensionProps } from './DataTypes';
import { WebtrekkSmartPixelAngular } from './../WebtrekkSmartPixelAngular';

@Directive({
    selector: '[wt-extension]',
    exportAs: 'wt-extension'
})
export class ExtensionDirective implements AfterContentInit {
    @Input('wt-extension') wtExtensionData: WebtrekkExtensionProps;

    constructor(private pixel: WebtrekkSmartPixelAngular) {}

    ngAfterContentInit() {
        this.pixel.extension(this.wtExtensionData.name, this.wtExtensionData.action, this.wtExtensionData.config);
    }
}
