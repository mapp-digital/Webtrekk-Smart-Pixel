// import  * as wtSmart from "../../src/instrumented/vanilla/src";
import * as wtSmart from "@webtrekk-smart-pixel/react";

const getCost = (price: number, quantity?: number | String) => {
    let pennies = price * 10;
    const multiplier = Number(quantity) || 1;
    pennies = pennies * multiplier;
    return pennies / 10;
};

export const trackInit = () => {
    wtSmart.WebtrekkSmartPixelReact.init({
        trackId: "123123123123123",
        trackDomain: "phoenix:4001",
        cookie: "1",
      });
      wtSmart.WebtrekkSmartPixelReact.extension("teaser_tracking", "activate");
    //   wtSmart.WebtrekkSmartPixelReact.extension("product_list_tracking", "activate");
      wtSmart.WebtrekkSmartPixelReact.call((wtSmart) => {
        wtSmart.extension.product_list_tracking.config({
            viewPercent: 100,
            viewTime: 1000,
            sampling: 0,
            maxSendProducts: {
                session: 10000,
                page: 1000
            },
            maxCookieSize: -1,
            sendMultipleProductViews: false
        });
        wtSmart.extension.product_list_tracking.activate();
    });
      wtSmart.WebtrekkSmartPixelReact.extension("content_engagement", "activate");
      wtSmart.WebtrekkSmartPixelReact.extension("action", "activate");
}

export const trackLogout = () => {
    wtSmart.WebtrekkSmartPixelReact.customer("");
    wtSmart.WebtrekkSmartPixelReact.session({
        loginStatus: "logged out"
    });
    wtSmart.WebtrekkSmartPixelReact.action({ name: "check-login" });
    wtSmart.WebtrekkSmartPixelReact.trackAction();
};

export const trackLogin = (userData: IUser) => {
    if (userData.name) {
        wtSmart.WebtrekkSmartPixelReact.customer(userData.name);
        wtSmart.WebtrekkSmartPixelReact.session({
            loginStatus: "logged in"
        });
        wtSmart.WebtrekkSmartPixelReact.action({ name: "check-login" });
        wtSmart.WebtrekkSmartPixelReact.trackAction();
    }
};

export const trackProductView = (product: IProduct) => {
    wtSmart.WebtrekkSmartPixelReact.product("view", {
        id: product.id.toString(),
        cost: product.price,
        quantity: 1,
        parameter: {
            1: product.sku,
        },
        category: {
            1: product.name,
        },
    });
    wtSmart.WebtrekkSmartPixelReact.track();
}

export const trackOpenAndCloseCart = (status: boolean) => {
    const name = status ? "Open cart" : "Close cart";
    wtSmart.WebtrekkSmartPixelReact.action({ name });
    wtSmart.WebtrekkSmartPixelReact.trackAction();
}

export const trackAddToCart = (cart: ICartItem) => {
    wtSmart.WebtrekkSmartPixelReact.product("basket", {
        id: cart.id.toString(),
        cost: getCost(cart.price, cart.quantity),
        quantity: Number(cart.quantity) || 1,
        parameter: {
            1: cart.sku,
        },
        category: {
            1: cart.name,
        },
    });
    wtSmart.WebtrekkSmartPixelReact.action({ name: "addToCart" });
    wtSmart.WebtrekkSmartPixelReact.trackAction();
};

export const trackOrder = (orderData: IOrderResponseData, userData: IUser) => {
    const products: wtSmart.WebtrekkProductProps[] =
        orderData.data.products.map((item) => {
            return {
                id: item.id.toString(),
                cost: item.sum,
                quantity: Number(item.quantity),
                parameter: {
                    1: item.sku,
                },
                category: {
                    1: item.name,
                },
            };
        });
    wtSmart.WebtrekkSmartPixelReact.products("confirmation", products);
    wtSmart.WebtrekkSmartPixelReact.order({
        value: orderData.data.orderValue,
        id: orderData.orderId.toString(),
    });
    if(userData.name) {
        wtSmart.WebtrekkSmartPixelReact.customer(userData.name);
    }
};

export default wtSmart;
