import { combineReducers } from "redux";
import { RECEIVE_IMG } from "../action";

function Caption(state=[], action) {
    switch (action.type) {
        case RECEIVE_IMG:
            return state;
        default:
            return state;
    }

}

const rootReducer = combineReducers({
    Caption
});
export default rootReducer;