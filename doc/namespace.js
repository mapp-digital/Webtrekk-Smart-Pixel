/* eslint-disable */

/**
 * @file Webtrekk provides a high-end analytical tool to analyze the traffic on your website, identify success factors and optimize it on the basis of actual key indicators.
 * @author Webtrekk GmbH
 *
 * @namespace
 */
/**
 * @name wtSmart
 * @object
 */
const wtSmart = {};

/* **********************************************
 *                                              *
 *                  VERSION                     *
 *                                              *
 ********************************************** */
/**
 * @string
 */
wtSmart.prototype.version = '';

/* **********************************************
 *                                              *
 *                    PUSH                      *
 *                                              *
 ********************************************** */
/**
 * @param {function(instance: wtSmart)} fn
 */
wtSmart.prototype.push = function(fn) {
    fn(wtSmart);
};

/* **********************************************
 *                                              *
 *                   TRACK                      *
 *                                              *
 ********************************************** */
/**
 * @param {boolean} [keepData]
 */
wtSmart.prototype.track = function(keepData) {
    // ...
};

/**
 * @param {boolean} [keepData]
 */
wtSmart.prototype.trackPage = function(keepData) {
    // ...
};

/**
 * @param {boolean} [keepData]
 */
wtSmart.prototype.trackAction = function(keepData) {
    // ...
};

/* **********************************************
 *                                              *
 *                    DEBUG                     *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.prototype.debug = {
    /**
     * @description enabled the debug mode for the Smart Pixel
     */
    enable: function() {
        // ...
    },
    /**
     * @description disable the debug mode for the Smart Pixel
     */
    disable: function() {
        // ...
    }
};

/* **********************************************
 *                                              *
 *                    INIT                      *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.prototype.init = {
    /**
     * @param {{
     *      trackId: string | Array.<string>,
     *      trackDomain: string,
     *      domain?: string | Array.<string> | RegExp | Array.<RegExp>,
     *      cookie?: string
     * }} data
     * @returns {wtSmart.init}
     */
    set: function(data) {
        return wtSmart.init;
    },
    /**
     * @param {{
     *      trackId?: string | Array.<string>,
     *      trackDomain?: string,
     *      domain?: string | Array.<string> | RegExp | Array.<RegExp>,
     *      cookie?: string
     * }} data
     * @returns {wtSmart.init}
     */
    add: function(data) {
        return wtSmart.init;
    },
    /**
     * @returns {{
     *      trackId: string,
     *      trackDomain: string,
     *      domain: Array.<string> | Array.<RegExp>,
     *      cookie: string
     * }}
     */
    get: function() {
        return {
            trackId: '',
            trackDomain: '',
            domain: [],
            cookie: ''
        }
    },
    /**
     * @param {Array.<string>?} removeList
     * @returns {wtSmart.init}
     */
    remove: function(removeList) {
        return wtSmart.init;
    }
};

/* **********************************************
 *                                              *
 *                  ADVANCED                    *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.prototype.advanced = {
    /**
     * @param {{
     *      secureCookie?: boolean,
     *      optOutName?: string,
     *      requestObfuscation?: boolean,
     *      forceOldEverId?: boolean,
     *      execCDB?: boolean,
     *      useCDBCache?: boolean,
     *      requestQueue?: {
     *          activated?: boolean,
     *          ttl?: number,
     *          resendInterval?: number,
     *          size?: number
     *      }
     * }} data
     * @returns {wtSmart.advanced}
     */
    set: function(data) {
        return wtSmart.advanced;
    },
    /**
     * @param {{
     *      secureCookie?: boolean,
     *      optOutName?: string,
     *      requestObfuscation?: boolean,
     *      forceOldEverId?: boolean,
     *      execCDB?: boolean,
     *      useCDBCache?: boolean,
     *      requestQueue?: {
     *          activated?: boolean,
     *          ttl?: number,
     *          resendInterval?: number,
     *          size?: number
     *      }
     * }} data
     * @returns {wtSmart.advanced}
     */
    add: function(data) {
        return wtSmart.advanced;
    },
    /**
     * @returns {{
     *      secureCookie: boolean,
     *      optOutName: string,
     *      requestObfuscation: boolean,
     *      forceOldEverId: boolean,
     *      execCDB: boolean,
     *      useCDBCache: boolean,
     *      requestQueue: {
     *          activated: boolean,
     *          ttl: number,
     *          resendInterval: number,
     *          size: number
     *      }
     * }}
     */
    get: function() {
        return {
            secureCookie: false,
            optOutName: '',
            requestObfuscation: false,
            forceOldEverId: false,
            execCDB: false,
            useCDBCache: false,
            requestQueue: {
                activated: false,
                ttl: 5 * 60 * 1000,
                resendInterval: 5 * 1000,
                size: 100
            }
        }
    },
    /**
     * @param {Array.<string>?} removeList
     * @returns {wtSmart.advanced}
     */
    remove: function(removeList) {
        return wtSmart.advanced;
    }
};

/* **********************************************
 *                                              *
 *                   ACTION                     *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.prototype.action = {
    /**
     * @object
     */
    data: {
        /**
         * @param {{
         *      name: string,
         *      parameter?: Object.<number, string>,
         *      goal?: Object.<number, string>
         * }} data
         * @returns {wtSmart.action.data}
         */
        set: function(data) {
            return wtSmart.action.data;
        },
        /**
         * @param {{
         *      name?: string,
         *      parameter?: Object.<number, string>,
         *      goal?: Object.<number, string>
         * }} data
         * @returns {wtSmart.action.data}
         */
        add: function(data) {
            return wtSmart.action.data;
        },
        /**
         * @returns {{
         *      name: string,
         *      parameter: Object.<number, string>,
         *      goal: Object.<number, string>
         * }}
         */
        get: function() {
            return {
                name: '',
                parameter: {},
                goal: {}
            };
        },
        /**
         * @param {Array.<string>?} removeList
         * @returns {wtSmart.action.data}
         */
        remove: function(removeList) {
            return wtSmart.action.data;
        }
    },
    /**
     * @object
     */
    parameter: {
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.action.parameter}
         */
        set: function(data) {
            return wtSmart.action.parameter;
        },
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.action.parameter}
         */
        add: function(data) {
            return wtSmart.action.parameter;
        },
        /**
         * @returns {Object.<number, string>}
         */
        get: function() {
            return {};
        },
        /**
         * @param {Array.<number>?} removeList
         * @returns {wtSmart.action.parameter}
         */
        remove: function(removeList) {
            return wtSmart.action.parameter;
        }
    },
    /**
     * @object
     */
    goal: {
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.action.goal}
         */
        set: function(data) {
            return wtSmart.action.goal;
        },
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.action.goal}
         */
        add: function(data) {
            return wtSmart.action.goal;
        },
        /**
         * @returns {Object.<number, string>}
         */
        get: function() {
            return {};
        },
        /**
         * @param {Array.<number>?} removeList
         * @returns {wtSmart.action.goal}
         */
        remove: function(removeList) {
            return wtSmart.action.goal;
        }
    }
};

