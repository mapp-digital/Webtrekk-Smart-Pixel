import {Injectable} from '@angular/core';
import {
    WebtrekkActionProps, WebtrekkAdvancedProps, WebtrekkCampaignProps,
    WebtrekkCustomerProps, WebtrekkInitProps, WebtrekkOrderProps,
    WebtrekkPageProps, WebtrekkProductProps, WebtrekkSessionProps,
    WebtrekkEngageProps, WebtrekkProductStatus
} from './Directives/DataTypes';
import wtSmart, {SmartPixel} from '@webtrekk-smart-pixel/core';

let pixel_: SmartPixel;

const getWindow_ = (): Window | null => {
    return ((typeof window !== 'undefined') ? window : null);
};

const getDocument_ = (): Document | null => {
    return ((typeof window !== 'undefined' && typeof window.document !== 'undefined') ? window.document : null);
};

const init_ = (): void => {
    const window_: Window | null = getWindow_();
    const document_: Document | null = getDocument_();

    if (window_ !== null && document_ !== null) {
        pixel_ = wtSmart.use(window_, document_);
        // @ts-ignore
        window_['wtSmart'] = pixel_;
        window_['wtSmart']['_ps'](1, '###VERSION###');
    }
};

@Injectable()
export class WebtrekkSmartPixelAngular {
    call(call: (wtSmart: SmartPixel) => void): void {
        if (!pixel_) {
            init_();
        }

        if (pixel_) {
            pixel_.push(call);
        }
    }

    init(data: WebtrekkInitProps): void {
        this.call((pix) => {
            pix.init.add(data);
        });
    }

    advanced(data: WebtrekkAdvancedProps): void {
        this.call((pix) => {
            pix.advanced.add(data);
        });
    }

    page(name: string | WebtrekkPageProps, data?: WebtrekkPageProps): void {
        this.call((pix) => {
            if (typeof name === 'string') {
                pix.page.data.add(name, data);
            }
            else {
                pix.page.data.add(name);
            }
        });
    }

    action(name: string | WebtrekkActionProps, data?: WebtrekkActionProps): void {
        this.call((pix) => {
            if (typeof name === 'string') {
                pix.action.data.add(name, data);
            }
            else {
                pix.action.data.add(name);
            }
        });
    }

    session(data: WebtrekkSessionProps): void {
        this.call((pix) => {
            pix.session.data.add(data);
        });
    }

    campaign(data: WebtrekkCampaignProps): void {
        this.call((pix) => {
            pix.campaign.data.add(data);
        });
    }

    engage(data: WebtrekkEngageProps): void {
        this.call((pix) => {
            pix.engage.data.add(data);
        });
    }

    customer(id: string | WebtrekkCustomerProps, data?: WebtrekkCustomerProps, validation?: boolean): void {
        this.call((pix) => {
            if (typeof id === 'string') {
                pix.customer.data.add(id, data, validation);
            }
            else {
                pix.customer.data.add(id);
            }
        });
    }

    product(action: WebtrekkProductStatus, data: WebtrekkProductProps): void {
        this.call((pix) => {
            const method = (action === 'view' || action === 'basket') ? 'set' : 'add';
            // @ts-ignore
            pix.product[action].data[method]([data]);
        });
    }

    products(action: WebtrekkProductStatus, data: WebtrekkProductProps[]): void {
        this.call((pix) => {
            const method = (action === 'view' || action === 'basket') ? 'set' : 'add';
            // @ts-ignore
            pix.product[action].data[method](data);
        });
    }

    order(data: WebtrekkOrderProps): void {
        this.call((pix) => {
            pix.order.data.add(data);
        });
    }

    extension(extension: string, action?: string, config?: any): void {
        if (!extension) {
            return;
        }

        if (!action) {
            action = 'activate';
        }

        this.call((pix) => {
            // @ts-ignore
            pix.extension[extension][action](config);
        });
    }

    track(keepData?: boolean): void {
        this.call((pix) => {
            pix.track(keepData);
        });
    }

    trackPage(keepData?: boolean): void {
        this.call((pix) => {
            pix.trackPage(keepData);
        });
    }

    trackAction(keepData?: boolean): void {
        this.call((pix) => {
            pix.trackAction(keepData);
        });
    }
}
