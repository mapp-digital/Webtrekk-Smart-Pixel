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
 *              EXTENSION:ABTASTY               *
 *                                              *
 ********************************************** */
/**
 * @object
 */
wtSmart.extension.abtasty = {
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
     *      parameterIdVariation: string
     * }}
     */
    config: function() {
        return {
            parameterIdVariation: ''
        };
    },
    /**
     * @variation 2
     * @param {{
     *      parameterIdVariation?: string
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