/* **********************************************
 *                                              *
 *                  CAMPAIGN                    *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.prototype.campaign = {
    /**
     * @object
     */
    data: {
        /**
         * @param {{
         *      id?: string,
         *      mediaCode?: string | string[],
         *      oncePerSession?: boolean,
         *      parameter?: Object.<number, string>
         * }} data
         * @returns {wtSmart.campaign.data}
         */
        set: function(data) {
            return wtSmart.campaign.data;
        },
        /**
         * @param {{
         *      id?: string,
         *      mediaCode?: string | string[],
         *      oncePerSession?: boolean,
         *      parameter?: Object.<number, string>
         * }} data
         * @returns {wtSmart.campaign.data}
         */
        add: function(data) {
            return wtSmart.campaign.data;
        },
        /**
         * @returns {{
         *      id: string,
         *      mediaCode: string[],
         *      oncePerSession: boolean,
         *      parameter: Object.<number, string>
         * }}
         */
        get: function() {
            return {
                id: '',
                mediaCode: [],
                oncePerSession: false,
                parameter: {}
            };
        },
        /**
         * @param {Array.<string>?} removeList
         * @returns {wtSmart.campaign.data}
         */
        remove: function(removeList) {
            return wtSmart.campaign.data;
        }
    },
    /**
     * @object
     */
    parameter: {
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.campaign.parameter}
         */
        set: function(data) {
            return wtSmart.campaign.parameter;
        },
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.campaign.parameter}
         */
        add: function(data) {
            return wtSmart.campaign.parameter;
        },
        /**
         * @returns {Object.<number, string>}
         */
        get: function() {
            return {};
        },
        /**
         * @param {Array.<number>?} removeList
         * @returns {wtSmart.campaign.parameter}
         */
        remove: function(removeList) {
            return wtSmart.campaign.parameter;
        }
    }
};

/* **********************************************
 *                                              *
 *                  CUSTOMER                    *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.prototype.customer = {
    /**
     * @object
     */
    data: {
        /**
         * @param {string} id
         * @param {{
         *      email?: string,
         *      emailRID?: string,
         *      emailOptin?: boolean,
         *      firstName?: string,
         *      lastName?: string,
         *      telephone?: string,
         *      gender?: number,
         *      birthday?: string,
         *      country?: string,
         *      city?: string,
         *      postalCode?: string,
         *      street?: string,
         *      streetNumber?: string,
         *      category?: Object.<number, string>
         * }?} data
         * @param {boolean?} validation
         * @returns {wtSmart.customer.data}
         */
        set: function(id, data, validation) {
            return wtSmart.customer.data;
        },
        /**
         * @param {string} id
         * @param {{
         *      email?: string,
         *      emailRID?: string,
         *      emailOptin?: boolean,
         *      firstName?: string,
         *      lastName?: string,
         *      telephone?: string,
         *      gender?: number,
         *      birthday?: string,
         *      country?: string,
         *      city?: string,
         *      postalCode?: string,
         *      street?: string,
         *      streetNumber?: string,
         *      category?: Object.<number, string>
         * }?} data
         * @param {boolean?} validation
         * @returns {wtSmart.customer.data}
         */
        add: function(id, data, validation) {
            return wtSmart.customer.data;
        },
        /**
         * @returns {{
         *      id: string,
         *      email: string,
         *      emailRID: string,
         *      emailOptin: boolean,
         *      firstName: string,
         *      lastName: string,
         *      telephone: string,
         *      gender: number,
         *      birthday: string,
         *      country: string,
         *      city: string,
         *      postalCode: string,
         *      street: string,
         *      streetNumber: string,
         *      validation: boolean,
         *      category: Object.<number, string>
         * }}
         */
        get: function() {
            return {
                id: '',
                email: '',
                emailRID: '',
                emailOptin: false,
                firstName: '',
                lastName: '',
                telephone: '',
                gender: 0,
                birthday: '',
                country: '',
                city: '',
                postalCode: '',
                street: '',
                streetNumber: '',
                validation: false,
                category: {}
            };
        },
        /**
         * @param {Array.<string>?} removeList
         * @returns {wtSmart.customer.data}
         */
        remove: function(removeList) {
            return wtSmart.customer.data;
        }
    },
    /**
     * @object
     */
    category: {
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.customer.category}
         */
        set: function(data) {
            return wtSmart.customer.category;
        },
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.customer.category}
         */
        add: function(data) {
            return wtSmart.customer.category;
        },
        /**
         * @returns {Object.<number, string>}
         */
        get: function() {
            return {};
        },
        /**
         * @param {Array.<number>?} removeList
         * @returns {wtSmart.customer.category}
         */
        remove: function(removeList) {
            return wtSmart.customer.category;
        }
    }
};

/* **********************************************
 *                                              *
 *                    ORDER                     *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.prototype.order = {
    /**
     * @object
     */
    data: {
        /**
         * @param {{
         *      value: number,
         *      id?: string,
         *      currency?: string,
         *      couponValue?: number,
         *      paymentMethod?: string,
         *      shippingService?: string,
         *      shippingSpeed?: string,
         *      shippingCosts?: number,
         *      grossMargin?: number,
         *      orderStatus?: string,
         *      parameter?: Object.<number, string>
         * }} data
         * @returns {wtSmart.order.data}
         */
        set: function(data) {
            return wtSmart.order.data;
        },
        /**
         * @param {{
         *      value?: number,
         *      id?: string,
         *      currency?: string,
         *      couponValue?: number,
         *      paymentMethod?: string,
         *      shippingService?: string,
         *      shippingSpeed?: string,
         *      shippingCosts?: number,
         *      grossMargin?: number,
         *      orderStatus?: string,
         *      parameter?: Object.<number, string>
         * }} data
         * @returns {wtSmart.order.data}
         */
        add: function(data) {
            return wtSmart.order.data;
        },
        /**
         * @returns {{
         *      value: number,
         *      id: string,
         *      currency: string,
         *      couponValue: number,
         *      paymentMethod: string,
         *      shippingService: string,
         *      shippingSpeed: string,
         *      shippingCosts: number,
         *      grossMargin: number,
         *      orderStatus: string,
         *      parameter: Object.<number, string>
         * }}
         */
        get: function() {
            return {
                value: 0,
                id: '',
                currency: '',
                couponValue: 0,
                paymentMethod: '',
                shippingService: '',
                shippingSpeed: '',
                shippingCosts: 0,
                grossMargin: 0,
                orderStatus: '',
                parameter: {}
            };
        },
        /**
         * @param {Array.<string>?} removeList
         * @returns {wtSmart.order.data}
         */
        remove: function(removeList) {
            return wtSmart.order.data;
        }
    },
    /**
     * @object
     */
    parameter: {
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.order.parameter}
         */
        set: function(data) {
            return wtSmart.order.parameter;
        },
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.order.parameter}
         */
        add: function(data) {
            return wtSmart.order.parameter;
        },
        /**
         * @returns {Object.<number, string>}
         */
        get: function() {
            return {};
        },
        /**
         * @param {Array.<number>?} removeList
         * @returns {wtSmart.order.parameter}
         */
        remove: function(removeList) {
            return wtSmart.order.parameter;
        }
    }
};

