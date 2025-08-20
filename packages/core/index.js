/**
 * @type {exports|module.exports}
 */
if (process.env.NODE_ENV === 'development') {
    module.exports = require('./dist/smart-pixel.debug');
}
else if (process.env.NODE_ENV === 'MAPP_BEBUGGER') {
    module.exports = require('./dist/smart-pixel.debugger');
}
else {
    module.exports = require('./dist/smart-pixel.min');
}
