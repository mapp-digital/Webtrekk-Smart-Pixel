import WebtrekkSmartpixelVue from '../src/index';
import {SmartPixel} from '@webtrekk-smart-pixel/core';

type NumberOrString = number | string;
type DataObject = {
    [i in NumberOrString]: string;
};

type WebtrekkInitCookie = '1' | '3';
type WebtrekkProductStatus = 'view' | 'list' | 'basket' | 'confirmation';
type WebtrekkTeaserType = 'view' | 'click' | 'product';
type WebtrekkTeaserGoal = 'order' | 'goal' | 'both';
type WebtrekkContentEngagementSendContentEngagement = 0 | 1 | 2;
type WebtrekkInitPropDomainList = string | RegExp;
type WebtrekkInitPropDomain = string | RegExp | WebtrekkInitPropDomainList[];

type WebtrekkAdvancedPropSendViaServer = {
    activated?: boolean;
    serverDomain?: string;
    serverPath?: string;
    droppedRequests?: NumberOrString;
    blacklist?: string[];
}

type WebtrekkAdvancedPropRequestQueue = {
    activated?: boolean;
    ttl?: NumberOrString;
    resendInterval?: NumberOrString;
    size?: NumberOrString;
}

type WebtrekkAdvancedPropUserIdentification = {
    enableOptOut?: boolean;
    enableAnonymousFunction?: boolean;
    anonymousOptIn?: boolean;
    optOutCookieName?: string;
    anonymousCookieName?: string;
    suppressParameter?: string[];
}

interface WebtrekkInitProps {
    trackId?: string;
    trackDomain?: string;
    domain?: WebtrekkInitPropDomain;
    cookie?: WebtrekkInitCookie;
}

interface WebtrekkAdvancedProps {
    secureCookie?: boolean;
    optOutName?: string;
    requestObfuscation?: boolean;
    execCDB?: boolean;
    useCDBCache?: boolean;
    sendViaSDK?: boolean;
    sendViaServer?: WebtrekkAdvancedPropSendViaServer;
    useHashForDefaultPageName?: boolean;
    useParamsForDefaultPageName?: string[];
    requestQueue?: WebtrekkAdvancedPropRequestQueue;
    userIdentification?: WebtrekkAdvancedPropUserIdentification;
}

interface WebtrekkCampaignProps {
    id?: string;
    mediaCode?: string[];
    oncePerSession?: boolean;
    parameter?: DataObject;
}

interface WebtrekkCustomerProps {
    id?: string;
    email?: string;
    emailRID?: string;
    emailOptin?: boolean;
    firstName?: string;
    lastName?: string;
    telephone?: string;
    gender?: NumberOrString;
    birthday?: string;
    country?: string;
    city?: string;
    postalCode?: string;
    street?: string;
    streetNumber?: string;
    validation?: boolean;
    category?: DataObject;
}

interface WebtrekkOrderProps {
    value?: NumberOrString;
    id?: string;
    currency?: string;
    couponValue?: NumberOrString;
    paymentMethod?: string;
    shippingService?: string;
    shippingSpeed?: string;
    shippingCosts?: NumberOrString;
    grossMargin?: NumberOrString;
    orderStatus?: string;
    parameter?: DataObject;
}

interface WebtrekkPageProps {
    name?: string;
    search?: string;
    numberSearchResults?: NumberOrString;
    errorMessages?: string;
    paywall?: boolean;
    articleTitle?: string;
    contentTags?: string;
    title?: string;
    type?: string;
    length?: string;
    daysSincePublication?: NumberOrString;
    testVariant?: string;
    testExperiment?: string;
    parameter?: DataObject;
    category?: DataObject;
    goal?: DataObject;
}

interface WebtrekkActionProps {
    name?: string;
    parameter?: DataObject;
    goal?: DataObject;
}

interface WebtrekkProductProps {
    id: string;
    action?: WebtrekkProductStatus;
    cost?: NumberOrString;
    quantity?: NumberOrString;
    variant?: string;
    soldOut?: boolean;
    parameter?: DataObject;
    category?: DataObject;
}

