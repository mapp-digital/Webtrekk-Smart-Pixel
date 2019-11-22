/**
 * @type {{
 *      use: function(window: Window, document: Document): wtSmart
 * }}
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/smart-pixel.min');
}
else {
    module.exports = require('./dist/smart-pixel.debug');
}
