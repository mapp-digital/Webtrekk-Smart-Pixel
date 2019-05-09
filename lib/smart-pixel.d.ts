// Type definitions for smart-pixel.js v1.x

/************************************************
 *                                              *
 *                    CORE                      *
 *                                              *
 ************************************************/

declare namespace wtSmart {
    export type object<number, string> = {};
    export var version: string;

    export interface init {
        set(data: {
            trackId: string | string[],
            trackDomain: string,
            domain?: string | string[] | RegExp | RegExp[],
            cookie?: string
        }): wtSmart.init;

        add(data: {
            trackId?: string | string[],
            trackDomain?: string,
            domain?: string | string[] | RegExp | RegExp[],
            cookie?: string
        }): wtSmart.init;

        get(): {
            trackId: string,
            trackDomain: string,
            domain: string[] | RegExp[],
            cookie: string
        };

        remove(properties?: string[]): wtSmart.init;
    }

    export interface advanced {
        set(data: {
            secureCookie?: boolean,
            optOutName?: string,
            requestObfuscation?: boolean,
            forceOldEverId?: boolean,
            execCDB?: boolean,
            useCDBCache?: boolean
        }): wtSmart.advanced;

        add(data: {
            secureCookie?: boolean,
            optOutName?: string,
            requestObfuscation?: boolean,
            forceOldEverId?: boolean,
            execCDB?: boolean,
            useCDBCache?: boolean
        }): wtSmart.advanced;

        get(): {
            secureCookie: boolean,
            optOutName: string,
            requestObfuscation: boolean,
            forceOldEverId: boolean,
            execCDB: boolean,
            useCDBCache: boolean
        };

        remove(properties?: string[]): wtSmart.advanced;
    }

    export namespace action {
        export interface data {
            set(data: {
                name: string,
                parameter?: object<number, string>,
                goal?: object<number, string>
            }): wtSmart.action.data;

            add(data: {
                name?: string,
                parameter?: object<number, string>,
                goal?: object<number, string>
            }): wtSmart.action.data;

            get(): {
                name: string,
                parameter: object<number, string>,
                goal: object<number, string>
            };

            remove(properties?: string[]): wtSmart.action.data;
        }

        export interface parameter {
            set(data: object<number, string>): wtSmart.action.parameter;
            add(data: object<number, string>): wtSmart.action.parameter;
            get(): object<number, string>;
            remove(properties?: string[]): wtSmart.action.parameter;
        }

        export interface goal {
            set(data: object<number, string>): wtSmart.action.goal;
            add(data: object<number, string>): wtSmart.action.goal;
            get(): object<number, string>;
            remove(properties?: string[]): wtSmart.action.goal;
        }
    }

    export namespace campaign {
        export interface data {
            set(data: {
                id?: string,
                mediaCode?: string | string[],
                oncePerSession?: boolean,
                parameter?: object<number, string>
            }): wtSmart.campaign.data;

            add(data: {
                id?: string,
                mediaCode?: string | string[],
                oncePerSession?: boolean,
                parameter?: object<number, string>
            }): wtSmart.campaign.data;

            get(): {
                id: string,
                mediaCode: string[],
                oncePerSession: boolean,
                parameter: object<number, string>
            };

            remove(properties?: string[]): wtSmart.campaign.data;
        }

        export interface parameter {
            set(data: object<number, string>): wtSmart.campaign.parameter;
            add(data: object<number, string>): wtSmart.campaign.parameter;
            get(): object<number, string>;
            remove(properties?: string[]): wtSmart.campaign.parameter;
        }
    }

    export namespace customer {
        export interface data {
            set(
                id: string,
                data?: {
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
                    category?: object<number, string>
                },
                validation?: boolean
            ): wtSmart.customer.data;

            add(
                id: string,
                data?: {
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
                    category?: object<number, string>
                },
                validation?: boolean
            ): wtSmart.customer.data;

            get(): {
                id: string,
                email: string,
                emailRID: string,
                emailOptin: boolean,
                firstName: string,
                lastName: string,
                telephone: string,
                gender: number,
                birthday: string,
                country: string,
                city: string,
                postalCode: string,
                street: string,
                streetNumber: string,
                validation: boolean,
                category: object<number, string>
            };

