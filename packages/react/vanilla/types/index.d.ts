// Type definitions for webtrekk-smart-pixel-react 1.0.0
// Project: https://github.com/Webtrekk/Webtrekk-Smart-Pixel-React
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import * as Redux from 'redux';
import * as wtSmart from './../../../core';

declare interface DataObject {
    [i: number]: string;
}

declare enum WebtrekkInitCookie {
    First = '1',
    Third = '3'
}

declare enum WebtrekkProductStatus {
    List = 'list',
    View = 'view',
    Basket = 'basket',
    Confirmation = 'confirmation'
}

declare enum WebtrekkTeaserType {
    View = 'view',
    Click = 'click',
    Product = 'product'
}

declare enum WebtrekkTeaserGoal {
    Order = 'order',
    Goal = 'goal',
    Both = 'both'
}

declare enum WebtrekkContentEngagementSendContentEngagement {
    Zero = 0,
    One = 1,
    Two = 2
}

declare interface WebtrekkAutoTrackingProps {
    trackId: string,
    trackDomain: string,
    activateActions?: boolean,
    activateTeaser?: boolean,
    activateProductList?: boolean,
    activateContentEngagement?: boolean
}

declare interface WebtrekkInitProps {
    trackId: string,
    trackDomain: string,
    domain?: string[],
    cookie?: WebtrekkInitCookie
}

declare interface WebtrekkAdvancedProps {
    secureCookie?: boolean,
    optOutName?: string,
    requestObfuscation?: boolean,
    execCDB?: boolean,
    useCDBCache?: boolean,
    sendViaSDK?: boolean,
    sendViaServer?: {
        activated?: boolean,
        serverDomain?: string,
        serverPath?: string,
        droppedRequests?: number,
        blacklist?: string[]
    },
    useHashForDefaultPageName?: boolean,
    useParamsForDefaultPageName?: string[],
    requestQueue?: {
        activated?: boolean,
        ttl?: number,
        resendInterval?: number,
        size?: number
    }
}

declare interface WebtrekkCampaignProps {
    id: string,
    mediaCode?: string[],
    oncePerSession?: boolean,
    parameter?: DataObject
}

declare interface WebtrekkCustomerProps {
    id: string,
    email?: string,
    emailRID?: string,
    emailOptin?: boolean,
    firstName?: string,
    lastName?: string,
    telephone?: string,
    gender?: number,
    birthday?: string,
    country?: string,
    city?: string,
    postalCode?: string,
    street?: string,
    streetNumber?: string,
    validation?: boolean,
    category?: DataObject
}

declare interface WebtrekkOrderProps {
    value: number,
    id?: string,
    currency?: string,
    couponValue?: number,
    paymentMethod?: string,
    shippingService?: string,
    shippingSpeed?: string,
    shippingCosts?: number,
    grossMargin?: number,
    orderStatus?: string,
    parameter?: DataObject
}

declare interface WebtrekkPageProps {
    name?: string,
    search?: string,
    numberSearchResults?: number,
    errorMessages?: string,
    paywall?: boolean,
    articleTitle?: string,
    contentTags?: string,
    title?: string,
    type?: string,
    length?: string,
    daysSincePublication?: number,
    testVariant?: string,
    testExperiment?: string,
    parameter?: DataObject,
    category?: DataObject,
    goal?: DataObject
}

declare interface WebtrekkProductProps {
    id: string,
    action: WebtrekkProductStatus,
    cost?: number,
    quantity?: number,
    variant?: string,
    soldOut?: boolean,
    parameter?: DataObject,
    category?: DataObject
}

declare interface WebtrekkSessionProps {
    loginStatus: string,
    parameter: DataObject
}

declare interface WebtrekkTeaserProps {
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

declare interface WebtrekkProductListProps {
    selector?: string | HTMLElement,
    id: string,
    position: number,
    cost?: number,
    quantity?: number,
    variant?: string,
    soldOut?: boolean,
    category?: DataObject,
    parameter?: DataObject
}

declare interface WebtrekkContentEngagementProps {
    selector: string | HTMLElement,
    name: string,
    percentageStepsInAnalytics: number,
    sendContentEngagement: WebtrekkContentEngagementSendContentEngagement,
    percentageReached: number,
    secondsReached: number,
    largeBrowserResolution: number,
    largeBrowserSeconds: number,
    mediumBrowserResolution: number,
    mediumBrowserSeconds: number,
    smallBrowserResolution: number,
    smallBrowserSeconds: number
}

declare interface WebtrekkExtensionProps {
    name: string,
    action: string,
    config?: any
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

export interface WebtrekkSmartPixelReact {
    call: (call: (wtSmart: wtSmart) => void) => void,
    init: (data: WebtrekkInitProps) => void,
    advanced: (data: WebtrekkAdvancedProps) => void,
    page: (name: string, data?: WebtrekkPageProps) => void,
    action: () => void,
    session: (data: WebtrekkSessionProps) => void,
    campaign: (data: WebtrekkCampaignProps) => void,
    customer: (id: string, data?: WebtrekkCustomerProps, validation?: boolean) => void,
    product: (action: WebtrekkProductStatus, data: WebtrekkProductProps) => void,
    products: (action: WebtrekkProductStatus, data: WebtrekkProductProps[]) => void,
    order: (data: WebtrekkOrderProps) => void,
    extension: (extension: string, action?: string, config?: any) => void,
    track: () => void,
    trackPage: () => void,
    trackAction: () => void
}

export function webtrekkMiddleware(custom: {
    [i: string]: (state: any, action: Object) => void;
}): (store: Redux.Store) => (next: () => any) => (action: Object) => void;

export function webtrekkReducer(custom: {
    [i: string]: (state: any, action: Object) => void;
}): (reducer: () => {}) => React.useCallback;
