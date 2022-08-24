import {
    ADD,
    INCREMENT,
    TESTACTION,
    TESTADVANCED,
    TESTCAMPAIGN,
    TESTCUSTOMER,
    TESTINIT,
    TESTORDER,
    TESTPAGE,
    TESTPRODUCT,
    TESTPRODUCTS,
    TESTSESSION,
    TESTTRACK,
    TESTTRACKACTION,
    TESTTRACKPAGE,
} from "./constants";

export const increment: () => {
    type: typeof INCREMENT;
} = () => {
    return {
        type: INCREMENT,
    };
};

export const add: (amount: number) => {
    type: typeof ADD;
    payload: number;
} = (amount: number) => {
    return {
        type: ADD,
        payload: amount,
    };
};

export const webtrekkPage = (amount: number) => {
    return {
        type: TESTPAGE,
        payload: amount,
        webtrekk: {
            type: "webtrekk/page",
            sendInstantly: true,
            data: {
                name: "page middleware test", // TODO name is not documented
                parameter: { 8: "test page parameter 8" },
            },
        },
    };
};
export const webtrekkSession = (amount: number) => {
    return {
        type: TESTSESSION,
        payload: amount,
        webtrekk: {
            type: "webtrekk/session",
            sendInstantly: false,
            data: {
                parameter: { 3: "test session parameter 3" },
            },
        },
    };
};
export const webtrekkCampaign = (amount: number) => {
    return {
        type: TESTCAMPAIGN,
        payload: amount,
        webtrekk: {
            type: "webtrekk/campaign",
            sendInstantly: false,
            data: {
                parameter: { 4: "test campaign parameter 4" },
            },
        },
    };
};
export const webtrekkCustomer = (amount: number) => {
    return {
        type: TESTCUSTOMER,
        payload: amount,
        webtrekk: {
            type: "webtrekk/customer",
            sendInstantly: false,
            data: {
                id: "customer test id", // TODO id is not documented
                category: { 4: "test customer category 4" },
            },
        },
    };
};

export const webtrekkAction = (amount: number) => {
    return {
        type: TESTACTION,
        payload: amount,
        webtrekk: {
            type: "webtrekk/action",
            sendInstantly: true,
            data: {
                name: "middleware action test",
                parameter: { 99: "test event parameter 99" },
            },
        },
    };
};
export const webtrekkProduct = (amount: number) => {
    return {
        type: TESTPRODUCT,
        payload: amount,
        webtrekk: {
            type: "webtrekk/product",
            sendInstantly: true,
            action: "basket", // TODO: action is not documented
            data: {
                id: "ABC-123",
                cost: 99.9,
                quantity: 2,
                soldOut: false,
                variant: "green",
                parameter: { 1: "L" },
                category: { 1: "tops", 2: "noname" },
            },
        },
    };
};
export const webtrekkProducts = (amount: number) => {
    return {
        type: TESTPRODUCTS,
        payload: amount,
        webtrekk: {
            type: "webtrekk/products",
            sendInstantly: false,
            action: "confirmation", // TODO: action is not documented
            data: [
                {
                    id: "EFG-456",
                    cost: 99.99,
                    quantity: 2,
                    soldOut: false,
                    variant: "green",
                    parameter: { 1: "L" },
                    category: { 1: "tops", 2: "noname" },
                },
                {
                    id: "HIJ-456",
                    cost: 9.9,
                    quantity: 9,
                    soldOut: false,
                    variant: "red",
                    parameter: { 1: "XL" },
                    category: { 1: "test", 2: "bar" },
                },
            ],
        },
    };
};

export const webtrekkOrder = (amount: number) => {
    return {
        type: TESTORDER,
        payload: amount,
        webtrekk: {
            type: "webtrekk/order",
            sendInstantly: true,
            data: {
                value: 120.99,
                id: "M-12345",
                couponValue: 10.0,
                paymentMethod: "paypal",
                shippingService: "dhl",
                shippingSpeed: "express",
                shippingCosts: 4.95,
                grossMargin: 12.95,
                parameter: { 5: "bill" },
            },
        },
    };
};

export const webtrekkTrack = (amount: number) => {
    return {
        type: TESTTRACK,
        payload: amount,
        webtrekk: {
            type: "webtrekk/track",
            sendInstantly: false,
            data: true,
        },
    };
};
export const webtrekkTrackPage = (amount: number) => {
    return {
        type: TESTTRACKPAGE,
        payload: amount,
        webtrekk: {
            type: "webtrekk/trackPage",
            sendInstantly: false,
            data: false,
        },
    };
};
export const webtrekkTrackAction = (amount: number) => {
    return {
        type: TESTTRACKACTION,
        payload: amount,
        webtrekk: {
            type: "webtrekk/trackAction",
            sendInstantly: false,
            data: false,
        },
    };
};
export const webtrekkInit = (amount: number) => {
    return {
        type: TESTINIT,
        payload: amount,
        webtrekk: {
            type: "webtrekk/init",
            sendInstantly: false,
            data: {
                trackId: "123123123123124",
            },
        },
    };
};
export const webtrekkAdvanced = (amount: number) => {
    return {
        type: TESTADVANCED,
        payload: amount,
        webtrekk: {
            type: "webtrekk/advanced",
            sendInstantly: false,
            data: {
                optOutName: "abc",
            },
        },
    };
};
