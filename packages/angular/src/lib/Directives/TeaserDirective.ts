import { Directive, Input, ElementRef, AfterContentInit } from '@angular/core';
import { WebtrekkTeaserProps } from './DataTypes';
import { WebtrekkSmartPixelAngular } from './../WebtrekkSmartPixelAngular';

@Directive({
    selector: '[wt-teaser]',
    exportAs: 'wt-teaser'
})
export class TeaserDirective implements AfterContentInit {
    @Input('wt-teaser') wtTeaserElement: WebtrekkTeaserProps;

    constructor(
        private elementRef: ElementRef,
        private pixel: WebtrekkSmartPixelAngular
    ) {}

    ngAfterContentInit() {
        this.pixel.call((pix) => {
            pix.extension.teaser_tracking.add({
                selector: ((this.wtTeaserElement.selector) ? this.wtTeaserElement.selector : this.elementRef.nativeElement),
                data: this.wtTeaserElement,
                conversion: this.wtTeaserElement
            });
        });
    }
}
