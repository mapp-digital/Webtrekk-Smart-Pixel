import React, { useReducer } from "react";
import wtSmart from "../helper/tracking";

const webtrekkReducer = wtSmart.webtrekkReducer;
const WebtrekkSmartPixelReact = wtSmart.WebtrekkSmartPixelReact;

const webtrekkCustomReducer = webtrekkReducer({
    increment: (_state, action, reducerValue) => {
        WebtrekkSmartPixelReact.action({
            name: action.type,
            parameter: { 1: reducerValue.count + "" },
        });
        WebtrekkSmartPixelReact.trackAction();
    },
    decrement: (_state, action, reducerValue) => {
        WebtrekkSmartPixelReact.action({
            name: action.type,
            parameter: { 1: reducerValue.count + "" },
        });
        WebtrekkSmartPixelReact.trackAction();
    },
});

const initialState = { count: 0 };
const reducer = (state: IReducerState, action: TReducerAction) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
};

const Reducer: React.FC<{}> = () => {
    const [state, dispatch] = useReducer(
        webtrekkCustomReducer(reducer),
        initialState
    );
    const s = state as IReducerState;
    const d = dispatch as React.Dispatch<TReducerAction>;

    const webtrekkCustomReducer2 = webtrekkReducer();
    const [state2, dispatch2] = useReducer(
        webtrekkCustomReducer2(reducer),
        initialState
    );

    const s2 = state2 as IReducerState;
    const d2 = dispatch2 as React.Dispatch<TReducerAction>;

    return (
        <div>
            <h1>Reducer</h1>
            <h2>Custom action reducer</h2>
            <p>Count: {s.count}</p>
            <button
                className="button"
                id="decrement"
                onClick={() => d({ type: "decrement" })}
            >
                -
            </button>
            <button
                className="button"
                id="increment"
                onClick={() => d({ type: "increment" })}
            >
                +
            </button>
            <hr />
            <h2>Reducer with tracking data</h2>
            <p>Count 2: {s2.count}</p>
            <button
                className="button"
                id="page-reducer"
                onClick={() =>
                    d2({
                        type: "increment",
                        webtrekk: {
                            type: "webtrekk/page",
                            sendInstantly: true,
                            data: {
                                name: "page reducer test", // TODO name is not documented
                                parameter: { 8: "test page parameter 8" },
                            },
                        },
                    })
                }
            >
                webtrekk/page
            </button>
            <button
                className="button"
                id="session-reducer"
                onClick={() =>
                    d2({
                        type: "increment",
                        webtrekk: {
                            type: "webtrekk/session",
                            sendInstantly: false,
                            data: {
                                parameter: { 3: "test session parameter 3" },
                            },
                        },
                    })
                }
            >
                webtrekk/session
            </button>
            <button
                className="button"
                id="campaign-reducer"
                onClick={() =>
                    d2({
                        type: "increment",
                        webtrekk: {
                            type: "webtrekk/campaign",
                            sendInstantly: false,
                            data: {
                                parameter: { 4: "test campaign parameter 4" },
                            },
                        },
                    })
                }
            >
                webtrekk/campaign
            </button>
            <button
                className="button"
                id="customer-reducer"
                onClick={() =>
                    d2({
                        type: "increment",
                        webtrekk: {
                            type: "webtrekk/customer",
                            sendInstantly: false,
                            data: {
                                id: "customer test id", // TODO id is not documented
                                category: { 4: "test customer category 4" },
                            },
                        },
                    })
                }
            >
                webtrekk/customer
            </button>
            <button
                className="button"
                id="action-reducer"
                onClick={() =>
                    d2({
                        type: "increment",
                        webtrekk: {
                            type: "webtrekk/action",
                            sendInstantly: true,
                            data: {
                                name: "reducer action test",
                                parameter: { 99: "test event parameter 99" },
                            },
                        },
                    })
                }
            >
                webtrekk/action
            </button>
            <button
                className="button"
                id="product-reducer"
                onClick={() =>
                    d2({
                        type: "increment",
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
                    })
                }
            >
                webtrekk/product
            </button>
            <button
                className="button"
                id="products-reducer"
                onClick={() =>
                    d2({
                        type: "increment",
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
                    })
                }
            >
                webtrekk/products
            </button>
            <button
                className="button"
                id="order-reducer"
                onClick={() =>
                    d2({
                        type: "increment",
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
                    })
                }
            >
                webtrekk/order
            </button>
            <button
                className="button"
                id="track-reducer"
                onClick={() =>
                    d2({
                        type: "increment",
                        webtrekk: {
                            type: "webtrekk/track",
                            sendInstantly: false,
                            data: true,
                        },
                    })
                }
            >
                webtrekk/track
            </button>
            <button
                className="button"
                id="trackPage-reducer"
                onClick={() =>
                    d2({
                        type: "increment",
                        webtrekk: {
                            type: "webtrekk/trackPage",
                            sendInstantly: false,
                            data: false,
                        },
                    })
                }
            >
                webtrekk/trackPage
            </button>
            <button
                className="button"
                id="trackAction-reducer"
                onClick={() =>
                    d2({
                        type: "increment",
                        webtrekk: {
                            type: "webtrekk/trackAction",
                            sendInstantly: false,
                            data: false,
                        },
                    })
                }
            >
                webtrekk/trackAction
            </button>
            <button
                className="button"
                id="init-reducer"
                onClick={() =>
                    d2({
                        type: "increment",
                        webtrekk: {
                            type: "webtrekk/init",
                            sendInstantly: false,
                            data: {
                                trackId: "123123123123124",
                            },
                        },
                    })
                }
            >
                webtrekk/init
            </button>
            <button
                className="button"
                id="advanced-reducer"
                onClick={() =>
                    d2({
                        type: "increment",
                        webtrekk: {
                            type: "webtrekk/advanced",
                            sendInstantly: false,
                            data: {
                                optOutName: "abc",
                            },
                        },
                    })
                }
            >
                webtrekk/advanced
            </button>
        </div>
    );
};

export default Reducer;
