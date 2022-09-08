import { AfterContentInit } from '@angular/core';
import { WebtrekkExtensionProps } from './DataTypes';
import { WebtrekkSmartPixelAngular } from './../WebtrekkSmartPixelAngular';
export declare class ExtensionDirective implements AfterContentInit {
    private pixel;
    wtExtensionData: WebtrekkExtensionProps;
    constructor(pixel: WebtrekkSmartPixelAngular);
    ngAfterContentInit(): void;
}