/* **********************************************
 *                                              *
 *                    PAGE                      *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.prototype.page = {
    /**
     * @object
     */
    data: {
        /**
         * @param {string} name
         * @param {{
         *      search?: string,
         *      numberSearchResults?: number,
         *      errorMessages?: string,
         *      paywall?: boolean,
         *      articleTitle?: string,
         *      contentTags?: string,
         *      title?: string,
         *      type?: string,
         *      length?: string,
         *      daysSincePublication?: number,
         *      testVariant?: string,
         *      testExperiment?: string,
         *      parameter?: Object.<number, string>,
         *      category?: Object.<number, string>,
         *      goal?: Object.<number, string>
         * }?} data
         * @returns {wtSmart.page.data}
         */
        set: function(name, data) {
            return wtSmart.page.data;
        },
        /**
         * @param {string} name
         * @param {{
         *      search?: string,
         *      numberSearchResults?: number,
         *      errorMessages?: string,
         *      paywall?: boolean,
         *      articleTitle?: string,
         *      contentTags?: string,
         *      title?: string,
         *      type?: string,
         *      length?: string,
         *      daysSincePublication?: number,
         *      testVariant?: string,
         *      testExperiment?: string,
         *      parameter?: Object.<number, string>,
         *      category?: Object.<number, string>,
         *      goal?: Object.<number, string>
         * }?} data
         * @returns {wtSmart.page.data}
         */
        add: function(name, data) {
            return wtSmart.page.data;
        },
        /**
         * @returns {{
         *      name: string,
         *      search: string,
         *      numberSearchResults: number,
         *      errorMessages: string,
         *      paywall: boolean,
         *      articleTitle: string,
         *      contentTags: string,
         *      title: string,
         *      type: string,
         *      length: string,
         *      daysSincePublication: number,
         *      testVariant: string,
         *      testExperiment: string,
         *      parameter: Object.<number, string>,
         *      category: Object.<number, string>,
         *      goal: Object.<number, string>
         * }}
         */
        get: function() {
            return {
                name: '',
                search: '',
                numberSearchResults: 0,
                errorMessages: '',
                paywall: false,
                articleTitle: '',
                contentTags: '',
                title: '',
                type: '',
                length: '',
                daysSincePublication: 0,
                testVariant: '',
                testExperiment: '',
                parameter: {},
                category: {},
                goal: {}
            };
        },
        /**
         * @param {Array.<string>?} removeList
         * @returns {wtSmart.page.data}
         */
        remove: function(removeList) {
            return wtSmart.page.data;
        }
    },
    /**
     * @object
     */
    parameter: {
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.page.parameter}
         */
        set: function(data) {
            return wtSmart.page.parameter;
        },
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.page.parameter}
         */
        add: function(data) {
            return wtSmart.page.parameter;
        },
        /**
         * @returns {Object.<number, string>}
         */
        get: function() {
            return {};
        },
        /**
         * @param {Array.<number>?} removeList
         * @returns {wtSmart.page.parameter}
         */
        remove: function(removeList) {
            return wtSmart.page.parameter;
        }
    },
    /**
     * @object
     */
    category: {
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.page.category}
         */
        set: function(data) {
            return wtSmart.page.category;
        },
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.page.category}
         */
        add: function(data) {
            return wtSmart.page.category;
        },
        /**
         * @returns {Object.<number, string>}
         */
        get: function() {
            return {};
        },
        /**
         * @param {Array.<number>?} removeList
         * @returns {wtSmart.page.category}
         */
        remove: function(removeList) {
            return wtSmart.page.category;
        }
    },
    /**
     * @object
     */
    goal: {
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.page.goal}
         */
        set: function(data) {
            return wtSmart.page.goal;
        },
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.page.goal}
         */
        add: function(data) {
            return wtSmart.page.goal;
        },
        /**
         * @returns {Object.<number, string>}
         */
        get: function() {
            return {};
        },
        /**
         * @param {Array.<number>?} removeList
         * @returns {wtSmart.page.goal}
         */
        remove: function(removeList) {
            return wtSmart.page.goal;
        }
    }
};


/* **********************************************
 *                                              *
 *                  PRODUCT                     *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.prototype.product = {
    /**
     * @private
     */
    ProductItem: {
        data: {
            /**
             * @param {{
             *      id?: string,
             *      cost?: number,
             *      quantity?: number,
             *      variant?: string,
             *      soldOut?: boolean,
             *      parameter?: Object.<number, string>,
             *      category?: Object.<number, string>
             * }} data
             * @returns {wtSmart.product.ProductItem.data}
             */
            add: function(data) {
                return wtSmart.product.ProductItem.data;
            },
            /**
             * @returns {{
             *      id: string,
             *      cost: number,
             *      quantity: number,
             *      variant: string,
             *      soldOut: boolean,
             *      parameter: Object.<number, string>,
             *      category: Object.<number, string>
             * }}
             */
            get: function() {
                return {
                    id: '',
                    cost: 0,
                    quantity: 0,
                    variant: '',
                    soldOut: false,
                    parameter: {},
                    category: {}
                }
            }
        },
        /**
         * @object
         */
        parameter: {
            /**
             * @param {Object.<number, string>} data
             * @returns {wtSmart.product.ProductItem.parameter}
             */
            set: function(data) {
                return wtSmart.product.ProductItem.parameter;
            },
            /**
             * @param {Object.<number, string>} data
             * @returns {wtSmart.product.ProductItem.parameter}
             */
            add: function(data) {
                return wtSmart.product.ProductItem.parameter;
            },
            /**
             * @returns {Object.<number, string>}
             */
            get: function() {
                return {};
            },
            /**
             * @param {Array.<number>?} removeList
             * @returns {wtSmart.product.ProductItem.parameter}
             */
            remove: function(removeList) {
                return wtSmart.product.ProductItem.parameter;
            }
        },
        /**
         * @object
         */
        category: {
            /**
             * @param {Object.<number, string>} data
             * @returns {wtSmart.product.ProductItem.parameter}
             */
            set: function(data) {
                return wtSmart.product.ProductItem.parameter;
            },
            /**
             * @param {Object.<number, string>} data
             * @returns {wtSmart.product.ProductItem.parameter}
             */
            add: function(data) {
                return wtSmart.product.ProductItem.parameter;
            },
            /**
             * @returns {Object.<number, string>}
             */
            get: function() {
                return {};
            },
            /**
             * @param {Array.<number>?} removeList
             * @returns {wtSmart.product.ProductItem.parameter}
             */
            remove: function(removeList) {
                return wtSmart.product.ProductItem.parameter;
            }
        }
    }
};

