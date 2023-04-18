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
const wtSmart = wtSmart || {};

/* **********************************************
 *                                              *
 *              EXTENSION:YOUTUBE               *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.extension.youtube = {
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
     * }}
     */
    config: function() {
        return {
        };
    },
    /**
     * @variation 2
     * @param {{
     *      title?: string|function|object,
     *      categories?: string|function|object,
     *      action?: string|function|object
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
