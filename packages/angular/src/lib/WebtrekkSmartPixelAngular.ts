import {Injectable} from '@angular/core';
import {
    WebtrekkActionProps, WebtrekkAdvancedProps, WebtrekkCampaignProps,
    WebtrekkCustomerProps, WebtrekkInitProps, WebtrekkOrderProps,
    WebtrekkPageProps, WebtrekkProductProps, WebtrekkSessionProps
} from './Directives/DataTypes';
import {WebtrekkSmartPixelConfig} from './WebtrekkSmartPixelConfig';
import * as wtSmart from '@webtrekk-smart-pixel/core';

var pixel_: wtSmart = null;

const getWindow_ = (): Window => {
    return ((typeof window !== 'undefined') ? window : null);
};

const getDocument_ = (): Document => {
    return ((typeof window !== 'undefined' && typeof window.document !== 'undefined') ? window.document : null);
};

const emptyObject = {};
const init_ = (): void => {
    var window_: Window = getWindow_();
    var document_: Document = getDocument_();

    if (window_ !== null && document_ !== null) {
        pixel_ = wtSmart.use(window_, document_);
        window_['wtSmart'] = pixel_;
    }
};

@Injectable()
export class WebtrekkSmartPixelAngular {
    call(call: (wtSmart: wtSmart) => void): void {
        if (pixel_ === null) {
            init_();
        }

        if (pixel_ !== null) {
            pixel_.push(call);
        }
    };

    init(data: WebtrekkSmartPixelConfig | WebtrekkInitProps = {trackId: '', trackDomain: ''}): void {
        this.call((pix) => {
            pix.init.add(data);
        });
    };

    advanced(data: WebtrekkAdvancedProps = emptyObject): void {
        this.call((pix) => {
            pix.advanced.add(data);
        });
    };

    page(name: string = '', data: WebtrekkPageProps = emptyObject): void {
        this.call((pix) => {
            pix.page.data.add(name, data);
        });
    };

    action(data: WebtrekkActionProps = emptyObject): void {
        this.call((pix) => {
            pix.action.data.add(data);
        });
    };

    session(data: WebtrekkSessionProps = emptyObject): void {
        this.call((pix) => {
            pix.session.data.add(data);
        });
    };

    campaign(data: WebtrekkCampaignProps = {id: ''}): void {
        this.call((pix) => {
            pix.campaign.data.add(data);
        });
    };

    customer(id: string = '', data: WebtrekkCustomerProps = emptyObject, validation: boolean = false): void {
        this.call((pix) => {
            pix.customer.data.add(id, data, validation);
        });
    };

    product(action: string = 'view', data: WebtrekkProductProps = {id: ''}): void {
        this.call((pix) => {
            var method = (action === 'view' || action === 'basket') ? 'set' : 'add';
            pix.product[action].data[method]([data]);
        });
    };

    products(action: string = 'view', data: WebtrekkProductProps[] = []): void {
        this.call((pix) => {
            var method = (action === 'view' || action === 'basket') ? 'set' : 'add';
            pix.product[action].data[method](data);
        });
    };

    order(data: WebtrekkOrderProps = {value: ''}): void {
        this.call((pix) => {
            pix.order.data.add(data);
        });
    };

    extension(extension: string = '', action: string = 'activate', config: any = emptyObject): void {
        if (!extension) {
            return;
        }

        this.call((pix) => {
            pix.extension[extension][action](config);
        });
    };

    track(keepData: boolean = false): void {
        this.call((pix) => {
            pix.track(keepData);
        });
    };

    trackPage(keepData: boolean = false): void {
        this.call((pix) => {
            pix.trackPage(keepData);
        });
    };

    trackAction(keepData: boolean = false): void {
        this.call((pix) => {
            pix.trackAction(keepData);
        });
    };
}
