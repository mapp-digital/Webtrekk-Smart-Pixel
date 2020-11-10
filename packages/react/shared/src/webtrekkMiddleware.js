import WebtrekkSmartPixelReact from './WebtrekkSmartPixelReact';

const webtrekkMiddleware = (actions = {}) => ({getState}) => next => action => {
    var nextValue = next(action);

    if (typeof actions[action.type] === 'function') {
        actions[action.type](getState(), action);
        return nextValue;
    }

    if (!action.webtrekk) {
        return nextValue;
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

    return nextValue;
};

export default webtrekkMiddleware;
