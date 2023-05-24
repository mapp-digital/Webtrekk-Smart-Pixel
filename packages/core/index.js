/**
 * @type {exports|module.exports}
 */
if (process.env.NODE_ENV === 'development') {
    module.exports = require('./dist/smart-pixel.debug');
}
else {
    module.exports = require('./dist/smart-pixel.min');
}
