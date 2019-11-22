import {useCallback} from 'react';
import WebtrekkSmartPixelReact from './WebtrekkSmartPixelReact';

const webtrekkReducer = (actions = {}) => (customReducer = () => {
    // do nothing
}) => useCallback((state, action) => {
    var customReducerValue = customReducer(state, action);

    if (typeof actions[action.type] === 'function') {
        actions[action.type](state, action, customReducerValue);
        return customReducerValue;
    }

    if (!action.webtrekk) {
        return customReducerValue;
    }

    var isWebtrekkAction = true;
    var webtrekk = action.webtrekk;
    var type = webtrekk.type || '';
    var data = webtrekk.data || {};
    var sendInstantly = webtrekk.sendInstantly || false;

    switch (type) {
        case 'webtrekk/init': WebtrekkSmartPixelReact.init(data); break;
        case 'webtrekk/advanced': WebtrekkSmartPixelReact.advanced(data); break;
        case 'webtrekk/page': WebtrekkSmartPixelReact.page(data.name, data); break;
        case 'webtrekk/action': WebtrekkSmartPixelReact.action(data); break;
        case 'webtrekk/session': WebtrekkSmartPixelReact.session(data); break;
        case 'webtrekk/campaign': WebtrekkSmartPixelReact.campaign(data); break;
        case 'webtrekk/customer': WebtrekkSmartPixelReact.customer(data.id, data, data.validation); break;
        case 'webtrekk/product': WebtrekkSmartPixelReact.product(webtrekk.action, data); break;
        case 'webtrekk/products': WebtrekkSmartPixelReact.products(webtrekk.action, data); break;
        case 'webtrekk/order': WebtrekkSmartPixelReact.order(data); break;
        case 'webtrekk/extension': WebtrekkSmartPixelReact.extension(data.extension, data.action, data); break;
        case 'webtrekk/track': WebtrekkSmartPixelReact.track(data); break;
        case 'webtrekk/trackPage': WebtrekkSmartPixelReact.trackPage(data); break;
        case 'webtrekk/trackAction': WebtrekkSmartPixelReact.trackAction(data); break;
        default: isWebtrekkAction = false; break;
    }

    if (isWebtrekkAction && sendInstantly) {
        WebtrekkSmartPixelReact.track();
    }

    return customReducerValue;
}, [customReducer, actions]);

export default webtrekkReducer;
