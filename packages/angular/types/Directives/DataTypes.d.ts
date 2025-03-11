declare type NumberOrString = number | string;
declare type DataObject = {
    [i in NumberOrString]: string;
};
declare type WebtrekkInitCookie = '1' | '3';
export declare type WebtrekkProductStatus = 'view' | 'list' | 'basket' | 'confirmation';
declare type WebtrekkTeaserType = 'view' | 'click' | 'product';
declare type WebtrekkTeaserGoal = 'order' | 'goal' | 'both';
declare type WebtrekkContentEngagementSendContentEngagement = 0 | 1 | 2;
declare type WebtrekkInitPropDomainList = string | RegExp;
declare type WebtrekkInitPropDomain = string | RegExp | WebtrekkInitPropDomainList[];
declare type WebtrekkAdvancedPropSendViaServer = {
    activated?: boolean;
    serverDomain?: string;
    serverPath?: string;
    droppedRequests?: NumberOrString;
    blacklist?: string[];
};
declare type WebtrekkAdvancedPropRequestQueue = {
    activated?: boolean;
    ttl?: NumberOrString;
    resendInterval?: NumberOrString;
    size?: NumberOrString;
};
declare type WebtrekkAdvancedPropRequestLimit = {
    activated?: boolean;
    amount?: NumberOrString;
    duration?: NumberOrString;
};
declare type WebtrekkAdvancedPropUserIdentification = {
    enableOptOut?: boolean;
    enableAnonymousFunction?: boolean;
    anonymousOptIn?: boolean;
    optOutCookieName?: string;
    anonymousCookieName?: string;
    suppressParameter?: string[];
};
export interface WebtrekkActionProps {
    name?: string;
    parameter?: DataObject;
    goal?: DataObject;
}
export interface WebtrekkInitProps {
    trackId?: string;
    trackDomain?: string;
    domain?: WebtrekkInitPropDomain;
    cookie?: WebtrekkInitCookie;
}
export interface WebtrekkAdvancedProps {
    secureCookie?: boolean;
    optOutName?: string;
    requestObfuscation?: boolean;
    registerObfuscation?: boolean;
    /**
     * @deprecated
     */
    execCDB?: boolean;
    /**
     * @deprecated
     */
    useCDBCache?: boolean;
    sendViaSDK?: boolean;
    productMerge?: boolean;
    tabBrowsing?: boolean;
    preRendering?: boolean;
    sendViaServer?: WebtrekkAdvancedPropSendViaServer;
    useHashForDefaultPageName?: boolean;
    useParamsForDefaultPageName?: string[];
    requestQueue?: WebtrekkAdvancedPropRequestQueue;
    requestLimit?: WebtrekkAdvancedPropRequestLimit;
    userIdentification?: WebtrekkAdvancedPropUserIdentification;
}
export interface WebtrekkCampaignProps {
    id?: string;
    mediaCode?: string[];
    oncePerSession?: boolean;
    parameter?: DataObject;
}
export interface WebtrekkCustomerProps {
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
    registrationEmail?: string;
    registrationGroupId?: string;
    registrationMode?: string;
    registrationFirstName?: string;
    registrationLastName?: string;
    registrationGender?: string;
    registrationTitle?: string;
    registrationOptin?: boolean;
    category?: DataObject;
}
export interface WebtrekkEngageProps {
    attributes?: {
        [i in NumberOrString]: NumberOrString;
    };
    eventName?: string;
    eventId?: number;
    eventSegmentation?: string;
}
export interface WebtrekkOrderProps {
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
export interface WebtrekkPageProps {
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
export interface WebtrekkProductProps {
    id: string;
    action?: WebtrekkProductStatus;
    cost?: NumberOrString;
    quantity?: NumberOrString;
    variant?: string;
    soldOut?: boolean;
    parameter?: DataObject;
    category?: DataObject;
    sendInstantly?: boolean;
}
export interface WebtrekkSessionProps {
    loginStatus?: string;
    parameter?: DataObject;
}
export interface WebtrekkTeaserProps {
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
export interface WebtrekkProductListProps {
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
export interface WebtrekkContentEngagementProps {
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
export interface WebtrekkExtensionProps {
    name: string;
    action?: string;
    config?: any;
}
export {};
