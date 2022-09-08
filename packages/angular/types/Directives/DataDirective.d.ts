import { AfterContentInit } from '@angular/core';
import { WebtrekkAdvancedProps, WebtrekkCampaignProps, WebtrekkCustomerProps, WebtrekkInitProps, WebtrekkOrderProps, WebtrekkPageProps, WebtrekkProductProps, WebtrekkSessionProps } from './DataTypes';
import { WebtrekkSmartPixelAngular } from '../WebtrekkSmartPixelAngular';
export declare class DataDirective implements AfterContentInit {
    private pixel;
    wtAdvancedData: WebtrekkAdvancedProps;
    wtCampaignData: WebtrekkCampaignProps;
    wtCustomerData: WebtrekkCustomerProps;
    wtInitData: WebtrekkInitProps;
    wtOrderData: WebtrekkOrderProps;
    wtPageData: WebtrekkPageProps;
    wtProductData: WebtrekkProductProps;
    wtSessionData: WebtrekkSessionProps;
    wtTrack: boolean;
    constructor(pixel: WebtrekkSmartPixelAngular);
    ngAfterContentInit(): void;
}
