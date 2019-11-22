interface DataObject {
    [i: number]: string;
}

export interface WebtrekkActionProps {
    name?: string,
    parameter?: DataObject,
    goal?: DataObject
}

export interface WebtrekkInitProps {
    trackId: string,
    trackDomain: string,
    domain?: string | string[],
    cookie?: string
}

export interface WebtrekkAdvancedProps {
    secureCookie?: boolean,
    optOutName?: string,
    requestObfuscation?: boolean,
    execCDB?: boolean,
    useCDBCache?: boolean,
    useHashForDefaultPageName?: boolean,
    useParamsForDefaultPageName?: string[],
    requestQueue?: {
        activated?: boolean,
        ttl?: number,
        resendInterval?: number,
        size?: number
    }
}

export interface WebtrekkCampaignProps {
    id: string,
    mediaCode?: string[],
    oncePerSession?: boolean,
    parameter?: DataObject
}

export interface WebtrekkCustomerProps {
    id?: string,
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

export interface WebtrekkOrderProps {
    value: number | string,
    id?: string,
    currency?: string,
    couponValue?: number | string,
    paymentMethod?: string,
    shippingService?: string,
    shippingSpeed?: string,
    shippingCosts?: number | string,
    grossMargin?: number | string,
    orderStatus?: string,
    parameter?: DataObject
}

export interface WebtrekkPageProps {
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

export interface WebtrekkProductProps {
    id: string,
    action?: string,
    cost?: number | string,
    quantity?: number | string,
    variant?: string,
    soldOut?: boolean,
    parameter?: DataObject,
    category?: DataObject
}

export interface WebtrekkSessionProps {
    loginStatus?: string,
    parameter?: DataObject
}

export interface WebtrekkTeaserProps {
    selector?: string | HTMLElement,
    name: string,
    rank?: string,
    content?: string,
    variant?: string,
    seen?: boolean,
    type?: string,
    goal?: string,
    value?: string
}

export interface WebtrekkProductListProps {
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

export interface WebtrekkContentEngagementProps {
    selector?: string | HTMLElement,
    name?: string,
    percentageStepsInAnalytics?: number,
    sendContentEngagement?: number,
    percentageReached?: number,
    secondsReached?: number,
    largeBrowserResolution?: number,
    largeBrowserSeconds?: number,
    mediumBrowserResolution?: number,
    mediumBrowserSeconds?: number,
    smallBrowserResolution?: number,
    smallBrowserSeconds?: number
}

export interface WebtrekkExtensionProps {
    name: string,
    action: string,
    config?: any
}
