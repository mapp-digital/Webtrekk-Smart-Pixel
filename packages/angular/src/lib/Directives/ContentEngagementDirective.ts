import {Directive, Input, ElementRef, AfterContentInit} from '@angular/core';
import {WebtrekkContentEngagementProps} from './DataTypes';
import {WebtrekkSmartPixelAngular} from '../WebtrekkSmartPixelAngular';

@Directive({
    selector: '[wt-content-engagement]',
    exportAs: 'wt-content-engagement'
})
export class ContentEngagementDirective implements AfterContentInit {
    @Input('wt-content-engagement') wtContentEngagementElement: WebtrekkContentEngagementProps | undefined;

    constructor(
        private elementRef: ElementRef,
        private pixel: WebtrekkSmartPixelAngular
    ) {
    }

    ngAfterContentInit() {
        this.pixel.call((pix) => {
            pix.extension.content_engagement.add({
                selector: this.wtContentEngagementElement && this.wtContentEngagementElement.selector ? this.wtContentEngagementElement.selector : this.elementRef.nativeElement,
                name: this.wtContentEngagementElement && this.wtContentEngagementElement.name ? this.wtContentEngagementElement.name : '',
                config: this.wtContentEngagementElement
            });
        });
    }
}
