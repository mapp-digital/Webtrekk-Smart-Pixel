<a name="2.1.1"></a>
# 2.1.1 (2025-11)

## Features

- **Recommendation tracking for Mapp Fashion**: It is now possible to track if an item was displayed within a Mapp Fashion recommendation before being purchased, directly within the Mapp Cloud recommendation widget.


<a name="2.1.0"></a>
# 2.1.0 (2025-07)

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

- New product status added (see [addToCart](https://documentation.mapp.com/latest/en/product-44466431.html), [deleteFromCart](https://documentation.mapp.com/latest/en/product-44466431.html), [checkout](https://documentation.mapp.com/latest/en/product-44466431.html), [addToWishlist](https://documentation.mapp.com/latest/en/product-44466431.html) and [deleteFromWishlist](https://documentation.mapp.com/latest/en/product-44466431.html))


<a name="1.2.5"></a>
# 1.2.5 (2023-06-06)

## Features

- Support temporary session ID for anonymous tracking (see [Advanced](https://documentation.mapp.com/latest/en/advanced-44466342.html)).
- Support tracking of shadow DOM elements (see [Content Engagement](https://documentation.mapp.com/latest/en/content-engagement-44466292.html), [Product List Tracking](https://documentation.mapp.com/latest/en/product-list-tracking-44466317.html) and [Teaser Tracking](https://documentation.mapp.com/latest/en/teaser-tracking-44466329.html)).


<a name="1.2.4"></a>
## 1.2.4 (2022-09-08)

## Optimization
- Add tracking parameter (pf, cs801 and cs802) for pixel feature usage


<a name="1.2.3"></a>
## 1.2.3 (2022-06-24)

### Bugfix

* Fix uncaught ReferenceError: regeneratorRuntime is not defined


<a name="1.2.2"></a>
## 1.2.2 (2022-05-04)

### Features

* Limit number of retries to send requests in request queue ([advanced](https://documentation.mapp.com/latest/en/vue-15741417.html#id-.SMPVuev1.0-advanced) and [advanced-method](https://documentation.mapp.com/latest/en/vue-15741417.html#id-.SMPVuev1.0-advanced-method))


<a name="1.2.1"></a>
## 1.2.1 (2021-12-20)

### Features

* Add a property to configure request limitation ([advanced](https://documentation.mapp.com/latest/en/vue-15741417.html#id-.SMPVuev1.0-advanced) and [advanced-method](https://documentation.mapp.com/latest/en/vue-15741417.html#id-.SMPVuev1.0-advanced-method))


<a name="1.2.0"></a>
## 1.2.0 (2021-10-14)

### Features

* Optimize property types


<a name="1.1.0"></a>
## 1.1.3 (2021-09-02)

### Feature

* Add typescript definition file


<a name="1.0.0"></a>
## 1.0.0 (2019-11-21)

* Beta release