/* **********************************************
 *                                              *
 *                PRODUCT:LIST                  *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.product.list = {
    /**
     * @type {wtSmart.product.ProductItem[]}
     */
    products: [],
    /**
     * @object
     */
    data: {
        /**
         * @param {{
         *      id: string,
         *      cost?: number,
         *      quantity?: number,
         *      variant?: string,
         *      soldOut?: boolean,
         *      parameter?: Object.<number, string>,
         *      category?: Object.<number, string>
         * }[]} data
         * @returns {wtSmart.product.list.data}
         */
        set: function(data) {
            return wtSmart.product.list.data;
        },
        /**
         * @param {{
         *      id: string,
         *      cost?: number,
         *      quantity?: number,
         *      variant?: string,
         *      soldOut?: boolean,
         *      parameter?: Object.<number, string>,
         *      category?: Object.<number, string>
         * }[]} data
         * @returns {wtSmart.product.list.data}
         */
        add: function(data) {
            return wtSmart.product.list.data;
        },
        /**
         * @returns {{
         *      id: string,
         *      cost: number,
         *      quantity: number,
         *      variant: string,
         *      soldOut: boolean,
         *      parameter: Object.<number, string>,
         *      category: Object.<number, string>
         * }[]}
         */
        get: function() {
            return [];
        },
        /**
         * @param {string[]?} removeList
         * @returns {wtSmart.product.list.data}
         */
        remove: function(removeList) {
            return wtSmart.product.list.data;
        }
    },
    /**
     * @object
     */
    parameter: {
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.product.list.parameter}
         */
        set: function(data) {
            return wtSmart.product.list.parameter;
        },
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.product.list.parameter}
         */
        add: function(data) {
            return wtSmart.product.list.parameter;
        },
        /**
         * @returns {Object.<number, string>}
         */
        get: function() {
            return {};
        },
        /**
         * @param {Array.<number>?} removeList
         * @returns {wtSmart.product.list.parameter}
         */
        remove: function(removeList) {
            return wtSmart.product.list.parameter;
        }
    }
};

/* **********************************************
 *                                              *
 *                PRODUCT:VIEW                  *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.product.view = {
    /**
     * @type {wtSmart.product.ProductItem[]}
     */
    products: [],
    /**
     * @object
     */
    data: {
        /**
         * @param {{
         *      id: string,
         *      cost?: number,
         *      quantity?: number,
         *      variant?: string,
         *      soldOut?: boolean,
         *      parameter?: Object.<number, string>,
         *      category?: Object.<number, string>
         * }[]} data
         * @returns {wtSmart.product.view.data}
         */
        set: function(data) {
            return wtSmart.product.view.data;
        },
        /**
         * @param {{
         *      id: string,
         *      cost?: number,
         *      quantity?: number,
         *      variant?: string,
         *      soldOut?: boolean,
         *      parameter?: Object.<number, string>,
         *      category?: Object.<number, string>
         * }[]} data
         * @returns {wtSmart.product.view.data}
         */
        add: function(data) {
            return wtSmart.product.view.data;
        },
        /**
         * @returns {{
         *      id: string,
         *      cost: number,
         *      quantity: number,
         *      variant: string,
         *      soldOut: boolean,
         *      parameter: Object.<number, string>,
         *      category: Object.<number, string>
         * }[]}
         */
        get: function() {
            return [];
        },
        /**
         * @param {string[]?} removeview
         * @returns {wtSmart.product.view.data}
         */
        remove: function(removeview) {
            return wtSmart.product.view.data;
        }
    },
    /**
     * @object
     */
    parameter: {
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.product.view.parameter}
         */
        set: function(data) {
            return wtSmart.product.view.parameter;
        },
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.product.view.parameter}
         */
        add: function(data) {
            return wtSmart.product.view.parameter;
        },
        /**
         * @returns {Object.<number, string>}
         */
        get: function() {
            return {};
        },
        /**
         * @param {Array.<number>?} removeview
         * @returns {wtSmart.product.view.parameter}
         */
        remove: function(removeview) {
            return wtSmart.product.view.parameter;
        }
    }
};

/* **********************************************
 *                                              *
 *               PRODUCT:BASKET                 *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.product.basket = {
    /**
     * @type {wtSmart.product.ProductItem[]}
     */
    products: [],
    /**
     * @object
     */
    data: {
        /**
         * @param {{
         *      id: string,
         *      cost?: number,
         *      quantity?: number,
         *      variant?: string,
         *      soldOut?: boolean,
         *      parameter?: Object.<number, string>,
         *      category?: Object.<number, string>
         * }[]} data
         * @returns {wtSmart.product.basket.data}
         */
        set: function(data) {
            return wtSmart.product.basket.data;
        },
        /**
         * @param {{
         *      id: string,
         *      cost?: number,
         *      quantity?: number,
         *      variant?: string,
         *      soldOut?: boolean,
         *      parameter?: Object.<number, string>,
         *      category?: Object.<number, string>
         * }[]} data
         * @returns {wtSmart.product.basket.data}
         */
        add: function(data) {
            return wtSmart.product.basket.data;
        },
        /**
         * @returns {{
         *      id: string,
         *      cost: number,
         *      quantity: number,
         *      variant: string,
         *      soldOut: boolean,
         *      parameter: Object.<number, string>,
         *      category: Object.<number, string>
         * }[]}
         */
        get: function() {
            return [];
        },
        /**
         * @param {string[]?} removebasket
         * @returns {wtSmart.product.basket.data}
         */
        remove: function(removebasket) {
            return wtSmart.product.basket.data;
        }
    },
    /**
     * @object
     */
    parameter: {
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.product.basket.parameter}
         */
        set: function(data) {
            return wtSmart.product.basket.parameter;
        },
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.product.basket.parameter}
         */
        add: function(data) {
            return wtSmart.product.basket.parameter;
        },
        /**
         * @returns {Object.<number, string>}
         */
        get: function() {
            return {};
        },
        /**
         * @param {Array.<number>?} removebasket
         * @returns {wtSmart.product.basket.parameter}
         */
        remove: function(removebasket) {
            return wtSmart.product.basket.parameter;
        }
    }
};