interface WebtrekkSessionProps {
    loginStatus?: string;
    parameter?: DataObject;
}

interface WebtrekkTeaserProps {
    selector?: string | HTMLElement;
    name: string;
    rank?: string;
    content?: string;
    variant?: string;
    seen?: boolean;
    type?: WebtrekkTeaserType;
    goal?: WebtrekkTeaserGoal;
    value?: string;
}

interface WebtrekkTeaserConfig {
    viewPercent?: number;
    viewTime?: number;
    attribution?: "first" | "last" | "all";
    maxSendTeasers?: {
        session?: number;
        page?: number;
    };
    clearConversions?: boolean;
    autoEngagements?: boolean;
}

interface WebtrekkProductListConfig {
    viewPercent?: number;
    viewTime?: number;
    sampling?: number;
    maxSendProducts?: {
        session?: number;
        page?: number;
    };
    sendMultipleProductViews?: boolean;
}

interface WebtrekkContentEngagementConfig {
    selector?: string | HTMLElement;
    name: string;
    percentageStepsInAnalytics?: NumberOrString;
    sendContentEngagement?: WebtrekkContentEngagementSendContentEngagement;
    percentageReached?: NumberOrString;
    secondsReached?: NumberOrString;
    largeBrowserResolution?: NumberOrString;
    largeBrowserSeconds?: NumberOrString;
    mediumBrowserResolution?: NumberOrString;
    mediumBrowserSeconds?: NumberOrString;
    smallBrowserResolution?: NumberOrString;
    smallBrowserSeconds?: NumberOrString;
}

interface WebtrekkProductListProps {
    selector?: string | HTMLElement;
    id: string;
    position: NumberOrString;
    cost?: NumberOrString;
    quantity?: NumberOrString;
    variant?: string;
    soldOut?: boolean;
    category?: DataObject;
    parameter?: DataObject;
}

interface WebtrekkContentEngagementProps {
    selector: string | HTMLElement;
    name: string;
    percentageStepsInAnalytics: number;
    sendContentEngagement: WebtrekkContentEngagementSendContentEngagement;
    percentageReached: number;
    secondsReached: number;
    largeBrowserResolution: number;
    largeBrowserSeconds: number;
    mediumBrowserResolution: number;
    mediumBrowserSeconds: number;
    smallBrowserResolution: number;
    smallBrowserSeconds: number;
}

interface Webtrekk {
    deactivateAutoTracking: boolean;
    call(call: (wtSmart: SmartPixel) => void): void;
    init(data: WebtrekkInitProps): void;
    advanced(data: WebtrekkAdvancedProps): void;
    page(data: WebtrekkPageProps): void;
    page(name: string, data?: WebtrekkPageProps): void;
    action(data: WebtrekkActionProps): void;
    action(name: string, data?: WebtrekkActionProps): void;
    session(data: WebtrekkSessionProps): void;
    campaign(data: WebtrekkCampaignProps): void;
    customer(data: WebtrekkCustomerProps): void;
    customer(id: string, data?: WebtrekkCustomerProps, validation?: boolean): void;
    product(action: WebtrekkProductStatus, data: WebtrekkProductProps): void;
    products(action: WebtrekkProductStatus, data: WebtrekkProductProps[]): void;
    order(data: WebtrekkOrderProps): void;
    extension(extension: string, action?: string, config?: any): void;
    track(keepData?: boolean): void;
    trackPage(keepData?: boolean): void;
    trackAction(keepData?: boolean): void;
    clear(): void;
}

interface Router {
    beforeResolve: (to: any) => void;
    afterEach: (guard: any) => void;
}

export type WebtrekkSmartpixelVueOptions = WebtrekkInitProps &
    WebtrekkAdvancedProps & {
        activateLinkTracking?: boolean;
        activateAutoTracking?: Router;
        activateTeaserTracking?: boolean | WebtrekkTeaserConfig;
        activateProductListTracking?: boolean | WebtrekkProductListConfig;
        activateContentEngagement?: boolean | WebtrekkContentEngagementConfig;
    };

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $webtrekk: Webtrekk;
    }
}

export default WebtrekkSmartpixelVue;