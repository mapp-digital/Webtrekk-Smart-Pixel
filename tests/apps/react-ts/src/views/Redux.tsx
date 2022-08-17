import React from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

import {
    add,
    increment,
    webtrekkAction,
    webtrekkAdvanced,
    webtrekkCampaign,
    webtrekkCustomer,
    webtrekkInit,
    webtrekkOrder,
    webtrekkPage,
    webtrekkProduct,
    webtrekkProducts,
    webtrekkSession,
    webtrekkTrack,
    webtrekkTrackAction,
    webtrekkTrackPage,
} from "../redux/actions";

const Redux: React.FC<{}> = () => {
    const count = useAppSelector((state) => state.rootReducer.counter);
    const dispatch = useAppDispatch();

    return (
        <div className="about">
            <h1>Redux</h1>
            <p>Count: <span id="count">{count.reduxCounter}</span></p>
            <h2>Custom Actions</h2>
            <button
                id="increment"
                className="button"
                onClick={() => {
                    dispatch(increment());
                }}
            >
                Increment
            </button>
            <button
                id="add"
                className="button"
                onClick={() => {
                    dispatch(add(5));
                }}
            >
                Add 5
            </button>
            <hr />
            <h2>Dispatch with tracking data</h2>
            <button
                id="webtrekk-page"
                className="button"
                onClick={() => {
                    dispatch(webtrekkPage(2));
                }}
            >
                webtrekk/page
            </button>

            <button
                id="webtrekk-session"
                className="button"
                onClick={() => {
                    dispatch(webtrekkSession(2));
                }}
            >
                webtrekk/session
            </button>
            <button
                id="webtrekk-campaign"
                className="button"
                onClick={() => {
                    dispatch(webtrekkCampaign(2));
                }}
            >
                webtrekk/campaign
            </button>
            <button
                id="webtrekk-customer"
                className="button"
                onClick={() => {
                    dispatch(webtrekkCustomer(2));
                }}
            >
                webtrekk/customer
            </button>
            <button
                id="webtrekk-action"
                className="button"
                onClick={() => {
                    dispatch(webtrekkAction(2));
                }}
            >
                webtrekk/action
            </button>
            <button
                id="webtrekk-product"
                className="button"
                onClick={() => {
                    dispatch(webtrekkProduct(2));
                }}
            >
                webtrekk/product
            </button>
            <button
                id="webtrekk-products"
                className="button"
                onClick={() => {
                    dispatch(webtrekkProducts(2));
                }}
            >
                webtrekk/products
            </button>
            <button
                id="webtrekk-order"
                className="button"
                onClick={() => {
                    dispatch(webtrekkOrder(2));
                }}
            >
                webtrekk/order
            </button>
            <button
                id="webtrekk-track"
                className="button"
                onClick={() => {
                    dispatch(webtrekkTrack(2));
                }}
            >
                webtrekk/track
            </button>
            <button
                id="webtrekk-trackPage"
                className="button"
                onClick={() => {
                    dispatch(webtrekkTrackPage(2));
                }}
            >
                webtrekk/trackPage
            </button>
            <button
                id="webtrekk-trackAction"
                className="button"
                onClick={() => {
                    dispatch(webtrekkTrackAction(2));
                }}
            >
                webtrekk/trackAction
            </button>
            <button
                id="webtrekk-init"
                className="button"
                onClick={() => {
                    dispatch(webtrekkInit(2));
                }}
            >
                webtrekk/init
            </button>
            <button
                id="webtrekk-advanced"
                className="button"
                onClick={() => {
                    dispatch(webtrekkAdvanced(2));
                }}
            >
                webtrekk/advanced
            </button>
        </div>
    );
};

export default Redux;