            remove(properties?: string[]): wtSmart.customer.data;
        }

        export interface category {
            set(data: object<number, string>): wtSmart.customer.category;
            add(data: object<number, string>): wtSmart.customer.category;
            get(): object<number, string>;
            remove(properties?: string[]): wtSmart.customer.category;
        }
    }

    export namespace order {
        export interface data {
            set(data: {
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
                parameter?: object<number, string>
            }): wtSmart.order.data;

            add(data: {
                value?: number,
                id?: string,
                currency?: string,
                couponValue?: number,
                paymentMethod?: string,
                shippingService?: string,
                shippingSpeed?: string,
                shippingCosts?: number,
                grossMargin?: number,
                orderStatus?: string,
                parameter?: object<number, string>
            }): wtSmart.order.data;

            get(): {
                value: number,
                id: string,
                currency: string,
                couponValue: number,
                paymentMethod: string,
                shippingService: string,
                shippingSpeed: string,
                shippingCosts: number,
                grossMargin: number,
                orderStatus: string,
                parameter: object<number, string>
            };

            remove(properties?: string[]): wtSmart.order.data;
        }

        export interface parameter {
            set(data: object<number, string>): wtSmart.order.parameter;
            add(data: object<number, string>): wtSmart.order.parameter;
            get(): object<number, string>;
            remove(properties?: string[]): wtSmart.order.parameter;
        }
    }

    export namespace page {
        export interface data {
            set(
                name: string,
                data?: {
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
                    parameter?: object<number, string>,
                    category?: object<number, string>,
                    goal?: object<number, string>
                }
            ): wtSmart.page.data;

            add(
                name: string,
                data?: {
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
                    parameter?: object<number, string>,
                    category?: object<number, string>,
                    goal?: object<number, string>
                }
            ): wtSmart.page.data;

            get(): {
                name: string,
                search: string,
                numberSearchResults: number,
                errorMessages: string,
                paywall: boolean,
                articleTitle: string,
                contentTags: string,
                title: string,
                type: string,
                length: string,
                daysSincePublication: number,
                testVariant: string,
                testExperiment: string,
                parameter: object<number, string>,
                category: object<number, string>,
                goal: object<number, string>
            };

            remove(properties?: string[]): wtSmart.page.data;
        }

        export interface parameter {
            set(data: object<number, string>): wtSmart.page.parameter;
            add(data: object<number, string>): wtSmart.page.parameter;
            get(): object<number, string>;
            remove(properties?: string[]): wtSmart.page.parameter;
        }
        export interface category {
            set(data: object<number, string>): wtSmart.page.category;
            add(data: object<number, string>): wtSmart.page.category;
            get(): object<number, string>;
            remove(properties?: string[]): wtSmart.page.category;
        }
        export interface goal {
            set(data: object<number, string>): wtSmart.page.goal;
            add(data: object<number, string>): wtSmart.page.goal;
            get(): object<number, string>;
            remove(properties?: string[]): wtSmart.page.goal;
        }
    }

    export namespace product {
        export namespace list {
            export var products: Array<{
                add(data: {
                    id: string,
                    cost?: number,
                    quantity?: number,
                    variant?: string,
                    soldOut?: boolean,
                    parameter?: object<number, string>,
                    category?: object<number, string>
                }): any;

                get(): object<number, string>;

                parameter: {
                    set(data: object<number, string>): any;
                    add(data: object<number, string>): any;
                    get(): object<number, string>;
                    remove(properties?: string[]): any;
                };

                category: {
                    set(data: object<number, string>): any;
                    add(data: object<number, string>): any;
                    get(): object<number, string>;
                    remove(properties?: string[]): any;
                };
            }>;

            export interface data {
                set(data: [{
                    id: string,
                    cost?: number,
                    quantity?: number,
                    variant?: string,
                    soldOut?: boolean,
                    parameter?: object<number, string>,
                    category?: object<number, string>
                }]): wtSmart.product.list.data;

                add(data: [{
                    id: string,
                    cost?: number,
                    quantity?: number,
                    variant?: string,
                    soldOut?: boolean,
                    parameter?: object<number, string>,
                    category?: object<number, string>
                }]): wtSmart.product.list.data;

