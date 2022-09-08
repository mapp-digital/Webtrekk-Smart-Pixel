import { ElementRef, AfterContentInit } from '@angular/core';
import { WebtrekkContentEngagementProps } from './DataTypes';
import { WebtrekkSmartPixelAngular } from './../WebtrekkSmartPixelAngular';
export declare class ContentEngagementDirective implements AfterContentInit {
    private elementRef;
    private pixel;
    wtContentEngagementElement: WebtrekkContentEngagementProps;
    constructor(elementRef: ElementRef, pixel: WebtrekkSmartPixelAngular);
    ngAfterContentInit(): void;
}
