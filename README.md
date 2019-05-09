# Webtrekk Smart Pixel

[Site](https://www.webtrekk.com/) |
[Docs](https://docs.webtrekk.com/display/WSP/) |
[Support](https://support.webtrekk.com/) |
[Changelog](./CHANGELOG.md) |

## Download

 * [minified](./lib/smart-pixel.min.js)
 * [debug](./lib/smart-pixel.debug.js)

## Installation

In a browser:

```html
<!-- load via loader -->
<script type="text/javascript" async src="lib/loader.min.js"></script>

<!-- load the minified build -->
<script type="text/javascript" async src="lib/smart-pixel.min.js"></script>

<!-- load the debug build -->
<script type="text/javascript" async src="lib/smart-pixel.debug.js"></script>
```

Using npm:

```shell
$ npm i -g npm
$ npm i lodash
```

In Node.js:

```js
// load the minified build
var webtrekkSmartPixel = require('webtrekk-smart-pixel');

// load the debug build
var webtrekkSmartPixel = require('webtrekk-smart-pixel/debug');

// initializise webtrekk-smart-pixel with window and document
var wtSmart = webtrekkSmartPixel.use(window, window.document);
```