/* **********************************************
 *                                              *
 *             PRODUCT:CONFIRMATION             *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.product.confirmation = {
    /**
     * @type {wtSmart.product.ProductItem[]}
     */
    products: [],
    /**
     * @object
     */
    data: {
        /**
         * @param {{
         *      id: string,
         *      cost?: number,
         *      quantity?: number,
         *      variant?: string,
         *      soldOut?: boolean,
         *      parameter?: Object.<number, string>,
         *      category?: Object.<number, string>
         * }[]} data
         * @returns {wtSmart.product.confirmation.data}
         */
        set: function(data) {
            return wtSmart.product.confirmation.data;
        },
        /**
         * @param {{
         *      id: string,
         *      cost?: number,
         *      quantity?: number,
         *      variant?: string,
         *      soldOut?: boolean,
         *      parameter?: Object.<number, string>,
         *      category?: Object.<number, string>
         * }[]} data
         * @returns {wtSmart.product.confirmation.data}
         */
        add: function(data) {
            return wtSmart.product.confirmation.data;
        },
        /**
         * @returns {{
         *      id: string,
         *      cost: number,
         *      quantity: number,
         *      variant: string,
         *      soldOut: boolean,
         *      parameter: Object.<number, string>,
         *      category: Object.<number, string>
         * }[]}
         */
        get: function() {
            return [];
        },
        /**
         * @param {string[]?} removeconfirmation
         * @returns {wtSmart.product.confirmation.data}
         */
        remove: function(removeconfirmation) {
            return wtSmart.product.confirmation.data;
        }
    },
    /**
     * @object
     */
    parameter: {
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.product.confirmation.parameter}
         */
        set: function(data) {
            return wtSmart.product.confirmation.parameter;
        },
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.product.confirmation.parameter}
         */
        add: function(data) {
            return wtSmart.product.confirmation.parameter;
        },
        /**
         * @returns {Object.<number, string>}
         */
        get: function() {
            return {};
        },
        /**
         * @param {Array.<number>?} removeconfirmation
         * @returns {wtSmart.product.confirmation.parameter}
         */
        remove: function(removeconfirmation) {
            return wtSmart.product.confirmation.parameter;
        }
    }
};

/* **********************************************
 *                                              *
 *                  SESSION                     *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.prototype.session = {
    /**
     * @object
     */
    data: {
        /**
         * @param {{
         *      loginStatus?: string,
         *      parameter?: Object.<number, string>
         * }} data
         * @returns {wtSmart.session.data}
         */
        set: function(data) {
            return wtSmart.session.data;
        },
        /**
         * @param {{
         *      loginStatus?: string,
         *      parameter?: Object.<number, string>
         * }} data
         * @returns {wtSmart.session.data}
         */
        add: function(data) {
            return wtSmart.session.data;
        },
        /**
         * @returns {{
         *      loginStatus: string,
         *      parameter: Object.<number, string>
         * }}
         */
        get: function() {
            return {
                loginStatus: '',
                parameter: {}
            };
        },
        /**
         * @param {Array.<string>?} removeList
         * @returns {wtSmart.session.data}
         */
        remove: function(removeList) {
            return wtSmart.session.data;
        }
    },
    /**
     * @object
     */
    parameter: {
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.session.parameter}
         */
        set: function(data) {
            return wtSmart.session.parameter;
        },
        /**
         * @param {Object.<number, string>} data
         * @returns {wtSmart.session.parameter}
         */
        add: function(data) {
            return wtSmart.session.parameter;
        },
        /**
         * @returns {Object.<number, string>}
         */
        get: function() {
            return {};
        },
        /**
         * @param {Array.<number>?} removeList
         * @returns {wtSmart.session.parameter}
         */
        remove: function(removeList) {
            return wtSmart.session.parameter;
        }
    }
};

/* **********************************************
 *                                              *
 *                    UTILS                     *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.prototype.utils = {
    /**
     * @object
     */
    browser: {
        /**
         * @returns {boolean}
         */
        isOpera: function() {
            return false;
        },
        /**
         * @returns {boolean}
         */
        isIE: function() {
            return false;
        },
        /**
         * @returns {boolean}
         */
        isMSIE: function() {
            return false;
        },
        /**
         * @returns {boolean}
         */
        isTrident: function() {
            return false;
        },
        /**
         * @returns {boolean}
         */
        isEdge: function() {
            return false;
        },
        /**
         * @returns {boolean}
         */
        isFirefox: function() {
            return false;
        },
        /**
         * @returns {boolean}
         */
        isSafari: function() {
            return false;
        },
        /**
         * @returns {boolean}
         */
        isChrome: function() {
            return false;
        },
        /**
         * @returns {boolean}
         */
        isPhantom: function() {
            return false;
        }
    },
    /**
     * @object
     */
    crypto: {
        /**
         * @object
         */
        URL: {
            /**
             * @param {string} str
             * @returns {string}
             */
            encode: function(str) {
                return '';
            },
            /**
             * @param {string} str
             * @returns {string}
             */
            decode: function(str) {
                return '';
            }
        },
        /**
         * @object
         */
        SHA256: {
            /**
             * @param {string} str
             * @returns {string}
             */
            encode: function(str) {
                return '';
            }
        },
        /**
         * @object
         */
        MD5: {
            /**
             * @param {string} str
             * @returns {string}
             */
            encode: function(str) {
                return '';
            }
        }
    },
    /**
     * @object
     */
    identifier: {
        /**
         * @variation 1
         * @returns {string}
         */
        everId: function() {
            return '';
        },
        /**
         * @variation 2
         * @param {string} everId
         * @returns {string}
         */
        everId: function(everId) {
            return '';
        },
        /**
         * @returns {string}
         */
        cdbeid: function() {
            return '';
        }
    },
    /**
     * @object
     */
    event: {
        /**
         * @param {HTMLElement} obj
         * @param {string} evt
         * @param {function(evt: Event)} fn
         */
        register: function(obj, evt, fn) {
            // ...
        },
        /**
         * @param {HTMLElement} obj
         * @param {string} evt
         * @param {function(evt: Event)} fn
         */
        unregister: function(obj, evt, fn) {
            // ...
        }
    },
    /**
     * @variation 1
     * @param {string} name
     * @returns {string}
     */
    cookie: function(name) {
        return '';
    },
    /**
     * @variation 2
     * @param {string} name
     * @param {string} value
     * @param {number?} duration
     * @param {string?} path
     * @param {string?} domain
     * @param {boolean?} secure
     * @returns {boolean}
     */
    cookie: function(name, value, duration, path, domain, secure) {
        return false;
    },
    /**
     * @param {string} imageURL
     * @param {function(img: HTMLElement, status: string, duration: number)?} callback
     * @param {number?} timeout
     */
    image: function(imageURL, callback, timeout) {
        // ...
    },
    /**
     * @variation 1
     * @param {string|{src: string, required?: boolean}[]} scriptURL
     * @param {function()?} callback
     */
    include: function(scriptURL, callback) {
        // ...
    },
    /**
     * @param {string} parameter
     * @param {string?} url
     * @param {*?} def
     * @returns {*}
     */
    parameter: function(parameter, url, def) {
        return '';
    },
    /**
     * @variation 1
     * @returns {string}
     */
    referrer: function() {
        return '';
    },
    /**
     * @variation 2
     * @param {string} referrerURL
     */
    referrer: function(referrerURL) {
        // ...
    },
    /**
     * @variation 1
     * @returns {string}
     */
    url: function() {

    },
    /**
     * @variation 2
     * @param {string} urlString
     */
    url: function(urlString) {
        // ...
    }
};

