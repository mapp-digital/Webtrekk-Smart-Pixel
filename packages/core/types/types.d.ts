type NumberOrString = number | string;
type DataObject = {
    [i in NumberOrString]: string;
};

/* **********************************************
 *                  PARAMETER                   *
 ********************************************** */
interface SmartPixelParameter {
    set(data: DataObject): SmartPixelParameter;
    add(data: DataObject): SmartPixelParameter;
    get(): DataObject;
    remove(removeList?: NumberOrString[]): SmartPixelParameter;
}

/* **********************************************
 *                   CATEGORY                   *
 ********************************************** */
interface SmartPixelCategory {
    set(data: DataObject): SmartPixelCategory;
    add(data: DataObject): SmartPixelCategory;
    get(): DataObject;
    remove(removeList?: NumberOrString[]): SmartPixelCategory;
}

/* **********************************************
 *                     GOAL                     *
 ********************************************** */
interface SmartPixelGoal {
    set(data: DataObject): SmartPixelGoal;
    add(data: DataObject): SmartPixelGoal;
    get(): DataObject;
    remove(removeList?: NumberOrString[]): SmartPixelGoal;
}

/* **********************************************
 *                    DEBUG                     *
 ********************************************** */
interface SmartPixelDebug {
    enable(): void;
    disable(): void;
}

/* **********************************************
 *                    INIT                      *
 ********************************************** */
type WebtrekkInitCookie = '1' | '3';
type SmartPixelInitConfigDomainMixed = string | RegExp;
type SmartPixelInitConfigDomain = string | RegExp | SmartPixelInitConfigDomainMixed[];

interface SmartPixelInitAddProps {
    trackId?: string;
    trackDomain?: string;
    domain?: SmartPixelInitConfigDomain;
    cookie?: WebtrekkInitCookie;
}

interface SmartPixelInitSetProps extends SmartPixelInitAddProps {
    trackId: string;
    trackDomain: string;
}

interface SmartPixelInitGetProps {
    trackId: string;
    trackDomain: string;
    domain: SmartPixelInitConfigDomain;
    cookie: WebtrekkInitCookie;
}

interface SmartPixelInit {
    set(data: SmartPixelInitSetProps): SmartPixelInit;
    add(data: SmartPixelInitAddProps): SmartPixelInit;
    get(): SmartPixelInitGetProps;
    remove(removeList?: string[]): SmartPixelInit;
}

/* **********************************************
 *                  ADVANCED                    *
 ********************************************** */
interface SmartPixelAdvancedSendViaServer {
    activated?: boolean;
    serverDomain?: string;
    serverPath?: string;
    droppedRequests?: NumberOrString;
    blacklist?: string[];
}

interface SmartPixelAdvancedRequestQueue {
    activated?: boolean;
    ttl?: NumberOrString;
    resendInterval?: NumberOrString;
    size?:NumberOrString;
    retries?: NumberOrString;
    retriesOption?: NumberOrString;
}

type WebtrekkAdvancedPropRequestLimit = {
    activated?: boolean;
    amount?: NumberOrString;
    duration?: NumberOrString;
}

interface SmartPixelAdvancedUserIdentification {
    enableAnonymousFunction?: boolean;
    anonymousOptIn?: boolean;
    anonymousCookieName?: string;
    suppressParameter?: string[];
    temporarySessionId?: string;
    saveTemporarySessionId?: boolean;
}

interface SmartPixelAdvancedSetProps {
    forceOldEverId?: boolean;
    secureCookie?: boolean;
    optOutName?: string;
    requestObfuscation?: boolean;
    execCDB?: boolean;
    useCDBCache?: boolean;
    sendViaSDK?: boolean;
    sendViaServer?: SmartPixelAdvancedSendViaServer;
    useHashForDefaultPageName?: boolean;
    useParamsForDefaultPageName?: string[];
    requestQueue?: SmartPixelAdvancedRequestQueue;
    requestLimit?: WebtrekkAdvancedPropRequestLimit;
    userIdentification?: SmartPixelAdvancedUserIdentification;
}

interface SmartPixelAdvancedAddProps extends SmartPixelAdvancedSetProps {}

interface SmartPixelAdvancedGetProps {
    forceOldEverId: boolean;
    secureCookie: boolean;
    optOutName: string;
    requestObfuscation: boolean;
    execCDB: boolean;
    useCDBCache: boolean;
    sendViaSDK: boolean;
    sendViaServer: SmartPixelAdvancedSendViaServer;
    useHashForDefaultPageName: boolean;
    useParamsForDefaultPageName: string[];
    requestQueue: SmartPixelAdvancedRequestQueue;
    requestLimit: WebtrekkAdvancedPropRequestLimit;
    userIdentification: SmartPixelAdvancedUserIdentification;
}