                get(): [{
                    id: string,
                    cost: number,
                    quantity: number,
                    variant: string,
                    soldOut: boolean,
                    parameter: object<number, string>,
                    category: object<number, string>
                }];

                remove(properties?: string[]): wtSmart.product.list.data;
            }

            export interface parameter {
                set(data: object<number, string>): wtSmart.product.list.parameter;
                add(data: object<number, string>): wtSmart.product.list.parameter;
                get(): object<number, string>;
                remove(properties?: string[]): wtSmart.product.list.parameter;
            }
        }

        export namespace view {
            export var products: Array<{
                add(data: {
                    id: string,
                    cost?: number,
                    quantity?: number,
                    variant?: string,
                    soldOut?: boolean,
                    parameter?: object<number, string>,
                    category?: object<number, string>
                }): any;

                get(): object<number, string>;

                parameter: {
                    set(data: object<number, string>): any;
                    add(data: object<number, string>): any;
                    get(): object<number, string>;
                    remove(properties?: string[]): any;
                };

                category: {
                    set(data: object<number, string>): any;
                    add(data: object<number, string>): any;
                    get(): object<number, string>;
                    remove(properties?: string[]): any;
                };
            }>;

            export interface data {
                set(data: [{
                    id: string,
                    cost?: number,
                    quantity?: number,
                    variant?: string,
                    soldOut?: boolean,
                    parameter?: object<number, string>,
                    category?: object<number, string>
                }]): wtSmart.product.view.data;

                add(data: [{
                    id: string,
                    cost?: number,
                    quantity?: number,
                    variant?: string,
                    soldOut?: boolean,
                    parameter?: object<number, string>,
                    category?: object<number, string>
                }]): wtSmart.product.view.data;

                get(): [{
                    id: string,
                    cost: number,
                    quantity: number,
                    variant: string,
                    soldOut: boolean,
                    parameter: object<number, string>,
                    category: object<number, string>
                }];

                remove(properties?: string[]): wtSmart.product.view.data;
            }

            export interface parameter {
                set(data: object<number, string>): wtSmart.product.view.parameter;
                add(data: object<number, string>): wtSmart.product.view.parameter;
                get(): object<number, string>;
                remove(properties?: string[]): wtSmart.product.view.parameter;
            }
        }

        export namespace basket {
            export var products: Array<{
                add(data: {
                    id: string,
                    cost?: number,
                    quantity?: number,
                    variant?: string,
                    soldOut?: boolean,
                    parameter?: object<number, string>,
                    category?: object<number, string>
                }): any;

                get(): object<number, string>;

                parameter: {
                    set(data: object<number, string>): any;
                    add(data: object<number, string>): any;
                    get(): object<number, string>;
                    remove(properties?: string[]): any;
                };

                category: {
                    set(data: object<number, string>): any;
                    add(data: object<number, string>): any;
                    get(): object<number, string>;
                    remove(properties?: string[]): any;
                };
            }>;

            export interface data {
                set(data: [{
                    id: string,
                    cost?: number,
                    quantity?: number,
                    variant?: string,
                    soldOut?: boolean,
                    parameter?: object<number, string>,
                    category?: object<number, string>
                }]): wtSmart.product.basket.data;

                add(data: [{
                    id: string,
                    cost?: number,
                    quantity?: number,
                    variant?: string,
                    soldOut?: boolean,
                    parameter?: object<number, string>,
                    category?: object<number, string>
                }]): wtSmart.product.basket.data;

                get(): [{
                    id: string,
                    cost: number,
                    quantity: number,
                    variant: string,
                    soldOut: boolean,
                    parameter: object<number, string>,
                    category: object<number, string>
                }];

                remove(properties?: string[]): wtSmart.product.basket.data;
            }

            export interface parameter {
                set(data: object<number, string>): wtSmart.product.basket.parameter;
                add(data: object<number, string>): wtSmart.product.basket.parameter;
                get(): object<number, string>;
                remove(properties?: string[]): wtSmart.product.basket.parameter;
            }
        }