/* **********************************************
 *                                              *
 *                  EXTENSION                   *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.prototype.extension = {
    /**
     * @number
     */
    length: 0,
    /**
     * @param {function(instance: wtSmart): {
     *      name: string,
     *      version: string
     * }} ext
     * @returns {wtSmart.extension}
     */
    push: function(ext) {
        return wtSmart.extension;
    },
    /**
     * @returns {object}
     */
    get: function() {
        return {};
    },
    /**
     * @param {string} extensionName
     * @returns {wtSmart.extension}
     */
    remove: function(extensionName) {
        return wtSmart.extension;
    }
};

/* **********************************************
 *                                              *
 *               EXTENSION:ACTION               *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.extension.action = {
    /**
     * @string
     */
    name: '',
    /**
     * @string
     */
    version: '',
    /**
     * @variation 1
     * @returns {{
     *      type: string,
     *      attribute: string,
     *      parameter: Object.<number, string>,
     *      extend: string[],
     *      replace: {
     *          pattern: RegExp,
     *          replacement: string
     *      }[],
     *      ignore: RegExp,
     *      delay: boolean,
     *      delayDuration: number,
     *      noDelayAttribute: string
     * }}
     */
    config: function() {
        return {
            type: '',
            attribute: '',
            parameter: {},
            extend: [],
            replace: [],
            ignore: /(?:)/,
            delay: false,
            delayDuration: 0,
            noDelayAttribute: ''
        };
    },
    /**
     * @variation 2
     * @param {{
     *      type: string,
     *      attribute?: string,
     *      parameter?: Object.<number, string>,
     *      extend?: string[],
     *      replace?: {
     *          pattern: RegExp,
     *          replacement: string
     *      }[],
     *      ignore?: RegExp,
     *      delay?: boolean,
     *      delayDuration?: number,
     *      noDelayAttribute?: string
     * }} data
     */
    config: function(data) {
        // ...
    },
    /**
     * @returns {boolean}
     */
    isActivated: function() {
        return false;
    },
    /**
     *
     */
    activate: function() {
        // ...
    },
    /**
     *
     */
    deactivate: function() {
        // ...
    },
    /**
     *
     */
    reload: function() {
        // ...
    }
};

/* **********************************************
 *                                              *
 *                EXTENSION:CDB                 *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.extension.cdb = {
    /**
     * @string
     */
    name: '',
    /**
     * @string
     */
    version: '',
    /**
     * @param {{
     *      started?: boolean,
     *      timeout?: number,
     *      location?: string
     * }} data
     */
    config: function(data) {
        // ...
    },
    /**
     * @param {string} email
     */
    setEmail: function(email) {
        // ...
    },
    /**
     * @param {string} phone
     */
    setPhone: function(phone) {
        // ...
    },
    /**
     * @param {string} address
     */
    setAddress: function(address) {
        // ...
    },
    /**
     * @param {string} android
     */
    setAndroid: function(android) {
        // ...
    },
    /**
     * @param {string} ios
     */
    setIOS: function(ios) {
        // ...
    },
    /**
     * @param {string} windows
     */
    setWindows: function(windows) {
        // ...
    },
    /**
     * @param {string} facebook
     */
    setFacebook: function(facebook) {
        // ...
    },
    /**
     * @param {string} twitter
     */
    setTwitter: function(twitter) {
        // ...
    },
    /**
     * @param {string} google
     */
    setGoogle: function(google) {
        // ...
    },
    /**
     * @param {string} linkedIn
     */
    setLinkedIn: function(linkedIn) {
        // ...
    },
    /**
     *
     */
    setCriteo: function() {
        // ...
    },
    /**
     *
     */
    setAMP: function() {
        // ...
    },
    /**
     * @param {string} adClearTrackId
     * @param {string} adClearTrackDomain
     */
    setAdClear: function(adClearTrackId, adClearTrackDomain) {
        // ...
    },
    /**
     * @param {number} id
     * @param {string} custom
     */
    setCustom: function(id, custom) {
        // ...
    }
};

/* **********************************************
 *                                              *
 *         EXTENSION:CONTENT_ENGAGEMENT         *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.extension.content_engagement = {
    /**
     * @string
     */
    name: '',
    /**
     * @string
     */
    version: '',
    /**
     * @variation 1
     * @returns {{
     *      percentageStepsInAnalytics: number,
     *      sendContentEngagement: number,
     *      percentageReached: number,
     *      secondsReached: number,
     *      largeBrowserResolution: number,
     *      largeBrowserSeconds: number,
     *      mediumBrowserResolution: number,
     *      mediumBrowserSeconds: number,
     *      smallBrowserResolution: number,
     *      smallBrowserSeconds: number
     * }}
     */
    config: function() {
        return {
            percentageStepsInAnalytics: 5,
            sendContentEngagement: 0,
            percentageReached: 25,
            secondsReached: 30,
            largeBrowserResolution: 1080,
            largeBrowserSeconds: 20,
            mediumBrowserResolution: 700,
            mediumBrowserSeconds: 10,
            smallBrowserResolution: 400,
            smallBrowserSeconds: 5
        };
    },
    /**
     * @variation 2
     * @param {{
     *      percentageStepsInAnalytics: number,
     *      sendContentEngagement: number,
     *      percentageReached: number,
     *      secondsReached: number,
     *      largeBrowserResolution: number,
     *      largeBrowserSeconds: number,
     *      mediumBrowserResolution: number,
     *      mediumBrowserSeconds: number,
     *      smallBrowserResolution: number,
     *      smallBrowserSeconds: number
     * }} data
     */
    config: function(data) {
        // ...
    },
    /**
     * @returns {boolean}
     */
    isActivated: function() {
        return false;
    },
    /**
     *
     */
    activate: function() {
        // ...
    },
    /**
     *
     */
    deactivate: function() {
        // ...
    }
};

/* **********************************************
 *                                              *
 *           EXTENSION:COOKIE_CONTROL           *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.extension.cookie_control = {
    /**
     * @string
     */
    name: '',
    /**
     * @string
     */
    version: '',
    /**
     * @variation 1
     * @returns {{
     *      action: string,
     *      lifeTime: string,
     *      duration: number,
     *      currentTrackId: string,
     *      currentTrackDomain: string,
     *      oldTrackId: string,
     *      oldTrackDomain: string
     * }}
     */
    config: function() {
        return {
            action: '',
            lifeTime: '',
            duration: 180,
            currentTrackId: '',
            currentTrackDomain: '',
            oldTrackId: '',
            oldTrackDomain: ''
        };
    },
    /**
     * @variation 2
     * @param {{
     *      action: string,
     *      lifeTime: string,
     *      duration?: number,
     *      currentTrackId?: string,
     *      currentTrackDomain?: string,
     *      oldTrackId: string,
     *      oldTrackDomain: string
     * }} data
     */
    config: function(data) {
        // ...
    },
    /**
     * @returns {boolean}
     */
    isActivated: function() {
        return false;
    },
    /**
     *
     */
    activate: function() {
        // ...
    },
    /**
     *
     */
    deactivate: function() {
        // ...
    }
};

