import { combineReducers } from "@reduxjs/toolkit";
import { ActionType } from "typesafe-actions";
import * as counters from "./actions";
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

export type CountersAction = ActionType<typeof counters>;

export type CountersState = {
    readonly reduxCounter: number;
};

export default combineReducers<CountersState, CountersAction>({
    reduxCounter: (state = 0, action) => {
        switch (action.type) {
            case INCREMENT:
                return state + 1;

            case ADD:
            case TESTACTION:
            case TESTPAGE:
            case TESTSESSION:
            case TESTCAMPAIGN:
            case TESTCUSTOMER:
            case TESTPRODUCT:
            case TESTPRODUCTS:
            case TESTORDER:
            case TESTTRACK:
            case TESTTRACKPAGE:
            case TESTTRACKACTION:
            case TESTINIT:
            case TESTADVANCED:
                return state + action.payload;

            default:
                return state;
        }
    },
});