        export namespace confirmation {
            export var products: Array<{
                add(data: {
                    id: string,
                    cost?: number,
                    quantity?: number,
                    variant?: string,
                    soldOut?: boolean,
                    parameter?: object<number, string>,
                    category?: object<number, string>
                }): any;

                get(): object<number, string>;

                parameter: {
                    set(data: object<number, string>): any;
                    add(data: object<number, string>): any;
                    get(): object<number, string>;
                    remove(properties?: string[]): any;
                };

                category: {
                    set(data: object<number, string>): any;
                    add(data: object<number, string>): any;
                    get(): object<number, string>;
                    remove(properties?: string[]): any;
                };
            }>;

            export interface data {
                set(data: [{
                    id: string,
                    cost?: number,
                    quantity?: number,
                    variant?: string,
                    soldOut?: boolean,
                    parameter?: object<number, string>,
                    category?: object<number, string>
                }]): wtSmart.product.confirmation.data;

                add(data: [{
                    id: string,
                    cost?: number,
                    quantity?: number,
                    variant?: string,
                    soldOut?: boolean,
                    parameter?: object<number, string>,
                    category?: object<number, string>
                }]): wtSmart.product.confirmation.data;

                get(): [{
                    id: string,
                    cost: number,
                    quantity: number,
                    variant: string,
                    soldOut: boolean,
                    parameter: object<number, string>,
                    category: object<number, string>
                }];

                remove(properties?: string[]): wtSmart.product.confirmation.data;
            }

            export interface parameter {
                set(data: object<number, string>): wtSmart.product.confirmation.parameter;
                add(data: object<number, string>): wtSmart.product.confirmation.parameter;
                get(): object<number, string>;
                remove(properties?: string[]): wtSmart.product.confirmation.parameter;
            }
        }
    }

    export namespace session {
        export interface data {
            set(data: {
                loginStatus?: string,
                parameter?: object<number, string>
            }): wtSmart.session.data;

            add(data: {
                loginStatus?: string,
                parameter?: object<number, string>
            }):  wtSmart.session.data;

            get(): {
                loginStatus: string,
                parameter: object<number, string>
            };

            remove(properties?: string[]):  wtSmart.session.data;
        }

        export interface parameter {
            set(data:object<number, string>): wtSmart.session.parameter;
            add(data:object<number, string>): wtSmart.session.parameter;
            get(): object<number, string>;
            remove(properties?: string[]): wtSmart.session.parameter;
        }
    }

    export interface extension {
        length: number;

        push(ext: () => {
            name: string,
            version: string,
            config: (data?: {}) => void,
            trigger: () => void,
            isActivated: () => boolean,
            activate: () => boolean,
            deactivate: () => boolean
        }): wtSmart.extension;

        get(): {};

        remove(extensionName: string): wtSmart.extension;
    }

    export interface debug {
        enable(): void;
        disable(): void;
    }

    export interface utils {
        browser: {
            isOpera(): boolean;
            isIE(): boolean;
            isMSIE(): boolean;
            isTrident(): boolean;
            isEdge(): boolean;
            isFirefox(): boolean;
            isSafari(): boolean;
            isChrome(): boolean;
        }

        crypto: {
            URL: {
                encode(str: string): string;
                decode(str: string): string;
            },
            SHA256: {
                encode(str: string): string;
            },
            MD5: {
                encode(str: string): string;
            }
        }

        identifier: {
            everId(): string;
            everId(everId: string): string;

            cdbeid(): string;
        }

        event: {
            register(obj: HTMLElement, evt: string, callback: (evt: Event) => void): void;
            unregister(obj: HTMLElement, evt: string, callback: (evt: Event) => void): void;
        }

        cookie(name: string): string;
        cookie(
            name: string,
            value: string,
            duration?: number,
            path?: string,
            domain?: string,
            secure?: boolean
        ): boolean;

        image (
            imageURL: string,
            callback?: (
                img: HTMLImageElement,
                status: string, // 'error', 'success', 'timeout'
                duration: number
            ) => void,
            timeout?: number
        ): void;

        include (scriptURL: string, callback?: () => void): void;
        include (scriptURL: [{src: string, required?: boolean}], callback?: () => void): void;

