<a name="1.5.0"></a>
# 1.5.0 (2025-07)

## Features

- Add missing types for:
    - **advanced**
        - parameterObfuscation: We offer a new advanced option, with which you can define any tracking parameters for obfuscation (see [Advanced](https://docs.mapp.com/v1/docs/tracking-configuration-advanced)).
        - advancedPermission: Enable if you need to differentiate between additional useage option of the tracked data, e.g. marketing purposes (see [Advanced](https://docs.mapp.com/v1/docs/tracking-configuration-advanced)).


<a name="1.4.0"></a>
# 1.4.0 (2025-03-11)

## Features

- Add missing types for:
    - **advanced**
        - registerObfuscation: [Personally Identifiable Information](https://docs.mapp.com/v1/docs/customer) data sent to Engage for the registration process can be obfuscated (see [Advanced](https://docs.mapp.com/v1/docs/tracking-configuration-advanced)).
        - productMerge: The merging of products can be deactivated (see [Advanced](https://docs.mapp.com/v1/docs/tracking-configuration-advanced))
        - tabBrowsing: Tab browsing can be deactivated (see [Advanced](https://docs.mapp.com/v1/docs/tracking-configuration-advanced))
        - preRendering: Pre-rendering and tracking of tabs that are not in focus is now possible (see [Advanced](https://docs.mapp.com/v1/docs/tracking-configuration-advanced))
    - **customer**: To improve user identification, you can use customer IDs in addition to Mapp's long-term cookies. This allows cross-device and cross-browser user identification (see [Customer](https://docs.mapp.com/v1/docs/customer)).
        - registrationEmail: The Email address used to identify the user in Mapp Engage
        - registrationGroupId: Provide the group ID in case of a new registration for the user in Mapp Engage
        - registrationMode: Provide the registration method used to register for marketing activities
        - registrationFirstName: First name of the user to be used in Mapp Engage
        - registrationLastName: Last name of the user to be used in Mapp Engage
        - registrationGender: Gender of the user
        - registrationTitle: The title of the user to be used in Mapp Engage
        - registrationOptin: Provide information that the user consented to use their data
    - **engage**: It is now possible to send Mapp Engage Custom Attributes (see [Engage](https://docs.mapp.com/v1/docs/engage-intelligence-smart-pixel))


<a name="1.3.0"></a>
# 1.3.0 (2023-08-28)

## Features

- New product status added (see [addToCart](https://documentation.mapp.com/latest/en/product-43287896.html), [deleteFromCart](https://documentation.mapp.com/latest/en/product-43287896.html), [checkout](https://documentation.mapp.com/latest/en/product-43287896.html), [addToWishlist](https://documentation.mapp.com/latest/en/product-43287896.html) and [deleteFromWishlist](https://documentation.mapp.com/latest/en/product-43287896.html))


<a name="1.2.5"></a>
# 1.2.5 (2023-06-06)

## Features

- Support temporary session ID for anonymous tracking (see [Advanced](https://documentation.mapp.com/latest/en/advanced-43287825.html)).
- Support tracking of shadow DOM elements (see [Content Engagement](https://documentation.mapp.com/latest/en/content-engagement-43287761.html), [Product List Tracking](https://documentation.mapp.com/latest/en/product-list-tracking-43287770.html) and [Teaser Tracking](https://documentation.mapp.com/latest/en/teaser-tracking-43287776.html)).


<a name="1.2.4"></a>
# 1.2.4 (2022-09-08)

## Optimization

- Add tracking parameter (pf, cs801 and cs802) for pixel feature usage


<a name="1.2.3"></a>
# 1.2.3 (2022-06-09)

## Fix

* React not working with **react-router-dom** v6


<a name="1.2.2"></a>
# 1.2.2 (2022-05-04)

## Features

* Limit number of retries to send requests in request queue ([WebtrekkAdvancedData](https://documentation.mapp.com/latest/en/next-15741408.html#id-.SMPNextv1.0-%3CWebtrekkAdvancedData%3E) and [advanced](https://documentation.mapp.com/latest/en/next-15741408.html#id-.SMPNextv1.0-advanced))


<a name="1.2.1"></a>
# 1.2.1 (2021-12-20)

## Features

* Add a property to configure request limitation ([WebtrekkAdvancedData](https://documentation.mapp.com/latest/en/react-15741412.html#id-.SMPReactv1.0-%3CWebtrekkAdvancedData%3E) and [advanced](https://documentation.mapp.com/latest/en/react-15741412.html#id-.SMPReactv1.0-advanced))


<a name="1.2.0"></a>
# 1.2.0 (2021-10-14)

## Features

* Optimize components property types


<a name="1.1.3"></a>
# 1.1.3 (2021-09-01)

## Fix

* Change typescript definition (d.ts file).


<a name="1.1.2"></a>
# 1.1.2 (2020-11-18)

## Features

* Implement Opt-in of tracking cookies 


<a name="1.1.0"></a>
# 1.1.0 (2020-11-10)

## Fix

* Restructuring to remove indirect dependency *react-router-dom* for NextJS.


<a name="1.0.4"></a>
# 1.0.4 (2020-04-14)

## Features

* Support configuration of *sendViaSDK* and *sendViaServer* in \<WebtrekkAdvancedData\>


<a name="1.0.3"></a>
# 1.0.3 (2019-11-21)

* Renaming package to **@webtrekk-smart-pixel/react**


<a name="1.0.2"></a>
# 1.0.2 (2019-09-10)

* Compiling build files into ES5 standard


<a name="1.0.1"></a>
# 1.0.1 (2019-09-09)

* Build separate files for ESM, UMD, AMD and CJS


<a name="1.0.0"></a>
# 1.0.0 (2019-08-12)

## Features

* Support tracking components ([see](https://documentation.mapp.com/latest/en/react-15741412.html#id-.SMPReactv1.0-Components))
* Support new tracking functionalities ([see](https://documentation.mapp.com/latest/en/react-15741412.html#id-.SMPReactv1.0-WebtrekkSmartPixelReact))
* Support react hook reducer ([see](https://documentation.mapp.com/latest/en/react-15741412.html#id-.SMPReactv1.0-webtrekkReducer))
* Support react redux middleware ([see](https://documentation.mapp.com/latest/en/react-15741412.html#id-.SMPReactv1.0-webtrekkMiddleware))


<a name="0.2.5"></a>
# 0.2.5 (2019-09-10)

* Compiling build files into ES5 standard


<a name="0.2.4"></a>
# 0.2.4 (2019-09-09)

* Build separate files for ESM, UMD, AMD and CJS


<a name="0.2.3"></a>
# 0.2.3 (2019-06-12)

## Documentation

* Extension for Content Engagement ([Content Engagement](https://documentation.mapp.com/latest/en/content-engagement-15741314.html))
* Extension for Cookie Control ([Cookie Control](https://documentation.mapp.com/latest/en/cookie-control-15741322.html))


<a name="0.2.2"></a>
# 0.2.2 (2019-05-29)

* support 'module.exports'


<a name="0.2.1"></a>
# 0.2.1 (2019-05-21)

* Add JSDoc


<a name="0.2.0"></a>
# 0.2.0 (2019-05-20)

* Add example file


<a name="0.1.0"></a>
# 0.1.0 (2019-05-17)

* Beta release
