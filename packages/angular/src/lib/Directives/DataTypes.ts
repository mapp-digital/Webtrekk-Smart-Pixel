type NumberOrString = number | string;
type StringOrRegex = string | RegExp;
type DataObject = {
    [i in NumberOrString]: string;
};

type WebtrekkInitCookie = '1' | '3';
export type WebtrekkProductStatus = 'list' | 'view' | 'basket' | 'addToCart' | 'deleteFromCart' | 'checkout' | 'confirmation' | 'addToWishlist' | 'deleteFromWishlist';
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
    blacklist?: StringOrRegex[];
}

type WebtrekkAdvancedPropRequestQueue = {
    activated?: boolean;
    ttl?: NumberOrString;
    resendInterval?: NumberOrString;
    size?: NumberOrString;
    retries?: NumberOrString;
    retriesOption?: NumberOrString;
}

type WebtrekkAdvancedPropRequestLimit = {
    activated?: boolean;
    amount?: NumberOrString;
    duration?: NumberOrString;
}

type WebtrekkAdvancedPropUserIdentification = {
    enableOptOut?: boolean;
    enableAnonymousFunction?: boolean;
    anonymousOptIn?: boolean;
    optOutCookieName?: string;
    anonymousCookieName?: string;
    suppressParameter?: string[];
    temporarySessionId?: string;
    saveTemporarySessionId?: boolean;
}

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
    forceOldEverId?: boolean;
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
    selector?: string | HTMLElement,
    shadowRoot?: string;
    name: string,
    rank?: string,
    content?: string,
    variant?: string,
    seen?: boolean,
    type?: WebtrekkTeaserType,
    goal?: WebtrekkTeaserGoal,
    value?: string
}

export interface WebtrekkProductListProps {
    selector?: string | HTMLElement,
    shadowRoot?: string;
    id: string,
    position: NumberOrString,
    cost?: NumberOrString,
    quantity?: NumberOrString,
    variant?: string,
    soldOut?: boolean,
    category?: DataObject,
    parameter?: DataObject
}

export interface WebtrekkContentEngagementProps {
    selector?: string | HTMLElement;
    shadowRoot?: string;
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