        parameter (parameter: string, url?: string, def?: any): any;

        referrer (): string;
        referrer (referrerURL: string): void;

        url (): string;
        url (urlString: string): void;
    }

    export function push(fn: (wtSmart: wtSmart) => void): void;

    export function track(keepData?: boolean): void;

    export function trackPage(keepData?: boolean): void;

    export function trackAction(keepData?: boolean): void;
}

/************************************************
 *                                              *
 *                 EXTENSIONS                   *
 *                                              *
 ************************************************/

declare namespace wtSmart.extension.action {
    export var name: string;
    export var version: string;

    export function config(): {
        type: string,
        attribute: string,
        parameter: object<number, string>,
        extend: string[],
        replace: {
            pattern: RegExp,
            replacement: string
        }[],
        ignore: RegExp,
        delay: boolean,
        delayDuration: number,
        noDelayAttribute: string
    };

    export function config(data: {
        type: string,
        attribute?: string,
        parameter?: object<number, string>,
        extend?: string,
        replace?: {
            pattern: RegExp,
            replacement: string
        }[],
        ignore?: RegExp,
        delay?: boolean,
        delayDuration?: number,
        noDelayAttribute?: string
    }): void;

    export function isActivated(): boolean;
    export function activate(): void;
    export function deactivate(): void;
    export function reload(): void;
}

declare namespace wtSmart.extension.cdb {
    export var name: string;
    export var version: string;

    export function config(data: {
        started: boolean,
        timeout: number,
        location: string
    }): void;
    export function setEmail(email: string): void;
    export function setPhone(phone: string): void;
    export function setAddress(address: string): void;
    export function setAndroid(android: string): void;
    export function setIOS(ios: string): void;
    export function setWindows(windows: string): void;
    export function setFacebook(facebook: string): void;
    export function setTwitter(twitter: string): void;
    export function setGoogle(google: string): void;
    export function setLinkedIn(linkedIn: string): void;
    export function setCriteo(): void;
    export function setAMP(): void;
    export function setAdClear(adClearTrackId: string, adClearTrackDomain: string): void;
    export function setCustom(id: number, custom: string): void;
}

declare namespace wtSmart.extension.identifier {
    export var name: string;
    export var version: string;
}

declare namespace wtSmart.extension.page_load_time {
    export var name: string;
    export var version: string;

    export function isActivated(): boolean;
    export function activate(): void;
    export function deactivate(): void;
}

declare namespace wtSmart.extension.scroll_position {
    export var name: string;
    export var version: string;

    export function config(): {
        roundResult: boolean,
        pageHeight: string,
        sendAsFigure: string
    };

    export function config(data: {
        roundResult?: boolean,
        pageHeight?: string,
        sendAsFigure?: string
    }): void;

    export function isActivated(): boolean;
    export function activate(): void;
    export function deactivate(): void;
}

declare namespace wtSmart.extension.campaign_mapper {
    export var name: string;
    export var version: string;

    export function config(): {
        parameter: string[],
        separator: string,
        mediaCode: string,
        replacerValue: string,
        findAllParameter: boolean,
        replacerRegExp: RegExp
    }[];

    export function config(data: {
        parameter: string[],
        separator: string,
        mediaCode: string,
        replacerValue?: string,
        findAllParameter?: boolean,
        replacerRegExp?: RegExp
    }[]): void;

    export function isActivated(): boolean;
    export function activate(): void;
    export function deactivate(): void;
}

declare namespace wtSmart.extension.teaser_tracking {
    export var name: string;
    export var version: string;

    export function config(): {
        viewPercent: number,
        viewTime: number,
        attribution: string,
        maxSendTeasers: {
            session: number,
            page: number
        },
        clearConversions: boolean,
        autoEngagements: boolean
    };

    export function config(data: {
        viewPercent?: number,
        viewTime?: number,
        attribution?: string,
        maxSendTeasers?: {
            session?: number,
            page?: number
        },
        clearConversions?: boolean,
        autoEngagements?: boolean
    }): void;

    export function isActivated(): boolean;
    export function activate(): void;
    export function deactivate(): void;
    export function update(): void;
}

