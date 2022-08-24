import React, { useState, useEffect } from "react";

import { get, post } from "../helper/requests";
import { useLocation, useNavigate } from "react-router-dom";
import wtSmart, {
    trackLogin,
    trackLogout,
    trackAddToCart,
    trackOpenAndCloseCart,
} from "../helper/tracking";

const Store = React.createContext<IState>({
    cart: [],
    cartIsOpen: false,
    cartAmount: "0",
    cartSum: "0",
    refreshCart: () => {},
    userData: false,
    snackbar: false,
    snackbarHandler: (message) => {},
    cartHandler: (product, action) => {},
    openCartHandler: (isOpen) => {},
    logoutHandler: () => {},
    userDataHandler: () => {},
});

export const StoreProvider: React.FC<{children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined}> = (props) => {
    const history = useNavigate();
    let location = useLocation();

    // cart
    const [cart, setCart] = useState<IState["cart"]>([]);
    const cartHandler: TCartHandler = (item, action) => {
        post(`cart/${action}`, item).then((cart) => {
            if (action === "add") {
                snackbarHandler(item.name + " successfully added to cart!");
                trackAddToCart(item as ICartItem);
            }
            setCart(cart as ICartItem[]);
        });
    };
    const [cartIsOpen, setCartOpen] = useState<IState["cartIsOpen"]>(false);
    const openCartHandler: TOpenCartHandler = (state) => {
        setCartOpen(state);
        trackOpenAndCloseCart(state);
    };
    const getCartAmount = () => {
        return cart
            .map((c) => Number(c.quantity))
            .reduce((a, b) => a + b, 0)
            .toFixed(0);
    };
    const getCartSum = () => {
        return cart
            .map((c) => c.sum)
            .reduce((a, b) => a + b, 0)
            .toFixed(2);
    };
    const refreshCart = () => {
        get("cart").then((cart) => {
            setCart(cart as ICartItem[]);
        });
    };

    // user
    const [userData, setUserData] = useState<IState["userData"]>(false);
    const logoutHandler: TLogoutHandler = () => {
        get("user/logout").then(() => {
            setUserData(false);
            trackLogout();
            snackbarHandler("Bye, see you later!");
            history("/login");
        });
    };
    const userDataHandler = () => {
        get("user").then((u) => {
            const userData = u as IUser;
            if (userData.name) {
                setUserData(userData);
                trackLogin(userData);
            } else {
                snackbarHandler("You are logged out");
                setUserData(false);
                trackLogout();
            }
        });
    };

    // snackbar
    const [snackbar, setSnackbar] = useState<IState["snackbar"]>(false);
    const snackbarHandler: TSnackbarHandler = (message) => {
        setSnackbar(message);
        setTimeout(() => {
            setSnackbar(false);
        }, 3000);
    };

    // start app
    useEffect(() => { 
        // history.listen((l) => {  // TODO -> https://stackoverflow.com/questions/70646421/how-to-listen-for-route-change-in-react-router-dom-v6
        //     // no auto-track on Produktpage because productData has to be loaded before track
        //     const isProductPage = /^\/shop\/\d+$/.test(l.pathname);
        //     if (!isProductPage) {
        //         wtSmart.WebtrekkSmartPixelReact.track();
        //         wtSmart.WebtrekkSmartPixelReact.extension("action", "update");
        //     }
        // });

        const isProductPage = /^\/shop\/\d+$/.test(location.pathname);
        if (!isProductPage) {
                wtSmart.WebtrekkSmartPixelReact.track();
            }

        refreshCart();
        get("user").then((response) => {
            const user = response as IUser;
            if (user.message === "Unauthorized") {
                snackbarHandler("You are logged out");
                setUserData(false);
                wtSmart.WebtrekkSmartPixelReact.session({
                    loginStatus: "logged out",
                    parameter: { 1: "session test" },
                });
            } else {
                setUserData(user);
                snackbarHandler("You are logged in as " + user.name);
                wtSmart.WebtrekkSmartPixelReact.session({
                    loginStatus: "logged in",
                    parameter: { 1: "session test" },
                });
                if(user.name) {
                    wtSmart.WebtrekkSmartPixelReact.customer(user.name);
                }
                
            }
            wtSmart.WebtrekkSmartPixelReact.extension("action", "update");
        });
    }, [history, location]);

    return (
        <Store.Provider
            value={{
                cart: cart,
                cartIsOpen: cartIsOpen,
                cartAmount: getCartAmount(),
                cartSum: getCartSum(),
                refreshCart: refreshCart,
                userData: userData,
                logoutHandler: logoutHandler,
                snackbar: snackbar,
                snackbarHandler: snackbarHandler,
                cartHandler: cartHandler,
                openCartHandler: openCartHandler,
                userDataHandler: userDataHandler,
            }}
        >
            {props.children}
        </Store.Provider>
    );
};

export default Store;
