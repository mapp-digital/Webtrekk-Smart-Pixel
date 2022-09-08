import { ElementRef, AfterContentInit } from '@angular/core';
import { WebtrekkTeaserProps } from './DataTypes';
import { WebtrekkSmartPixelAngular } from './../WebtrekkSmartPixelAngular';
export declare class TeaserDirective implements AfterContentInit {
    private elementRef;
    private pixel;
    wtTeaserElement: WebtrekkTeaserProps;
    constructor(elementRef: ElementRef, pixel: WebtrekkSmartPixelAngular);
    ngAfterContentInit(): void;
}
