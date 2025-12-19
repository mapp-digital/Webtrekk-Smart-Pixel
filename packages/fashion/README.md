# Smart Tracking Pixel - Fashion

[Site](https://mapp.com/) |
[Documentation](https://docs.mapp.com/) |
[Changelog](./CHANGELOG.md)

We help fashion We help fashion retailers deliver highly personalized experiences across all touchpoints – online, 
in-store, and through marketing channels. Our technology predicts what each shopper will buy and keep, 
driving satisfaction, conversion, and long-term loyalty. For more details, please visit 
the [Mapp documentation platform](https://docs.mapp.com/docs/overview-documentation).

## Integration

### Download

You can find the package on our [Github page](https://github.com/mapp-digital/sdk-pixel-smart-pixel-sdk/blob/SDK-1440-fashion-plugin/packages/fashion/dist/smart-pixel-fashion.min.js) 
or [Mapp CDN](https://mate-int-01.nbg.webtrekk.com/mcp/pixel/js/latest/smart-pixel-fashion.min.js).

#### Browser

The Mapp Fashion extension file should ideally be integrated directly into the header area of the page after the Smart Pixel.

```xml
<html>
    <head>
        <title>Homepage</title>
        <script type="text/javascript" async src="js/smart-pixel-loader.min.js"></script>
        <script type="text/javascript" async src="js/smart-pixel-fashion.min.js"></script>
    </head>
    <body>
        The content of your website is placed here.
    </body>
</html>
```

#### RequireJS

```javascript
requirejs(['wtSmart', 'wtSmartFashion'], function(wtSmart, wtSmartFashion) {
    window.wtSmart = window.wtSmart ? window.wtSmart : wtSmart.use(window, window.document);
    window.wtSmart.push(wtSmartFashion.use);

    // do tracking stuff here
});
```

# Methods

## config

Set and get the current configuration of the extension.

- **host**: Here, you must enter the host name that we provide you during your onboarding process.
- **namespaceId**: UUID will be provided by Mapp Fashion.
- **mapping**:
  - **productCode**: Enter the ID of the product parameter that should be used as product SKU (unique item identifier). _Default is the Smart Pixel product ID_.
  - **sku**: Enter the ID of the product parameter that should be used as product code or variant identifier (for example, style or group code). _Default is the Smart Pixel product ID_.
  - **name**: Enter the ID of the product parameter that should be used as product name. _Default is the Smart Pixel product ID_.
  - **category**: Enter the ID of the product parameter that should be used as product category.
  - **tax**: Enter the ID of the product parameter that should be used as tax amount.

```javascript
/**
 * @param {{
 *      host: string,
 *      namespaceId: string,
 *      mapping: {
 *          productCode: string,
 *          sku: string,
 *          name: string,
 *          category: string,
 *          tax: string
 *      }
 * }} [config]
 *
 * @returns {object}
 */
wtSmart.extension.fashion.config(config);
```

## isActivated

Get the status, if the extension is enabled.

```javascript
/**
 * @returns {boolean}
 */
wtSmart.extension.fashion.isActivated();
```

## activate

Activate the extension.

```javascript
wtSmart.extension.fashion.activate();
```

## deactivate

Deactivate the extension.

```javascript
wtSmart.extension.fashion.deactivate();
```

# Example

```javascript
window.wtSmart = window.wtSmart || [];
window.wtSmart.push(function(wtSmart) {
    // is fashion activated
    var isActivated = wtSmart.extension.fashion.isActivated();
    
    // set fashion config
    wtSmart.extension.fashion.config({
        host: 'https://fashion.example.com',
        namespaceId: '00000000-0000-0000-0000-000000000000',
        mapping: {
            productCode: '5',
            sku: '8',
            name: '1',
            category: '7',
            tax: '9'
        }
    });
    
    // get fashion config
    var fashionConfig = wtSmart.extension.fashion.config();
    
    // activate fashion
    wtSmart.extension.fashion.activate();
    
    // deactivate fashion
    wtSmart.extension.fashion.deactivate();
});
```
