import { NUM_FORMS } from "../actions/index";

export default function(state={}, action) {
    switch(action.type) {
        case NUM_FORMS:
            return action.payload;
        default:
            return state;
    }
}
