import { WebtrekkActionProps, WebtrekkAdvancedProps, WebtrekkCampaignProps, WebtrekkCustomerProps, WebtrekkInitProps, WebtrekkOrderProps, WebtrekkPageProps, WebtrekkProductProps, WebtrekkSessionProps, WebtrekkProductStatus } from './Directives/DataTypes';
import { SmartPixel } from '@webtrekk-smart-pixel/core';
export declare class WebtrekkSmartPixelAngular {
    call(call: (wtSmart: SmartPixel) => void): void;
    init(data: WebtrekkInitProps): void;
    advanced(data: WebtrekkAdvancedProps): void;
    page(name: string | WebtrekkPageProps, data?: WebtrekkPageProps): void;
    action(name: string | WebtrekkActionProps, data?: WebtrekkActionProps): void;
    session(data: WebtrekkSessionProps): void;
    campaign(data: WebtrekkCampaignProps): void;
    customer(id: string | WebtrekkCustomerProps, data?: WebtrekkCustomerProps, validation?: boolean): void;
    product(action: WebtrekkProductStatus, data: WebtrekkProductProps): void;
    products(action: WebtrekkProductStatus, data: WebtrekkProductProps[]): void;
    order(data: WebtrekkOrderProps): void;
    extension(extension: string, action?: string, config?: any): void;
    track(keepData?: boolean): void;
    trackPage(keepData?: boolean): void;
    trackAction(keepData?: boolean): void;
}