/* **********************************************
 *                                              *
 *            EXTENSION:IDENTIFIER              *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.extension.identifier = {
    /**
     * @string
     */
    name: '',
    /**
     * @string
     */
    version: ''
};

/* **********************************************
 *                                              *
 *                EXTENSION:FORM                *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.extension.form = {
    /**
     * @string
     */
    name: '',
    /**
     * @string
     */
    version: '',
    /**
     * @variation 1
     * @returns {{
     *      attribute: string,
     *      fullContent: string[],
     *      anonymous: boolean,
     *      pathAnalysis: boolean,
     *      field: {
     *          attribute: string,
     *          value: string,
     *          defaults: Object.<string, string>
     *      }
     * }}
     */
    config: function() {
        return {
            attribute: '',
            fullContent: [],
            anonymous: false,
            pathAnalysis: false,
            field: {
                attribute: '',
                value: '',
                defaults: {}
            }
        };
    },
    /**
     * @variation 1
     * @param {{
     *      attribute: string,
     *      fullContent?: string[],
     *      anonymous?: boolean,
     *      pathAnalysis?: boolean,
     *      field?: {
     *          attribute: string,
     *          value: string,
     *          defaults?: Object.<string, string>
     *      }
     * }} data
     */
    config: function(data) {
        // ...
    },
    /**
     * @param {HTMLFormElement|wtSmart.extension.form.CustomForm} formObject
     */
    add: function(formObject) {
        // ...
    },
    /**
     * @param {HTMLFormElement|wtSmart.extension.form.CustomForm} formObject
     * @returns {HTMLFormElement|wtSmart.extension.form.CustomForm|boolean}
     */
    get: function(formObject) {
        return false;
    },
    /**
     * @param {HTMLFormElement|wtSmart.extension.form.CustomForm} formObject
     */
    remove: function(formObject) {
        // ...
    },
    /**
     * @param {HTMLFormElement|wtSmart.extension.form.CustomForm} formObject
     */
    send: function(formObject) {
        // ...
    },
    /**
     * @param {HTMLFormElement|wtSmart.extension.form.CustomForm} formObject
     */
    submit: function(formObject) {
        // ...
    },
    /**
     * @returns {HTMLFormElement[]|wtSmart.extension.form.CustomForm[]}
     */
    getAll: function() {
        return [];
    },
    removeAll: function() {
        // ...
    },
    sendAll: function() {
        // ...
    }
};

/* **********************************************
 *                                              *
 *        EXTENSION:FORM:CUSTOMFORMFIELD        *
 *                                              *
 ********************************************** */
/**
 * @class
 * @constructor
 * @param {string} name
 * @param {string?} value
 */
wtSmart.extension.form.CustomFormField = function(name, value) {
    /**
     * @string
     */
    this.name = name;
    /**
     * @string
     */
    this.value = value;
    /**
     * @param {string} key
     * @param {string} value
     */
    this.setAttribute = function(key, value) {
        // ...
    };
    /**
     * @param {string} key
     * @returns {string}
     */
    this.getAttribute = function(key) {
        return '';
    };
    /**
     *
     */
    this.focus = function() {
        // ...
    };
    /**
     *
     */
    this.blur = function() {
        // ...
    };
    /**
     * @param {string} evt
     * @param {function()} func
     */
    this.addEventListener = function(evt, func) {
        // ...
    };
    /**
     * @param {string} evt
     */
    this.removeEventListener = function(evt) {
        // ...
    };
};

/* **********************************************
 *                                              *
 *           EXTENSION:FORM:CUSTOMFORM          *
 *                                              *
 ********************************************** */
/**
 * @class
 * @constructor
 * @param {string} name
 * @param {HTMLElement[]|wtSmart.extension.form.CustomFormField[]?} elements
 */
wtSmart.extension.form.CustomForm = function(name, elements) {
    /**
     * @string
     */
    this.name = name;
    /**
     * @type {HTMLElement[]}
     * @type {wtSmart.extension.form.CustomFormField[]}
     */
    this.elements = elements;
    /**
     * @param {HTMLElement|wtSmart.extension.form.CustomFormField} element
     * @returns {wtSmart.extension.form.CustomForm}
     */
    this.add = function(element) {
        return this;
    };
    /**
     * @param {string} key
     * @param {string} value
     */
    this.setAttribute = function(key, value) {
        // ...
    };
    /**
     * @param {string} key
     * @returns {string}
     */
    this.getAttribute = function(key) {
        return '';
    };
    /**
     *
     */
    this.submit = function() {
        // ...
    };
    /**
     * @param {string} evt
     * @param {function()} func
     */
    this.addEventListener = function(evt, func) {

    };
    /**
     * @param {string} evt
     */
    this.removeEventListener = function(evt) {

    };
};

/* **********************************************
 *                                              *
 *                EXTENSION:MEDIA               *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.extension.media = {
    /**
     * @string
     */
    name: '',
    /**
     * @string
     */
    version: ''
};

/* **********************************************
 *                                              *
 *         EXTENSION:MEDIA:MEDIASESSION         *
 *                                              *
 ********************************************** */
/**
 * @class
 * @constructor
 * @param {string} name
 */
wtSmart.extension.media.MediaSession = function(name) {
    /**
     * @param {number} total
     */
    this.setTotalTime = function(total) {
        // ...
    };
    /**
     * @param {number} bandwidth
     */
    this.setBandwidth = function(bandwidth) {
        // ...
    };
    /**
     * @param {number} volume
     */
    this.setVolume = function(volume) {
        // ...
    };
    /**
     * @param {Object.<number, string>} category
     */
    this.setCategory = function(category) {
        // ...
    };
    /**
     *
     */
    this.mute = function() {
        // ...
    };
    /**
     *
     */
    this.unMute = function() {
        // ...
    };
    /**
     * @param {number} current
     * @param {Object.<number, string>?} parameter
     */
    this.play = function(current, parameter) {
        // ...
    };
    /**
     * @param {number} current
     * @param {Object.<number, string>?} parameter
     */
    this.pause = function(current, parameter) {
        // ...
    };
    /**
     * @param {number} current
     * @param {Object.<number, string>?} parameter
     */
    this.stop = function(current, parameter) {
        // ...
    };
    /**
     * @param {number} current
     * @param {Object.<number, string>?} parameter
     */
    this.position = function(current, parameter) {
        // ...
    };
    /**
     * @param {number} current
     * @param {Object.<number, string>?} parameter
     */
    this.seek = function(current, parameter) {
        // ...
    };
    /**
     * @param {number} current
     * @param {Object.<number, string>?} parameter
     */
    this.end = function(current, parameter) {
        // ...
    };
    /**
     * @param {string} action
     * @param {number} current
     * @param {Object.<number, string>?} parameter
     */
    this.custom = function(action, current, parameter) {
        // ...
    };
    /**
     * @returns {number}
     */
    this.getPositionInterval = function() {
        // ...
    };
};

