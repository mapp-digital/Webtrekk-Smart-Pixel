<a name="1.4.5"></a>
# 1.4.5 (2024-04-25)

## Features
- The merging of products can be deactivated (see [Advanced](https://documentation.mapp.com/latest/en/advanced-15741253.html))
- Possibility to force a new session (see [forceNewSession](https://documentation.mapp.com/latest/en/utils-15741396.html#id-.SMPUtilsv1.0-Identifier))

## Optimization
- Replacement of the deprecated event 'unload' by 'pagehide'

<a name="1.4.4"></a>
# 1.4.4 (2023-08-22)

## Bug Fixes
- The order value is only sent if it is set active

<a name="1.4.3"></a>
# 1.4.3 (2023-08-17)

## Features
- New product status added (see [addToCart](https://documentation.mapp.com/latest/en/addtocart-50302651.html), [deleteFromCart](https://documentation.mapp.com/latest/en/deletefromcart-50302661.html), [checkout](https://documentation.mapp.com/latest/en/checkout-50302670.html), [addToWishlist](https://documentation.mapp.com/latest/en/addtowishlist-50302679.html) and [deleteFromWishlist](https://documentation.mapp.com/latest/en/deletefromwishlist-50302689.html))
- Support product status in Product-List-Tracking and Marketing Automation extension
- Support order value of 0

## Optimization
- Smart Pixel file size reduction
- Removing the CDB functionality

## Bug Fixes
- When a conversion is sent by events, teaser and product list data is now added as well
- If click tracking via exclude is disabled in teaser tracking, all found elements are excluded

<a name="1.4.2"></a>
# 1.4.2 (2023-06-27)

## Bug Fixes
- Requests are not sent when the user leaves the site (iOS 15+)

<a name="1.4.1"></a>
# 1.4.1 (2023-06-05)

## Bug Fixes
- Content Engagement fired requests when element is removed (React and VueJS)

<a name="1.4.0"></a>
# 1.4.0 (2023-05-24)

## Bug Fixes
- Duplicate build (debug and min) with webpack

<a name="1.3.9"></a>
# 1.3.9 (2023-05-22)

## Features
- Support temporary session ID for anonymous tracking (see [Advanced](https://documentation.mapp.com/latest/en/advanced-15741253.html)).
- Option to disable the debug mode when using NodeJS (see [Download and Integration](https://documentation.mapp.com/latest/en/download-and-integration-15741234.html)).
- Support tracking of shadow DOM elements (see [Event tracking](https://documentation.mapp.com/latest/en/event-tracking-15741311.html), [Form tracking](https://documentation.mapp.com/latest/en/form-tracking-15741328.html), [Content Engagement](https://documentation.mapp.com/latest/en/content-engagement-15741314.html), [Product List Tracking](https://documentation.mapp.com/latest/en/product-list-tracking-15741357.html) and [Teaser Tracking](https://documentation.mapp.com/latest/en/teaser-tracking-15741363.html)).
- The CDB is deactivated by default.
- Cookie Control allow multiple track IDs on the same domain.

## Bug Fixes
- If the URL contains a fragment / hash at the end this value is also tracked as part of the value of the campaign and campaign parameters.
- Form requests are not tracked when the page is hidden.

<a name="1.3.8"></a>
# 1.3.8 (2022-10-20)

## Bug Fixes
- 3rd party cookies cannot be set within an iframe

<a name="1.3.7"></a>
# 1.3.7 (2022-08-31)

## Optimization
- Add tracking parameter (pf, cs801 and cs802) for pixel feature usage

<a name="1.3.6"></a>
# 1.3.6 (2022-06-09)

## Optimization
- Optimized Marketing Automation extension for SPAs

<a name="1.3.5"></a>
# 1.3.5 (2022-06-01)

## Features
- New pre-defined parameters for ScrollDepth extension ([ScrollDepth](https://documentation.mapp.com/latest/en/scroll-depth-31200618.html))
- The scroll position extension is deprecated, please use the scroll depth extension instead

## Bug Fixes
- TabBrowsing does not refresh the counter when the location for SPAs is changed

<a name="1.3.4"></a>
# 1.3.4 (2022-05-04)

## Features
- With `maxCookieSize = -1` in the product list tracking configuration, no more product list cookies are set. However, this deactivates the product list position tracking for product views, adds and confirmations ([maxCookieSize](https://documentation.mapp.com/1.0/en/product-list-tracking-15741357.html#id-.SMPProductListTrackingv1.0-config))
- Limit number of retries to send requests in request queue ([requestQueue](https://documentation.mapp.com/latest/en/advanced-15741253.html))

<a name="1.3.3"></a>
# 1.3.3 (2022-03-03)

## Features
- With `maxCookieSize = -1` in the teaser tracking configuration, no more teaser cookies are set. However, this deactivates the teaser conversion and page engagement tracking ([maxCookieSize](https://documentation.mapp.com/1.0/en/teaser-tracking-15741363.html#id-.SMPTeaserTrackingv1.0-config))
- Include additional HTML elements in teaser tracking that support click tracking ([extendClickSelector](https://documentation.mapp.com/1.0/en/teaser-tracking-15741363.html#id-.SMPTeaserTrackingv1.0-config) and [extend](https://documentation.mapp.com/1.0/en/teaser-tracking-15741363.html#id-.SMPTeaserTrackingv1.0-Initialisationoftheteaserelements))

<a name="1.3.2"></a>
# 1.3.2 (2022-02-16)

## Bug Fixes
- Unexpected parameters in teaser tracking requests

<a name="1.3.1"></a>
# 1.3.1 (2022-02-03)

## Features
- Create option for Mapp user matching

## Bug Fixes
- Duplicate query parameters in the track request again
- Anonymous tracking not consistent with tab browsing and pre-rendering

<a name="1.3.0"></a>
# 1.3.0 (2021-12-20)

## Features
- Add a property to configure request limitation ([Advanced](https://documentation.mapp.com/latest/en/advanced-15741253.html))

<a name="1.2.9"></a>
# 1.2.9 (2021-11-08)

## Bug Fixes
- First media action is not sent if no page request has been sent for the current page
- Duplicate query parameters in the track request

<a name="1.2.8"></a>
# 1.2.8 (2021-10-15)

## Bug Fixes
- Fix TypeScript definition error

<a name="1.2.7"></a>
# 1.2.7 (2021-10-14)

## Features
- Include option to change event name in Product-List-Tracking ([Product-List-Tracking](https://documentation.mapp.com/latest/en/product-list-tracking-15741357.html))
- Search in loop for elements, every 500ms, with *querySelector* (Product-List-Tracking, Teaser-Tracking and Content Engagement)
- Internal queue implemented to process and send elements together (Product-List-Tracking and Teaser-Tracking)
- Add TypeScript definition file (d.ts)

## Bug Fixes
- Content Engagement fired requests when element is removed
- Missing order data if the first request is an action
- Independent product parameters are not sent
- Marketing Automation does not receive all data

<a name="1.2.6"></a>
# 1.2.6 (2021-02-22)

## Features
- Change *wtstp_rla* cookie duration to session
- Add cookie size configuration option for Teaser- and Product-List-Tracking ([Teaser-Tracking](https://documentation.mapp.com/latest/en/teaser-tracking-15741363.html) and [Product-List-Tracking](https://documentation.mapp.com/latest/en/product-list-tracking-15741357.html))
- Support product currency for each product
- Support 'old' EverId in URL parameter and hash

## Bug Fixes
- TabBrowsing issue (2nd request has the exact same timestamp as the first one)

<a name="1.2.5"></a>
# 1.2.5 (2020-11-19)

## Bug Fixes
- *anonymousCookieName* will not be accepted

<a name="1.2.4"></a>
# 1.2.4 (2020-11-18)

## Features
- Extension for User ID Disclosure ([User ID Disclosure](https://documentation.mapp.com/latest/en/user-id-disclosure-15741370.html))
- Update anonymous tracking to activate default opt-in

## Bug Fixes
- Support linebreaks in page name for request queue

<a name="1.2.3"></a>
# 1.2.3 (2020-09-21)

## Features
- Suppress parameters in each track request
- Add public methods to set an identifier opt-out cookie
- Implement Opt-in/Opt-out of tracking cookies
- Add *SameSite* flag with value *Lax* to each smart pixel cookies
- Allow product tracking via an event request

## Bug Fixes
- Missing secure flag in cookies
- Cookie control extension supports 'old' EverId cookie

<a name="1.2.2"></a>
# 1.2.2 (2020-06-09)

## Features
- Allow semicolon separated products
- Support *unload* event simulation for scroll position extension

<a name="1.2.1"></a>
# 1.2.1 (2020-05-04)

## Features
- Improve src path for smart-pixel.*.js to allow relative path

<a name="1.2.0"></a>
# 1.2.0 (2020-04-07)

## Features
- Support server-to-server communication ([Advanced](https://documentation.mapp.com/latest/en/advanced-15741253.html))
- Add new media player event `init` ([MediaSession](https://documentation.mapp.com/latest/en/mediasession-15741348.html#id-.SMPMediaSessionv1.0-init))

## Bug Fixes
- Fixed focus and blur event problem on MacOS for form tracking

<a name="1.1.1"></a>
# 1.1.1 (2019-11-20)

## Features

- Implement automatic form tracking ([Form](https://documentation.mapp.com/latest/en/form-tracking-15741328.html))
- Easier solution to `get` and `set` "OptOut" status ([OptOut](https://documentation.mapp.com/latest/en/utils-15741396.html#id-.SMPUtilsv1.0-OptOut))
- Accept number values for **parameter**, **category** and **goal**
- Merge added product information, if the product exists (identifier is **id**)
- Support additionally one argument as object for tracking data ([Page](https://documentation.mapp.com/latest/en/page-15741259.html) and [Customer](https://documentation.mapp.com/latest/en/customer-15741271.html))
- Support `*` as wildcard in domain string ([Init](https://documentation.mapp.com/latest/en/init-15741249.html))

## Bug Fixes

- If you add a teaser to the pixel and the teaser is seen before a `track` has been made, the pixel generates an error and aborts

<a name="1.1.0"></a>
# 1.1.0 (2019-09-12)

## Features

- Implement "Web to App" tracking ([sendViaSDK](https://documentation.mapp.com/latest/en/advanced-15741253.html))

## Bug Fixes

- Support CTRL & Left Mouse Button, if using delay for actions
- `trackAction` force a page request, if it is the first request on the page

<a name="1.0.9"></a>
# 1.0.9 (2019-08-06)

## Optimization

- Optimized automatic page tracking for SPAs

<a name="1.0.8"></a>
# 1.0.8 (2019-07-18)

## Features

- Change the default page and action name (based on URL)

<a name="1.0.7"></a>

# 1.0.7 (2019-06-12)

## Extensions

- Extension for Content Engagement ([Content Engagement](https://documentation.mapp.com/latest/en/content-engagement-15741314.html))
- Extension for Cookie Control ([Cookie Control](https://documentation.mapp.com/latest/en/cookie-control-15741322.html))

<a name="1.0.6"></a>
# 1.0.6 (2019-05-10)

## Documentation

- Add JSDoc

<a name="1.0.4"></a>
#1.0.4 (2019-05-09)

## Bug Fixes

- Support comma in page name

## Features

- Deactivate CDB for Safari (ITP 2.1)

## Performance Improvements

- Optimize extension tracking
- Write request queue instantly

<a name="1.0.3"></a>
# 1.0.3 (2019-04-02)

## Features

- Integrate 'submit' to change the internal form status to 'submitted' (Form)

## Security Improvements

- Send every request via SSL

<a name="1.0.2"></a>
# 1.0.2 (2019-02-27)

## Bug Fixes

- Use fallback page name if this is empty

## Features

- Add website goals to actions ([Action](https://documentation.mapp.com/latest/en/action-15741264.html))
- Support an array of TrackIds ([Init](https://documentation.mapp.com/latest/en/init-15741249.html))

## Performance Improvements

- Send only tracking parameter that differ from the default value
- Remove not supported tracking parameter

<a name="1.0.1"></a>
# 1.0.1 (2019-01-10)

## Features

- Integrate 'update' for manually page changes ([Product-List-Tracking](https://documentation.mapp.com/latest/en/product-list-tracking-15741357.html))
- Integrate 'reload' for manually page changes ([Teaser-Tracking](https://documentation.mapp.com/latest/en/teaser-tracking-15741363.html))
- Integrate 'trackPage' and 'trackAction' to force page and action requests ([track](https://documentation.mapp.com/latest/en/track-15741256.html))
- Integrate offline tracking ([requestQueue](https://documentation.mapp.com/latest/en/advanced-15741253.html))
- Use existing old EverID ([forceOldEverId](https://documentation.mapp.com/latest/en/advanced-15741253.html))
- Possibility to remove individual properties

## Extensions

- Extension for Product-List-Tracking ([Product-List-Tracking](https://documentation.mapp.com/latest/en/product-list-tracking-15741357.html))
- Extension for CDB-IDd ([CDB](https://documentation.mapp.com/latest/en/cross-device-bridge-15741325.html))
- Extension for MediaTracking ([Media](https://documentation.mapp.com/latest/en/media-tracking-15741345.html))

<a name="1.0.0"></a>
# 1.0.0 (2018-08-08)

- Alpha release
