import {Directive, Input, AfterContentInit} from '@angular/core';
import {
    WebtrekkAdvancedProps, WebtrekkCampaignProps, WebtrekkCustomerProps,
    WebtrekkInitProps, WebtrekkOrderProps, WebtrekkPageProps,
    WebtrekkProductProps, WebtrekkSessionProps, WebtrekkEngageProps
} from './DataTypes';
import {WebtrekkSmartPixelAngular} from '../WebtrekkSmartPixelAngular';

const directiveSelector = '[wt-advanced-data],'
    + '[wt-campaign-data],'
    + '[wt-customer-data],'
    + '[wt-engage-data],'
    + '[wt-init-data],'
    + '[wt-order-data],'
    + '[wt-page-data],'
    + '[wt-product-data],'
    + '[wt-session-data]';

@Directive({
    selector: directiveSelector
})
export class DataDirective implements AfterContentInit {
    @Input('wt-advanced-data') wtAdvancedData: WebtrekkAdvancedProps | undefined;
    @Input('wt-campaign-data') wtCampaignData: WebtrekkCampaignProps | undefined;
    @Input('wt-engage-data') wtEngageData: WebtrekkEngageProps | undefined;
    @Input('wt-customer-data') wtCustomerData: WebtrekkCustomerProps | undefined;
    @Input('wt-init-data') wtInitData: WebtrekkInitProps | undefined;
    @Input('wt-order-data') wtOrderData: WebtrekkOrderProps | undefined;
    @Input('wt-page-data') wtPageData: WebtrekkPageProps | undefined;
    @Input('wt-product-data') wtProductData: WebtrekkProductProps | undefined;
    @Input('wt-session-data') wtSessionData: WebtrekkSessionProps | undefined;
    @Input('wt-track') wtTrack: boolean | undefined;

    constructor(private pixel: WebtrekkSmartPixelAngular) {
    }

    ngAfterContentInit() {
        if (this.wtAdvancedData) {
            this.pixel.advanced(this.wtAdvancedData);
        }

        if (this.wtCampaignData) {
            this.pixel.campaign(this.wtCampaignData);
        }

        if (this.wtEngageData) {
            this.pixel.engage(this.wtEngageData);
        }

        if (this.wtCustomerData) {
            this.pixel.customer(
                this.wtCustomerData && this.wtCustomerData.id ? this.wtCustomerData.id : this.wtCustomerData,
                this.wtCustomerData,
                this.wtCustomerData.validation);
        }

        if (this.wtInitData) {
            this.pixel.init(this.wtInitData);
        }

        if (this.wtOrderData) {
            this.pixel.order(this.wtOrderData);
        }

        if (this.wtPageData) {
            this.pixel.page(
                this.wtPageData && this.wtPageData.name ? this.wtPageData.name : this.wtPageData,
                this.wtPageData
            );
        }

        if (this.wtProductData) {
            this.pixel.product(
                this.wtProductData && this.wtProductData.action ? this.wtProductData.action : 'view',
                this.wtProductData
            );
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