interface SmartPixelAdvanced {
    set(data: SmartPixelAdvancedSetProps): SmartPixelAdvanced;
    add(data: SmartPixelAdvancedAddProps): SmartPixelAdvanced;
    get(): SmartPixelAdvancedGetProps;
    remove(removeList?: string[]): SmartPixelAdvanced;
}

/* **********************************************
 *                   ACTION                     *
 ********************************************** */
interface SmartPixelActionAddProps {
    name?: string;
    parameter?: DataObject;
    goal?: DataObject;
}

interface SmartPixelActionSetProps extends SmartPixelActionAddProps {
    name: string;
}

interface SmartPixelActionGetProps {
    name: string;
    parameter: DataObject;
    goal: DataObject;
}

interface SmartPixelActionData {
    set(data: SmartPixelActionSetProps): SmartPixelActionData;
    set(name: string, data?: SmartPixelActionAddProps): SmartPixelActionData;
    add(data: SmartPixelActionAddProps): SmartPixelActionData;
    add(name: string, data?: SmartPixelActionAddProps): SmartPixelActionData;
    get(): SmartPixelActionGetProps;
    remove(removeList?: string[]): SmartPixelActionData;
}

interface SmartPixelAction {
    data: SmartPixelActionData;
    parameter: SmartPixelParameter;
    goal: SmartPixelGoal;
}

/* **********************************************
 *                  CAMPAIGN                    *
 ********************************************** */
interface SmartPixelCampaignSetProps {
    id?: string;
    mediaCode?: string[];
    oncePerSession?: boolean;
    parameter?: DataObject;
}

interface SmartPixelCampaignAddProps extends SmartPixelCampaignSetProps {}

interface SmartPixelCampaignGetProps {
    id: string;
    mediaCode: string[];
    oncePerSession: boolean;
    parameter: DataObject;
}

interface SmartPixelCampaignData {
    set(data: SmartPixelCampaignSetProps): SmartPixelCampaignData;
    add(data: SmartPixelCampaignAddProps): SmartPixelCampaignData;
    get(): SmartPixelCampaignGetProps;
    remove(removeList?: string[]): SmartPixelCampaignData;
}

interface SmartPixelCampaign {
    data: SmartPixelCampaignData;
    parameter: SmartPixelParameter;
}

/* **********************************************
 *                  CUSTOMER                    *
 ********************************************** */
