// Type definitions for @webtrekk-smart-pixel/next
// Project: https://github.com/Webtrekk/Webtrekk-Smart-Pixel/tree/master/packages/react/next
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import {SmartPixel} from '@webtrekk-smart-pixel/core';

type NumberOrString = number | string;
type DataObject = {
    [i in NumberOrString]: string;
};

type WebtrekkInitCookie = '1' | '3';
type WebtrekkProductStatus = 'list' | 'view' | 'basket' | 'addToCart' | 'deleteFromCart' | 'checkout' | 'confirmation' | 'addToWishlist' | 'deleteFromWishlist';
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
}

interface WebtrekkAutoTrackingProps {
    trackId: string;
    trackDomain: string;
    activateAutoTracking?: boolean;
    router?: any;
    activateActions?: boolean;
    activateTeaser?: boolean;
    activateProductList?: boolean;
    activateContentEngagement?: boolean;
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
    requestLimit?: WebtrekkAdvancedPropRequestLimit;
    userIdentification?: WebtrekkAdvancedPropUserIdentification;
}

interface WebtrekkCampaignProps {
    id?: string;
    mediaCode?: string[];
    oncePerSession?: boolean;
    parameter?: DataObject;
    sendInstantly?: boolean;
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
    sendInstantly?: boolean;
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
    sendInstantly?: boolean;
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
    sendInstantly?: boolean;
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
    sendInstantly?: boolean;
}

interface WebtrekkSessionProps {
    loginStatus?: string;
    parameter?: DataObject;
    sendInstantly?: boolean;
}

interface WebtrekkTeaserProps {
    selector?: string | HTMLElement,
    name: string,
    rank?: string,
    content?: string,
    variant?: string,
    seen?: boolean,
    type?: WebtrekkTeaserType,
    goal?: WebtrekkTeaserGoal,
    value?: string
}

interface WebtrekkProductListProps {
    selector?: string | HTMLElement,
    id: string,
    position: NumberOrString,
    cost?: NumberOrString,
    quantity?: NumberOrString,
    variant?: string,
    soldOut?: boolean,
    category?: DataObject,
    parameter?: DataObject
}

interface WebtrekkContentEngagementProps {
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

interface WebtrekkExtensionProps {
    name: string;
    action?: string;
    config?: any;
}

interface WebtrekkReact {
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
}

export const WebtrekkAutoTracking: React.ComponentClass<WebtrekkAutoTrackingProps>;
export const WebtrekkInitData: React.ComponentClass<WebtrekkInitProps>;
export const WebtrekkAdvancedData: React.ComponentClass<WebtrekkAdvancedProps>;
export const WebtrekkCampaignData: React.ComponentClass<WebtrekkCampaignProps>;
export const WebtrekkCustomerData: React.ComponentClass<WebtrekkCustomerProps>;
export const WebtrekkOrderData: React.ComponentClass<WebtrekkOrderProps>;
export const WebtrekkPageData: React.ComponentClass<WebtrekkPageProps>;
export const WebtrekkProductData: React.ComponentClass<WebtrekkProductProps>;
export const WebtrekkSessionData: React.ComponentClass<WebtrekkSessionProps>;
export const WebtrekkTeaser: React.ComponentClass<WebtrekkTeaserProps & React.HTMLProps<HTMLElement>>;
export const WebtrekkProductList: React.ComponentClass<WebtrekkProductListProps & React.HTMLProps<HTMLElement>>;
export const WebtrekkContentEngagement: React.ComponentClass<WebtrekkContentEngagementProps & React.HTMLProps<HTMLElement>>;
export const WebtrekkExtension: React.ComponentClass<WebtrekkExtensionProps>;
export const WebtrekkSmartPixelReact: WebtrekkReact;

export function webtrekkMiddleware(custom?: {
    [i: string]: (state: any, action: any, value: any) => void;
}): (store: any) => (next: (action?: any) => any) => (action: any) => void;

export function webtrekkReducer(custom?: {
    [i: string]: (state: any, action: any, value: any) => void;
}): (reducer: (...args: any[]) => any) => any;