declare namespace wtSmart.extension.marketing_automation {
    export var name: string;
    export var version: string;

    export function config(): {
        trackId: string,
        mediacode: string[],
        keyword: string[],
        baseUrl: string,
        widgetServiceUrl: string
    };

    export function config(data: {
        trackId?: string,
        mediacode?: string[],
        keyword?: string[],
        baseUrl?: string,
        widgetServiceUrl?: string
    }): void;

    export function isActivated(): boolean;
    export function activate(): void;
    export function deactivate(): void;
}

declare namespace wtSmart.extension.form {
    export var name: string;
    export var version: string;

    export class CustomFormField {
        name: string;
        value: string;

        constructor(name: string);
        constructor(name: string, value: string);

        setAttribute(key: string, value: string): void;
        getAttribute(key: string): string;

        focus(): void;
        blur(): void;

        addEventListener(evt: string, func: () => void): void;
        removeEventListener(evt: string): void;
    }

    export class CustomForm {
        name: string;
        elements: HTMLElement[] | CustomFormField[];

        constructor(name: string);
        constructor(name: string, elements: HTMLElement[]);
        constructor(name: string, elements: CustomFormField[]);

        add(element: HTMLElement): this;
        add(element: CustomFormField): this;

        setAttribute(key: string, value: string): void;
        getAttribute(key: string): string;

        submit(): void;

        addEventListener(evt: string, func: () => void): void;
        removeEventListener(evt: string): void;
    }

    export function config(): {
        attribute: string,
        fullContent: string[],
        anonymous: boolean,
        pathAnalysis: boolean,
        field: {
            attribute: string,
            value: string,
            defaults: {}
        }
    };

    export function config(data: {
        attribute: string,
        fullContent?: string[],
        anonymous?: boolean,
        pathAnalysis?: boolean,
        field?: {
            attribute: string,
            value: string,
            defaults?: {}
        }
    }): void;

    export function add(formObject: HTMLFormElement): void;
    export function add(formObject: CustomForm): void;

    export function get(formObject: HTMLFormElement): {};
    export function get(formObject: CustomForm): {};

    export function remove(formObject: HTMLFormElement): void;
    export function remove(formObject: CustomForm): void;

    export function send(formObject: HTMLFormElement): void;
    export function send(formObject: CustomForm): void;

    export function submit(formObject: HTMLFormElement): void;
    export function submit(formObject: CustomForm): void;

    export function getAll(): HTMLFormElement[];
    export function getAll(): CustomForm[];

    export function removeAll(): void;

    export function sendAll(): void;
}

declare namespace wtSmart.extension.media {
    export var name: string;
    export var version: string;

    export class MediaSession {
        constructor(name: string);

        play(current: number, parameter?: object<number, string>): void;
        pause(current: number, parameter?: object<number, string>): void;
        stop(current: number, parameter?: object<number, string>): void;
        position(current: number, parameter?: object<number, string>): void;
        seek(current: number, parameter?: object<number, string>): void;
        end(current: number, parameter?: object<number, string>): void;
        custom(action: string, current: number, parameter?: object<number, string>): void;

        mute(): void;
        unMute(): void;

        getPositionInterval(): number;

        setTotalTime(total: number): void;
        setBandwidth(bandwidth: number): void;
        setVolume(volume: number): void;
        setCategory(category: object<number, string>): void;
    }
}

declare namespace wtSmart.extension.product_list_tracking {
    export var name: string;
    export var version: string;

    export function config(): {
        viewPercent: number,
        viewTime: number,
        sampling: number,
        maxSendProducts: {
            session: number,
            page: number
        },
        sendMultipleProductViews: boolean
    };

    export function config(data: {
        viewPercent?: number,
        viewTime?: number,
        sampling?: number,
        maxSendProducts?: {
            session?: number,
            page?: number
        },
        sendMultipleProductViews?: boolean
    }): void;

    export function isActivated(): boolean;
    export function activate(): void;
    export function deactivate(): void;
    export function update(): void;
}

export default function use(window: Window, document: Document) : wtSmart;
export module wtSmart {
    export function use(window: Window, document: Document) : wtSmart;
}