interface SmartPixelCustomerAddProps {
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

interface SmartPixelCustomerSetProps extends SmartPixelCustomerAddProps {
    id: string;
}

interface SmartPixelCustomerGetProps {
    id: string;
    email: string;
    emailRID: string;
    emailOptin: boolean;
    firstName: string;
    lastName: string;
    telephone: string;
    gender: number;
    birthday: string;
    country: string;
    city: string;
    postalCode: string;
    street: string;
    streetNumber: string;
    validation: boolean;
    category: DataObject;
}

interface SmartPixelCustomerData {
    set(data: SmartPixelCustomerSetProps): SmartPixelCustomerData;
    set(id: string, data?: SmartPixelCustomerAddProps, validation?: boolean): SmartPixelCustomerData;
    add(data: SmartPixelCustomerAddProps): SmartPixelCustomerData;
    add(id: string, data?: SmartPixelCustomerAddProps, validation?: boolean): SmartPixelCustomerData;
    get(): SmartPixelCustomerGetProps;
    remove(removeList?: string[]): SmartPixelCustomerData;
}

interface SmartPixelCustomer {
    data: SmartPixelCustomerData;
    category: SmartPixelCategory;
}

/* **********************************************
 *                    ORDER                     *
 ********************************************** */
interface SmartPixelOrderAddProps {
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

interface SmartPixelOrderSetProps extends SmartPixelOrderAddProps {
    value: NumberOrString;
}

interface SmartPixelOrderGetProps {
    value: number;
    id: string;
    currency: string;
    couponValue: number;
    paymentMethod: string;
    shippingService: string;
    shippingSpeed: string;
    shippingCosts: number;
    grossMargin: number;
    orderStatus: string;
    parameter: DataObject;
}

interface SmartPixelOrderData {
    set(data: SmartPixelOrderSetProps): SmartPixelOrderData;
    add(data: SmartPixelOrderAddProps): SmartPixelOrderData;
    get(): SmartPixelOrderGetProps;
    remove(removeList?: string[]): SmartPixelOrderData;
}

interface SmartPixelOrder {
    data: SmartPixelOrderData;
    parameter: SmartPixelParameter;
}

/* **********************************************
 *                    PAGE                      *
 ********************************************** */
interface SmartPixelPageAddProps {
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

interface SmartPixelPageSetProps extends SmartPixelPageAddProps {
    name: string;
}

interface SmartPixelPageGetProps {
    name: string;
    search: string;
    numberSearchResults: number;
    errorMessages: string;
    paywall: boolean;
    articleTitle: string;
    contentTags: string;
    title: string;
    type: string;
    length: string;
    daysSincePublication: number;
    testVariant: string;
    testExperiment: string;
    parameter: DataObject;
    category: DataObject;
    goal: DataObject;
}

interface SmartPixelPageData {
    set(data: SmartPixelPageSetProps): SmartPixelPageData;
    set(name: string, data?: SmartPixelPageAddProps): SmartPixelPageData;
    add(data: SmartPixelPageAddProps): SmartPixelPageData;
    add(name: string, data?: SmartPixelPageAddProps): SmartPixelPageData;
    get(): SmartPixelPageGetProps;
    remove(removeList?: string[]): SmartPixelPageData;
}

interface SmartPixelPage {
    data: SmartPixelPageData;
    parameter: SmartPixelParameter;
    category: SmartPixelCategory;
    goal: SmartPixelGoal;
}

/* **********************************************
 *                  SESSION                     *
 ********************************************** */
interface SmartPixelSessionAddProps {
    loginStatus?: string;
    parameter?: DataObject;
}

interface SmartPixelSessionSetProps extends SmartPixelSessionAddProps {}

interface SmartPixelSessionGetProps {
    loginStatus: string;
    parameter: DataObject;
}

interface SmartPixelSessionData {
    set(data: SmartPixelSessionSetProps): SmartPixelSessionData;
    add(data: SmartPixelSessionAddProps): SmartPixelSessionData;
    get(): SmartPixelSessionGetProps;
    remove(removeList?: string[]): SmartPixelSessionData;
}

interface SmartPixelSession {
    data: SmartPixelSessionData;
    parameter: SmartPixelParameter;
    category: SmartPixelCategory;
    goal: SmartPixelGoal;
}

/* **********************************************
 *                  PRODUCT                     *
 ********************************************** */
interface SmartPixelProductAddedProps {
    id?: string;
    cost?: NumberOrString;
    quantity?: NumberOrString;
    currency?: string;
    variant?: string;
    soldOut?: boolean;
    parameter?: DataObject;
    category?: DataObject;
}

interface SmartPixelProductAddProps extends SmartPixelProductAddedProps {
    id: string;
}

interface SmartPixelProductSetProps extends SmartPixelProductAddProps {}

interface SmartPixelProductGetProps {
    id: string;
    cost: number;
    quantity: number;
    currency: string;
    variant: string;
    soldOut: boolean;
    parameter: DataObject;
    category: DataObject;
}

interface SmartPixelProductAdded {
    add(data: SmartPixelProductAddedProps): SmartPixelProductAdded;
    get(): SmartPixelProductGetProps;
}

interface SmartPixelProductsAdded {
    data: SmartPixelProductAdded;
    parameter: SmartPixelParameter;
    category: SmartPixelCategory;
}

interface SmartPixelProductData {
    products: SmartPixelProductsAdded[];
    set(data: SmartPixelProductSetProps[]): SmartPixelProductData;
    add(data: SmartPixelProductAddProps[]): SmartPixelProductData;
    get(): SmartPixelProductGetProps[];
    remove(removeList?: NumberOrString[]): SmartPixelProductData;
}

interface SmartPixelProduct {
    data: SmartPixelProductData;
    parameter: SmartPixelParameter;
}

interface SmartPixelProductActions {
    list: SmartPixelProduct;
    view: SmartPixelProduct;
    basket: SmartPixelProduct;
    confirmation: SmartPixelProduct;
}

/* **********************************************
 *                    UTILS                     *
 ********************************************** */
interface SmartPixelUtilsBrowser {
    isOpera(): boolean;
    isIE(): boolean;
    isMSIE(): boolean;
    isTrident(): boolean;
    isEdge(): boolean;
    isFirefox(): boolean;
    isSafari(): boolean;
    isChrome(): boolean;
    isPhantom(): boolean;
}

interface SmartPixelUtilsCryptoURL {
    encode(str: string): string;
    decode(str: string): string;
}

interface SmartPixelUtilsCryptoSHA256 {
    encode(str: string): string;
}

interface SmartPixelUtilsCryptoMD5 {
    encode(str: string): string;
}

interface SmartPixelUtilsCrypto {
    URL: SmartPixelUtilsCryptoURL;
    SHA256: SmartPixelUtilsCryptoSHA256;
    MD5: SmartPixelUtilsCryptoMD5;
}

interface SmartPixelUtilsIdentifier {
    everId(newEverId?: string): string;
    cdbeid(): string;
}

interface SmartPixelUtilsEvent {
    register(obj: HTMLElement, evt: string, fn: (evt: Event) => void): void;
    unregister(obj: HTMLElement, evt: string, fn: (evt: Event) => void): void;
}

interface SmartPixelUtilsOptOut {
    /**
     * @deprecated use method getTrackingOptOut
     */
    get(): boolean;
    getTrackingOptOut(): boolean;
    /**
     * @deprecated use method getAnonymousCookie
     */
    getIdentifierOptOut(): boolean;
    getAnonymousCookie(): boolean;
    /**
     * @deprecated use method setTrackingOptOut
     */
    set(duration?: number, callback?: (img: HTMLElement, status: string, duration: number) => void): void;
    setTrackingOptOut(duration?: number, callback?: (img: HTMLElement, status: string, duration: number) => void): void;
    /**
     * @deprecated use method setAnonymousCookie
     */
    setIdentifierOptOut(duration?: number, callback?: (img: HTMLElement, status: string, duration: number) => void): void;
    setAnonymousCookie(duration?: number, callback?: (img: HTMLElement, status: string, duration: number) => void): void;
    deleteTrackingOptOut(): void;
    /**
     * @deprecated use method deleteAnonymousCookie
     */
    deleteIdentifierOptOut(): void;
    deleteAnonymousCookie(): void;
}

interface SmartPixelUtilsIncludeScriptURL {
    src: string;
    required?: boolean;
}

interface SmartPixelUtils {
    browser: SmartPixelUtilsBrowser;
    crypto: SmartPixelUtilsCrypto;
    identifier: SmartPixelUtilsIdentifier;
    event: SmartPixelUtilsEvent;
    optout: SmartPixelUtilsOptOut;
    cookie(name: string): string;
    cookie(name: string, value: string, duration?: number, path?: string, domain?: string, secure?: boolean): boolean;
    image(imageURL: string, callback?: (img: HTMLElement, status: string, duration: number) => void, timeout?: number): void;
    include(scriptURL: string | SmartPixelUtilsIncludeScriptURL[], callback?: () => void): void;
    parameter(parameter: string, url?: string, def?: any): any;
    referrer(): string;
    referrer(referrerURL: string): void;
    url(): string;
    url(urlString: string): void;
}

/* **********************************************
 *                  EXTENSION                   *
 ********************************************** */
type SmartPixelExtensionsTriggerConfigMode = 'page' | 'form' | 'media' | 'action';
type SmartPixelExtensionsTriggerConfigType = 'before' | 'after' | 'ready';

interface SmartPixelExtensionsList {
    [i: string]: any;
}

interface SmartPixelExtensionsTriggerConfigData {
    [i: string]: string;
}

interface SmartPixelExtensionsTriggerConfig {
    mode: SmartPixelExtensionsTriggerConfigMode;
    type: SmartPixelExtensionsTriggerConfigType;
    counter: number;
    data: SmartPixelExtensionsTriggerConfigData;
    instance: SmartPixel;
    utils: SmartPixelUtils;
}

type SmartPixelExtensionProps = {
    [i in NumberOrString]: any;
} & {
    name: string;
    version: string;
    trigger?(config: SmartPixelExtensionsTriggerConfig): void;
    isActivated?(): boolean;
    activate?(): void;
    deactivate?(): void
};

interface SmartPixelExtension {
    length: number;
    push(ext: (wtSmart: SmartPixel) => SmartPixelExtensionProps): SmartPixelExtension;
    get(): SmartPixelExtensionsList;
    remove(extName: string): SmartPixelExtension;
}

/* **********************************************
 *               EXTENSION:ACTION               *
 ********************************************** */
type SmartPixelExtensionActionConfigType = 'link' | 'standard';

interface SmartPixelExtensionActionConfigReplace {
    pattern: RegExp;
    replacement: string;
}

interface SmartPixelExtensionActionSetConfig {
    type: SmartPixelExtensionActionConfigType;
    attribute?: string;
    shadowRoot?: string[];
    parameter?: DataObject;
    extend?: string[];
    replace?: SmartPixelExtensionActionConfigReplace[];
    ignore?: RegExp;
    withHash?: boolean;
    delay?: boolean;
    delayDuration?: number;
    noDelayAttribute?: string;
}

interface SmartPixelExtensionActionGetConfig {
    type: SmartPixelExtensionActionConfigType;
    attribute: string;
    shadowRoot: string[];
    parameter: DataObject;
    extend: string[];
    replace: SmartPixelExtensionActionConfigReplace[];
    ignore: RegExp;
    withHash: boolean;
    delay: boolean;
    delayDuration: number;
    noDelayAttribute: string;
}

interface SmartPixelExtensionAction extends SmartPixelExtensionProps {
    config(): SmartPixelExtensionActionGetConfig;
    config(config: SmartPixelExtensionActionSetConfig): void;
    isActivated(): boolean;
    activate(): void;
    deactivate(): void;
    update(): void;
}

interface SmartPixelExtension {
    action: SmartPixelExtensionAction;
}

/* **********************************************
 *                EXTENSION:CDB                 *
 ********************************************** */
interface SmartPixelExtensionCDB extends SmartPixelExtensionProps {
    setEmail(email: string): void;
    setPhone(phone: string): void;
    setAddress(address: string): void;
    setAndroid(android: string): void;
    setIOS(ios: string): void;
    setWindows(windows: string): void;
    setFacebook(facebook: string): void;
    setTwitter(twitter: string): void;
    setGoogle(google: string): void;
    setLinkedIn(linkedIn: string): void;
    setCriteo(): void;
    setAMP(): void;
    setAdClear(adClearTrackId: string, adClearTrackDomain: string): void;
    setCustom(id: number, custom: string): void;
}

interface SmartPixelExtension {
    cdb: SmartPixelExtensionCDB;
}

/* **********************************************
 *         EXTENSION:CONTENT_ENGAGEMENT         *
 ********************************************** */
interface SmartPixelExtensionContentEngagementSetConfig {
    percentageStepsInAnalytics?: NumberOrString;
    sendContentEngagement?: NumberOrString;
    percentageReached?: NumberOrString;
    secondsReached?: NumberOrString;
    largeBrowserResolution?: NumberOrString;
    largeBrowserSeconds?: NumberOrString;
    mediumBrowserResolution?: NumberOrString;
    mediumBrowserSeconds?: NumberOrString;
    smallBrowserResolution?: NumberOrString;
    smallBrowserSeconds?: NumberOrString;
}

interface SmartPixelExtensionContentEngagementGetConfig {
    percentageStepsInAnalytics: number;
    sendContentEngagement: number;
    percentageReached: number;
    secondsReached: number;
    largeBrowserResolution: number;
    largeBrowserSeconds: number;
    mediumBrowserResolution: number;
    mediumBrowserSeconds: number;
    smallBrowserResolution: number;
    smallBrowserSeconds: number;
}

interface SmartPixelExtensionContentEngagement extends SmartPixelExtensionProps {
    config(config: SmartPixelExtensionContentEngagementSetConfig): void;
    config(): SmartPixelExtensionContentEngagementGetConfig;
    isActivated(): boolean;
    activate(): void;
    deactivate(): void;
}

interface SmartPixelExtension {
    content_engagement: SmartPixelExtensionContentEngagement;
}

/* **********************************************
 *           EXTENSION:COOKIE_CONTROL           *
 ********************************************** */
type SmartPixelExtensionCookieControlConfigAction = '3->3' | '1->3';

interface SmartPixelExtensionCookieControlSetConfig {
    action: SmartPixelExtensionCookieControlConfigAction;
    lifeTime: string;
    duration?: number;
    currentTrackId?: string;
    currentTrackDomain?: string;
    oldTrackId: string;
    oldTrackDomain: string;
}

interface SmartPixelExtensionCookieControlGetConfig {
    action: SmartPixelExtensionCookieControlConfigAction;
    lifeTime: string;
    duration: number;
    currentTrackId: string;
    currentTrackDomain: string;
    oldTrackId: string;
    oldTrackDomain: string;
}

interface SmartPixelExtensionCookieControl extends SmartPixelExtensionProps {
    config(): SmartPixelExtensionCookieControlGetConfig;
    config(config: SmartPixelExtensionCookieControlSetConfig): void;
    isActivated(): boolean;
    activate(): void;
    deactivate(): void;
}

interface SmartPixelExtension {
    cookie_control: SmartPixelExtensionCookieControl;
}

/* **********************************************
 *            EXTENSION:IDENTIFIER              *
 ********************************************** */
interface SmartPixelExtensionIdentifier extends SmartPixelExtensionProps {}

interface SmartPixelExtension {
    identifier: SmartPixelExtensionIdentifier;
}

/* **********************************************
 *           EXTENSION:PAGE_LOAD_TIME           *
 ********************************************** */
interface SmartPixelExtensionPageLoadTime extends SmartPixelExtensionProps {
    isActivated(): boolean;
    activate(): void;
    deactivate(): void;
}

interface SmartPixelExtension {
    page_load_time: SmartPixelExtensionPageLoadTime;
}

/* **********************************************
 *       EXTENSION:IDENTIFIER_DISCLOSURE        *
 ********************************************** */
/**
 * @description
 *      - 0 >> There are no problems
 *      - 1	>> The extension is collecting the Mapp data
 *      - 2	>> Missing Mapp track ID or track domain
 *      - 3	>> Server timeout (5000ms) for account <<TRACK_ID>>
 *      - 4	>> Server error for account <<TRACK_ID>>
 *      - 5	>> EID not found for account <<TRACK_ID>>
 */
type SmartPixelExtensionIdentifierDisclosureStatus = 0 | 1 | 2 | 3 | 4 | 5;
type SmartPixelExtensionIdentifierDisclosureEverId = string;

interface SmartPixelExtensionIdentifierDisclosureResult {
    [trackId: string]: SmartPixelExtensionIdentifierDisclosureEverId;
}

interface SmartPixelExtensionIdentifierDisclosure extends SmartPixelExtensionProps {
    getEverIDs(callback: (status: SmartPixelExtensionIdentifierDisclosureStatus, data?: SmartPixelExtensionIdentifierDisclosureResult) => void): void;
}

interface SmartPixelExtension {
    identifier_disclosure: SmartPixelExtensionIdentifierDisclosure;
}

/* **********************************************
 *           EXTENSION:SCROLL_DEPTH             *
 ********************************************** */
type SmartPixelExtensionScrollDepthEventName = 'scroll' | 'unload';

interface SmartPixelExtensionScrollDepthSetConfig {
    roundResult?: boolean;
    pageHeight?: string;
    sendAsFigure?: string;
}

interface SmartPixelExtensionScrollDepthGetConfig {
    roundResult: boolean;
    pageHeight: string;
    sendAsFigure: string;
}

interface SmartPixelExtensionScrollDepth extends SmartPixelExtensionProps {
    config(): SmartPixelExtensionScrollDepthGetConfig;
    config(config: SmartPixelExtensionScrollDepthSetConfig): void;
    isActivated(): boolean;
    activate(): void;
    deactivate(): void;
    simulate(eventName: SmartPixelExtensionScrollDepthEventName): void;
}

interface SmartPixelExtension {
    scroll_depth: SmartPixelExtensionScrollDepth;
}

/* **********************************************
 *          EXTENSION:SCROLL_POSITION           *
 ********************************************** */
/**
 * @deprecated use SmartPixelExtensionScrollDepthEventName
 */
type SmartPixelExtensionScrollPositionEventName = 'scroll' | 'unload';

/**
 * @deprecated use SmartPixelExtensionScrollDepthSetConfig
 */
interface SmartPixelExtensionScrollPositionSetConfig {
    roundResult?: boolean;
    pageHeight?: string;
    sendAsFigure?: string;
}

/**
 * @deprecated use SmartPixelExtensionScrollDepthGetConfig
 */
interface SmartPixelExtensionScrollPositionGetConfig {
    roundResult: boolean;
    pageHeight: string;
    sendAsFigure: string;
}

/**
 * @deprecated use SmartPixelExtensionScrollDepth
 */
interface SmartPixelExtensionScrollPosition extends SmartPixelExtensionProps {
    config(): SmartPixelExtensionScrollPositionGetConfig;
    config(config: SmartPixelExtensionScrollPositionSetConfig): void;
    isActivated(): boolean;
    activate(): void;
    deactivate(): void;
    simulate(eventName: SmartPixelExtensionScrollPositionEventName): void;
}

interface SmartPixelExtension {
    /**
     * @deprecated use scroll_depth
     */
    scroll_position: SmartPixelExtensionScrollPosition;
}

/* **********************************************
 *          EXTENSION:CAMPAIGN_MAPPER           *
 ********************************************** */
interface SmartPixelExtensionCampaignMapperSetConfig {
    parameter: string[];
    separator: string;
    mediaCode: string;
    replacerValue?: string;
    findAllParameter?: boolean;
    replacerRegExp?: RegExp;
}

interface SmartPixelExtensionCampaignMapperGetConfig {
    parameter: string[];
    separator: string;
    mediaCode: string;
    replacerValue: string;
    findAllParameter: boolean;
    replacerRegExp: RegExp;
}

interface SmartPixelExtensionCampaignMapper extends SmartPixelExtensionProps {
    config(): SmartPixelExtensionCampaignMapperGetConfig[];
    config(config: SmartPixelExtensionCampaignMapperSetConfig[]): void;
    isActivated(): boolean;
    activate(): void;
    deactivate(): void;
}

interface SmartPixelExtension {
    campaign_mapper: SmartPixelExtensionCampaignMapper;
}

/* **********************************************
 *        EXTENSION:MARKETING_AUTOMATION        *
 ********************************************** */
interface SmartPixelExtensionMarketingAutomationSetConfig {
    trackId?: string;
    mediacode?: string[];
    keyword?: string[];
    baseUrl?: string;
    widgetServiceUrl?: string;
}

interface SmartPixelExtensionMarketingAutomationGetConfig {
    trackId: string;
    mediacode: string[];
    keyword: string[];
    baseUrl: string;
    widgetServiceUrl: string;
}

interface SmartPixelExtensionMarketingAutomation extends SmartPixelExtensionProps {
    config(): SmartPixelExtensionMarketingAutomationGetConfig;
    config(config: SmartPixelExtensionMarketingAutomationSetConfig): void;
    isActivated(): boolean;
    activate(): void;
    deactivate(): void;
}

interface SmartPixelExtension {
    marketing_automation: SmartPixelExtensionMarketingAutomation;
}

/* **********************************************
 *          EXTENSION:TEASER_TRACKING           *
 ********************************************** */
type SmartPixelExtensionMarketingAutomationAttribution = 'first' | 'last' | 'all';

interface SmartPixelExtensionTeaserTrackingConfigMaxSendTeasers {
    session?: number;
    page?: number;
}

interface SmartPixelExtensionTeaserTrackingSetConfig {
    viewPercent?: NumberOrString;
    viewTime?: NumberOrString;
    attribution?: SmartPixelExtensionMarketingAutomationAttribution;
    maxSendTeasers?: SmartPixelExtensionTeaserTrackingConfigMaxSendTeasers;
    maxCookieSize?: NumberOrString;
    extendClickSelector?: string;
    clearConversions?: boolean;
    autoEngagements?: boolean;
}

interface SmartPixelExtensionTeaserTrackingGetConfig {
    viewPercent: number;
    viewTime: number;
    attribution: SmartPixelExtensionMarketingAutomationAttribution;
    maxSendTeasers: SmartPixelExtensionTeaserTrackingConfigMaxSendTeasers;
    maxCookieSize: number;
    extendClickSelector: string;
    clearConversions: boolean;
    autoEngagements: boolean;
}

interface SmartPixelExtensionTeaserTracking extends SmartPixelExtensionProps {
    config(): SmartPixelExtensionTeaserTrackingGetConfig;
    config(config: SmartPixelExtensionTeaserTrackingSetConfig): void;
    isActivated(): boolean;
    activate(): void;
    deactivate(): void;
    update(): void;
}

interface SmartPixelExtension {
    teaser_tracking: SmartPixelExtensionTeaserTracking;
}

/* **********************************************
 *       EXTENSION:PRODUCT_LIST_TRACKING        *
 ********************************************** */
interface SmartPixelExtensionProductListTrackingConfigMaxSendProducts {
    session?: number;
    page?: number;
}

interface SmartPixelExtensionProductListTrackingSetConfig {
    actionName?: string;
    viewPercent?: NumberOrString;
    viewTime?: NumberOrString;
    sampling?: NumberOrString;
    maxSendProducts?: SmartPixelExtensionProductListTrackingConfigMaxSendProducts;
    maxCookieSize?: NumberOrString;
    sendMultipleProductViews?: boolean;
}

interface SmartPixelExtensionProductListTrackingGetConfig {
    actionName: string;
    viewPercent: number;
    viewTime: number;
    sampling: number;
    maxSendProducts: SmartPixelExtensionProductListTrackingConfigMaxSendProducts;
    maxCookieSize: number;
    sendMultipleProductViews: boolean;
}

interface SmartPixelExtensionProductListTracking extends SmartPixelExtensionProps {
    config(): SmartPixelExtensionProductListTrackingGetConfig;
    config(config: SmartPixelExtensionProductListTrackingSetConfig): void;
    isActivated(): boolean;
    activate(): void;
    deactivate(): void;
    update(): void;
}

interface SmartPixelExtension {
    product_list_tracking: SmartPixelExtensionProductListTracking;
}

/* **********************************************
 *                                              *
 *                EXTENSION:MEDIA               *
 *                                              *
 ********************************************** */
interface SmartPixelExtensionMediaSession {
    new(name: string): SmartPixelExtensionMediaSession;
    setTotalTime(total: number): void;
    setBandwidth(bandwidth: number): void;
    setVolume(volume: number): void;
    setCategory(category: DataObject): void;
    mute(): void;
    unMute(): void;
    getPositionInterval(): number;
    init(current: number, parameter?: DataObject): void;
    play(current: number, parameter?: DataObject): void;
    pause(current: number, parameter?: DataObject): void;
    stop(current: number, parameter?: DataObject): void;
    position(current: number, parameter?: DataObject): void;
    seek(current: number, parameter?: DataObject): void;
    end(current: number, parameter?: DataObject): void;
    custom(action: string, current: number, parameter?: DataObject): void;
}

interface SmartPixelExtensionMedia extends SmartPixelExtensionProps {
    MediaSession: SmartPixelExtensionMediaSession;
}

interface SmartPixelExtension {
    media: SmartPixelExtensionMedia;
}

/* **********************************************
 *                EXTENSION:FORM                *
 ********************************************** */
type SmartPixelExtensionFormFieldType = HTMLElement | SmartPixelExtensionFormCustomFormField;
type SmartPixelExtensionFormType = HTMLFormElement | SmartPixelExtensionFormCustomForm;

interface SmartPixelExtensionFormConfigDefaults {
    [i: string]: string;
}

interface SmartPixelExtensionFormShadowRoot {
    selector: string;
    attribute?: string;
    automatic?: string|boolean;
    fullContent?: string[];
    anonymous?: boolean;
    pathAnalysis?: boolean;
    field?: SmartPixelExtensionFormConfigField;
}

interface SmartPixelExtensionFormConfigField {
    attribute?: string;
    value?: string;
    defaults?: SmartPixelExtensionFormConfigDefaults;
}

interface SmartPixelExtensionFormSetConfig {
    attribute?: string;
    automatic?: string|boolean;
    shadowRoot?: string[]|SmartPixelExtensionFormShadowRoot[];
    fullContent?: string[];
    anonymous?: boolean;
    pathAnalysis?: boolean;
    field?: SmartPixelExtensionFormConfigField;
}

interface SmartPixelExtensionFormGetConfig {
    attribute: string;
    automatic: string|boolean;
    shadowRoot: SmartPixelExtensionFormShadowRoot[];
    fullContent: string[];
    anonymous: boolean;
    pathAnalysis: boolean;
    field: SmartPixelExtensionFormConfigField;
}

interface SmartPixelExtensionFormCustomFormField {
    new(name: string, value?: string): SmartPixelExtensionFormCustomFormField;
    name: string;
    value: string;
    setAttribute(key: string, value: string): void;
    getAttribute(key: string): string;
    focus(): void;
    blur(): void;
    addEventListener(evt: string, func: (evt: Event) => void): void;
    removeEventListener(evt: string): void;
}

interface SmartPixelExtensionFormCustomForm {
    new(name: string, elements?: SmartPixelExtensionFormFieldType[]): SmartPixelExtensionFormCustomForm;
    elements: SmartPixelExtensionFormFieldType[];
    add(element: SmartPixelExtensionFormFieldType): SmartPixelExtensionFormCustomForm;
    setAttribute(key: string, value: string): void;
    getAttribute(key: string): string;
    submit(): void;
    addEventListener(evt: string, func: (evt: Event) => void): void;
    removeEventListener(evt: string): void;
}

interface SmartPixelExtensionForm extends SmartPixelExtensionProps {
    CustomForm: SmartPixelExtensionFormCustomForm;
    CustomFormField: SmartPixelExtensionFormCustomFormField;
    config(config: SmartPixelExtensionFormSetConfig): void;
    config(): SmartPixelExtensionFormGetConfig;
    add(formObject: SmartPixelExtensionFormType): void;
    get(formObject: SmartPixelExtensionFormType): SmartPixelExtensionFormType;
    update(): void;
    remove(formObject: SmartPixelExtensionFormType): void;
    send(formObject: SmartPixelExtensionFormType): void;
    submit(formObject: SmartPixelExtensionFormType): void;
    getAll(): SmartPixelExtensionFormType[];
    removeAll(): void;
    sendAll(): void;
}

interface SmartPixelExtension {
    form: SmartPixelExtensionForm;
}

/* **********************************************
 *                SMART PIXEL                   *
 ********************************************** */
export interface SmartPixel {
    version: string;
    push(fn: (wtSmart: SmartPixel) => void): void;
    track(keepData?: boolean): void;
    trackPage(keepData?: boolean): void;
    trackAction(keepData?: boolean): void;
    debug: SmartPixelDebug;
    init: SmartPixelInit;
    advanced: SmartPixelAdvanced;
    action: SmartPixelAction;
    campaign: SmartPixelCampaign;
    customer: SmartPixelCustomer;
    order: SmartPixelOrder;
    page: SmartPixelPage;
    product: SmartPixelProductActions;
    session: SmartPixelSession;
    utils: SmartPixelUtils;
    extension: SmartPixelExtension;
    _ps(id: number, version: string): void;
}

export function use(window: any, document: any): SmartPixel;
