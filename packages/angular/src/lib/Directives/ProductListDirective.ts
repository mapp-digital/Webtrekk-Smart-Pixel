import { Directive, Input, ElementRef, AfterContentInit } from '@angular/core';
import { WebtrekkProductListProps } from './DataTypes';
import { WebtrekkSmartPixelAngular } from './../WebtrekkSmartPixelAngular';

@Directive({
    selector: '[wt-product-list]',
    exportAs: 'wt-product-list'
})
export class ProductListDirective implements AfterContentInit {
    @Input('wt-product-list') wtProductListElement: WebtrekkProductListProps;

    constructor(
        private elementRef: ElementRef,
        private pixel: WebtrekkSmartPixelAngular
    ) {}

    ngAfterContentInit() {
        this.pixel.call((pix) => {
            pix.extension.product_list_tracking.add({
                selector: ((this.wtProductListElement.selector) ? this.wtProductListElement.selector : this.elementRef.nativeElement),
                data: this.wtProductListElement
            });
        });
    }
}
