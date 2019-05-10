/**
 * @file Webtrekk provides a high-end analytical tool to analyze the traffic on your website, identify success factors and optimize it on the basis of actual key indicators.
 * @author Webtrekk GmbH
 *
 * @module wtSmart
 */
/**
 * @type {{
 *      use: function(window: Window, document: Document): wtSmart
 * }}
 */
export default {
    /**
     * @param {Window} window
     * @param {Document} document
     * @returns {wtSmart}
     */
    use: function(window, document) {
        return wtSmart;
    }
};
