import {
    configureStore,
    MiddlewareArray,
    combineReducers,
} from "@reduxjs/toolkit";
import countersReducer from "./counterReducer";
import {
    webtrekkMiddleware,
    WebtrekkSmartPixelReact,
} from "@webtrekk-smart-pixel/react";

const middleware = [
    webtrekkMiddleware({
        "counter/ADD": (state, action) => {
            const count: number = state.rootReducer.counter.reduxCounter;
            const amount: number = action.payload;
            WebtrekkSmartPixelReact.action({
                name: action.type,
                parameter: { 1: count.toString(), 2: amount.toString() },
            });
            WebtrekkSmartPixelReact.trackAction();
        },
        "counter/INCREMENT": (state, action) => {
            const count: number = state.rootReducer.counter.reduxCounter;
            WebtrekkSmartPixelReact.action({
                name: action.type,
                parameter: { 1: count.toString() },
            });
            WebtrekkSmartPixelReact.trackAction();
        },
    }),
];

const rootReducer = combineReducers({
    counter: countersReducer,
});

export const store = configureStore({
    reducer: {
        rootReducer: rootReducer,
    },
    middleware: new MiddlewareArray().concat(middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
