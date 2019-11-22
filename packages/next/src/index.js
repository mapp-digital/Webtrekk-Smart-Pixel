import * as SmartPixelReact from '@webtrekk-smart-pixel/react';
import AutoTracking from './Components/WebtrekkAutoTracking';

export const WebtrekkAutoTracking = AutoTracking;
export const WebtrekkInitData = SmartPixelReact.WebtrekkInitData;
export const WebtrekkAdvancedData = SmartPixelReact.WebtrekkAdvancedData;
export const WebtrekkCampaignData = SmartPixelReact.WebtrekkCampaignData;
export const WebtrekkCustomerData = SmartPixelReact.WebtrekkCustomerData;
export const WebtrekkOrderData = SmartPixelReact.WebtrekkOrderData;
export const WebtrekkPageData = SmartPixelReact.WebtrekkPageData;
export const WebtrekkProductData = SmartPixelReact.WebtrekkProductData;
export const WebtrekkSessionData = SmartPixelReact.WebtrekkSessionData;
export const WebtrekkTeaser = SmartPixelReact.WebtrekkTeaser;
export const WebtrekkProductList = SmartPixelReact.WebtrekkProductList;
export const WebtrekkContentEngagement = SmartPixelReact.WebtrekkContentEngagement;
export const WebtrekkExtension = SmartPixelReact.WebtrekkExtension;
export const WebtrekkSmartPixelReact = SmartPixelReact.WebtrekkSmartPixelReact;
export const webtrekkMiddleware = SmartPixelReact.webtrekkMiddleware;
export const webtrekkReducer = SmartPixelReact.webtrekkReducer;

// compatibility for v0
export const webtrekkSmartPixelReact = WebtrekkSmartPixelReact;

export default {
    WebtrekkAutoTracking,
    WebtrekkInitData,
    WebtrekkAdvancedData,
    WebtrekkCampaignData,
    WebtrekkCustomerData,
    WebtrekkOrderData,
    WebtrekkPageData,
    WebtrekkProductData,
    WebtrekkSessionData,
    WebtrekkTeaser,
    WebtrekkProductList,
    WebtrekkContentEngagement,
    WebtrekkExtension,
    WebtrekkSmartPixelReact,
    webtrekkMiddleware,
    webtrekkReducer,

    // compatibility for v0
    webtrekkSmartPixelReact
};