/* **********************************************
 *                                              *
 *        EXTENSION:MEDIA:PAGE_LOAD_TIME        *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.extension.page_load_time = {
    /**
     * @string
     */
    name: '',
    /**
     * @string
     */
    version: '',
    /**
     * @returns {boolean}
     */
    isActivated: function() {
        return false;
    },
    /**
     *
     */
    activate: function() {
        // ...
    },
    /**
     *
     */
    deactivate: function() {
        // ...
    }
};

/* **********************************************
 *                                              *
 *       EXTENSION:MEDIA:SCROLL_POSITION        *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.extension.scroll_position = {
    /**
     * @string
     */
    name: '',
    /**
     * @string
     */
    version: '',
    /**
     * @variation 1
     * @returns {{
     *      roundResult: boolean,
     *      pageHeight: string,
     *      sendAsFigure: string
     * }}
     */
    config: function() {
        return {
            roundResult: true,
            pageHeight: '',
            sendAsFigure: ''
        };
    },
    /**
     * @variation 2
     * @param {{
     *      roundResult?: boolean,
     *      pageHeight?: string,
     *      sendAsFigure?: string
     * }} data
     */
    config: function(data) {
        // ...
    },
    /**
     * @returns {boolean}
     */
    isActivated: function() {
        return false;
    },
    /**
     *
     */
    activate: function() {
        // ...
    },
    /**
     *
     */
    deactivate: function() {
        // ...
    }
};

/* **********************************************
 *                                              *
 *       EXTENSION:MEDIA:CAMPAIGN_MAPPER        *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.extension.campaign_mapper = {
    /**
     * @string
     */
    name: '',
    /**
     * @string
     */
    version: '',
    /**
     * @variation 1
     * @returns {{
     *      parameter: string[],
     *      separator: string,
     *      mediaCode: string,
     *      replacerValue: string,
     *      findAllParameter: boolean,
     *      replacerRegExp: RegExp
     * }[]}
     */
    config: function() {
        return [];
    },
    /**
     * @variation 2
     * @param {{
     *      parameter: string[],
     *      separator: string,
     *      mediaCode: string,
     *      replacerValue?: string,
     *      findAllParameter?: boolean,
     *      replacerRegExp?: RegExp
     * }[]} data
     */
    config: function(data) {
        // ...
    },
    /**
     * @returns {boolean}
     */
    isActivated: function() {
        return false;
    },
    /**
     *
     */
    activate: function() {
        // ...
    },
    /**
     *
     */
    deactivate: function() {
        // ...
    }
};

/* **********************************************
 *                                              *
 *     EXTENSION:MEDIA:MARKETING_AUTOMATION     *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.extension.marketing_automation = {
    /**
     * @string
     */
    name: '',
    /**
     * @string
     */
    version: '',
    /**
     * @variation 1
     * @returns {{
     *      trackId: string,
     *      mediacode: string[],
     *      keyword: string[],
     *      baseUrl: string,
     *      widgetServiceUrl: string
     * }}
     */
    config: function() {
        return {
            trackId: '',
            mediacode: [],
            keyword: [],
            baseUrl: '',
            widgetServiceUrl: ''
        };
    },
    /**
     * @variation 2
     * @param {{
     *      trackId?: string,
     *      mediacode?: string[],
     *      keyword?: string[],
     *      baseUrl?: string,
     *      widgetServiceUrl?: string
     * }} data
     */
    config: function(data) {
        // ...
    },
    /**
     * @returns {boolean}
     */
    isActivated: function() {
        return false;
    },
    /**
     *
     */
    activate: function() {
        // ...
    },
    /**
     *
     */
    deactivate: function() {
        // ...
    }
};

/* **********************************************
 *                                              *
 *       EXTENSION:MEDIA:TEASER_TRACKING        *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.extension.teaser_tracking = {
    /**
     * @string
     */
    name: '',
    /**
     * @string
     */
    version: '',
    /**
     * @variation 1
     * @returns {{
     *      viewPercent: number,
     *      viewTime: number,
     *      attribution: string,
     *      maxSendTeasers: {
     *          session: number,
     *          page: number
     *      },
     *      clearConversions: boolean,
     *      autoEngagements: boolean
     * }}
     */
    config: function() {
        return {
            viewPercent: 0,
            viewTime: 0,
            attribution: '',
            maxSendTeasers: {
                session: 0,
                page: 0
            },
            clearConversions: false,
            autoEngagements: false
        };
    },
    /**
     * @variation 2
     * @param {{
     *      viewPercent?: number,
     *      viewTime?: number,
     *      attribution?: string,
     *      maxSendTeasers?: {
     *          session?: number,
     *          page?: number
     *      },
     *      clearConversions?: boolean,
     *      autoEngagements?: boolean
     * }} data
     */
    config: function(data) {
        // ...
    },
    /**
     * @returns {boolean}
     */
    isActivated: function() {
        return false;
    },
    /**
     *
     */
    activate: function() {
        // ...
    },
    /**
     *
     */
    deactivate: function() {
        // ...
    },
    /**
     *
     */
    update: function() {
        // ...
    }
};

/* **********************************************
 *                                              *
 *    EXTENSION:MEDIA:PRODUCT_LIST_TRACKING     *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.extension.product_list_tracking = {
    /**
     * @string
     */
    name: '',
    /**
     * @string
     */
    version: '',
    /**
     * @variation 1
     * @returns {{
     *      viewPercent: number,
     *      viewTime: number,
     *      sampling: number,
     *      maxSendProducts: {
     *          session: number,
     *          page: number
     *      },
     *      sendMultipleProductViews: boolean
     * }}
     */
    config: function() {
        return {
            viewPercent: 0,
            viewTime: 0,
            sampling: 0,
            maxSendProducts: {
                session: 0,
                page: 0
            },
            sendMultipleProductViews: false
        };
    },
    /**
     * @variation 2
     * @param {{
     *      viewPercent?: number,
     *      viewTime?: number,
     *      sampling?: number,
     *      maxSendProducts?: {
     *          session?: number,
     *          page?: number
     *      },
     *      sendMultipleProductViews?: boolean
     * }} data
     */
    config: function(data) {
        // ...
    },
    /**
     * @returns {boolean}
     */
    isActivated: function() {
        return false;
    },
    /**
     *
     */
    activate: function() {
        // ...
    },
    /**
     *
     */
    deactivate: function() {
        // ...
    },
    /**
     *
     */
    update: function() {
        // ...
    }
};
