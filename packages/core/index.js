/**
 * @type {exports|module.exports}
 */
if (process.env.MAPP_DEBUG) {
    module.exports = require('./dist/smart-pixel.debug');
}
else {
    module.exports = require('./dist/smart-pixel.min');
}
