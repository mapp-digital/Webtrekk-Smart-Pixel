import AutoTracking from './Components/WebtrekkAutoTracking';
import InitData from './Components/Data/WebtrekkInitData';
import AdvancedData from './Components/Data/WebtrekkAdvancedData';
import CampaignData from './Components/Data/WebtrekkCampaignData';
import CustomerData from './Components/Data/WebtrekkCustomerData';
import OrderData from './Components/Data/WebtrekkOrderData';
import PageData from './Components/Data/WebtrekkPageData';
import ProductData from './Components/Data/WebtrekkProductData';
import SessionData from './Components/Data/WebtrekkSessionData';
import Teaser from './Components/WebtrekkTeaser';
import ProductList from './Components/WebtrekkProductList';
import ContentEngagement from './Components/WebtrekkContentEngagement';
import Extension from './Components/WebtrekkExtension';
import SmartPixelReact from './WebtrekkSmartPixelReact';
import middleware from './webtrekkMiddleware';
import reducer from './webtrekkReducer';

export const WebtrekkAutoTracking = AutoTracking;
export const WebtrekkInitData = InitData;
export const WebtrekkAdvancedData = AdvancedData;
export const WebtrekkCampaignData = CampaignData;
export const WebtrekkCustomerData = CustomerData;
export const WebtrekkOrderData = OrderData;
export const WebtrekkPageData = PageData;
export const WebtrekkProductData = ProductData;
export const WebtrekkSessionData = SessionData;
export const WebtrekkTeaser = Teaser;
export const WebtrekkProductList = ProductList;
export const WebtrekkContentEngagement = ContentEngagement;
export const WebtrekkExtension = Extension;
export const WebtrekkSmartPixelReact = SmartPixelReact;
export const webtrekkMiddleware = middleware;
export const webtrekkReducer = reducer;

// compatibility for v0
export const webtrekkSmartPixelReact = SmartPixelReact;

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
