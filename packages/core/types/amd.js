/**
 * @file Webtrekk provides a high-end analytical tool to analyze the traffic on your website, identify success factors and optimize it on the basis of actual key indicators.
 * @author Webtrekk GmbH
 *
 * @module wtSmart
 */
define('wtSmart', function() {
    /**
     * @exports wtSmart
     */
    return {
        /**
         * @param {Window} window
         * @param {Document} document
         * @returns {wtSmart}
         */
        use: function(window, document) {
            return wtSmart;
        }
    };
});
