import { Directive, Input, AfterContentInit } from '@angular/core';
import {
    WebtrekkAdvancedProps, WebtrekkCampaignProps, WebtrekkCustomerProps,
    WebtrekkInitProps, WebtrekkOrderProps, WebtrekkPageProps,
    WebtrekkProductProps, WebtrekkSessionProps
} from './DataTypes';
import { WebtrekkSmartPixelAngular } from './../WebtrekkSmartPixelAngular';

const directiveSelector = '[wt-advanced-data],'
    + '[wt-campaign-data],'
    + '[wt-customer-data],'
    + '[wt-init-data],'
    + '[wt-order-data],'
    + '[wt-page-data],'
    + '[wt-product-data],'
    + '[wt-session-data]';

@Directive({
    selector: directiveSelector
})
export class DataDirective implements AfterContentInit {
    @Input('wt-advanced-data') wtAdvancedData: WebtrekkAdvancedProps;
    @Input('wt-campaign-data') wtCampaignData: WebtrekkCampaignProps;
    @Input('wt-customer-data') wtCustomerData: WebtrekkCustomerProps;
    @Input('wt-init-data') wtInitData: WebtrekkInitProps;
    @Input('wt-order-data') wtOrderData: WebtrekkOrderProps;
    @Input('wt-page-data') wtPageData: WebtrekkPageProps;
    @Input('wt-product-data') wtProductData: WebtrekkProductProps;
    @Input('wt-session-data') wtSessionData: WebtrekkSessionProps;
    @Input('wt-track') wtTrack: boolean;

    constructor(private pixel: WebtrekkSmartPixelAngular) {}

    ngAfterContentInit() {
        if (this.wtAdvancedData) {
            this.pixel.advanced(this.wtAdvancedData);
        }

        if (this.wtCampaignData) {
            this.pixel.campaign(this.wtCampaignData);
        }

        if (this.wtCustomerData) {
            this.pixel.customer(this.wtCustomerData.id, this.wtCustomerData, this.wtCustomerData.validation);
        }

        if (this.wtInitData) {
            this.pixel.init(this.wtInitData);
        }

        if (this.wtOrderData) {
            this.pixel.order(this.wtOrderData);
        }

        if (this.wtPageData) {
            this.pixel.page(this.wtPageData.name, this.wtPageData);
        }

        if (this.wtProductData) {
            this.pixel.product(this.wtProductData.action, this.wtProductData);
        }

        if (this.wtSessionData) {
            this.pixel.session(this.wtSessionData);
        }

        if (typeof this.wtTrack !== 'undefined') {
            setTimeout(() => {
                this.pixel.track();
            }, 0);
        }
    }
}
