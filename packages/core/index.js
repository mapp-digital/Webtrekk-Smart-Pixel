/**
 * @type {exports|module.exports}
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/smart-pixel.min');
}
else {
    module.exports = require('./dist/smart-pixel.debug');
}
