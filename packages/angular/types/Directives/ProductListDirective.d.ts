import { ElementRef, AfterContentInit } from '@angular/core';
import { WebtrekkProductListProps } from './DataTypes';
import { WebtrekkSmartPixelAngular } from './../WebtrekkSmartPixelAngular';
export declare class ProductListDirective implements AfterContentInit {
    private elementRef;
    private pixel;
    wtProductListElement: WebtrekkProductListProps;
    constructor(elementRef: ElementRef, pixel: WebtrekkSmartPixelAngular);
    ngAfterContentInit(): void;
}
