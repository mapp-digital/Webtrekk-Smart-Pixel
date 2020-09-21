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
- Support server-to-server communication ([Advanced](https://docs.mapp.com/display/WSPD/advanced))
- Add new media player event `init` ([MediaSession](https://docs.mapp.com/display/WSPD/MediaSession#MediaSession-init))

## Bug Fixes
- Fixed focus and blur event problem on MacOS for form tracking

<a name="1.1.1"></a>
# 1.1.1 (2019-11-20)

## Features

- Implement automatic form tracking ([Form](https://docs.mapp.com/display/WSPD/Form+tracking))
- Easier solution to `get` and `set` "OptOut" status ([OptOut](https://docs.mapp.com/display/WSPD/Utils#Utils-OptOut))
- Accept number values for **parameter**, **category** and **goal**
- Merge added product information, if the product exists (identifier is **id**)
- Support additionally one argument as object for tracking data ([Page](https://docs.mapp.com/display/WSPD/page) and [Customer](https://docs.mapp.com/display/WSPD/customer))
- Support `*` as wildcard in domain string ([Init](https://docs.mapp.com/display/WSPD/init))

## Bug Fixes

- If you add a teaser to the pixel and the teaser is seen before a `track` has been made, the pixel generates an error and aborts

<a name="1.1.0"></a>
# 1.1.0 (2019-09-12)

## Features

- Implement "Web to App" tracking ([sendViaSDK](https://docs.mapp.com/display/WSPD/advanced))

## Bug Fixes

- Support CTRL & Left Mouse Button, if using delay for actions
- `trackAction` force a page request, if it is the first request on the page

<a name="1.0.9"></a>
# 1.0.9 (2019-08-06)

## Optimization

- optimized automatic page tracking for SPAs

<a name="1.0.8"></a>
# 1.0.8 (2019-07-18)

## Features

- Change the default page and action name (based on URL)

<a name="1.0.7"></a>

# 1.0.7 (2019-06-12)

## Extensions

- Extension for Content Engagement ([Content Engagement](https://docs.mapp.com/display/WSPD/Content+Engagement))
- Extension for Cookie Control ([Cookie Control](https://docs.mapp.com/display/WSPD/Cookie+Control))

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

- Add website goals to actions ([Action](https://docs.mapp.com/display/WSPD/action))
- Support an array of TrackIds ([Init](https://docs.mapp.com/display/WSPD/init))

## Performance Improvements

- Send only tracking parameter that differ from the default value
- Remove not supported tracking parameter

<a name="1.0.1"></a>
# 1.0.1 (2019-01-10)

## Features

- Integrate 'update' for manually page changes ([Product-List-Tracking](https://docs.mapp.com/display/WSPD/Product+List+Tracking))
- Integrate 'reload' for manually page changes ([Teaser-Tracking](https://docs.mapp.com/display/WSPD/Teaser+Tracking))
- Integrate 'trackPage' and 'trackAction' to force page and action requests ([track](https://docs.mapp.com/display/WSPD/track))
- Integrate offline tracking ([requestQueue](https://docs.mapp.com/display/WSPD/advanced))
- Use existing old EverID ([forceOldEverId](https://docs.mapp.com/display/WSPD/advanced))
- Possibility to remove individual properties

## Extensions

- Extension for Product-List-Tracking ([Product-List-Tracking](https://docs.mapp.com/display/WSPD/Product+List+Tracking))
- Extension for CDB-IDd ([CDB](https://docs.mapp.com/display/WSPD/Cross+Device+Bridge))
- Extension for MediaTracking ([Media](https://docs.mapp.com/display/WSPD/Media+Tracking))

<a name="1.0.0"></a>
# 1.0.0 (2018-08-08)

- Alpha release
