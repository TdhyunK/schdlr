import { NUM_FORMS } from "../actions/index";

/*
 * Reducer to determine how many class forms to return
 */
export default function(state={}, action) {
    switch(action.type) {
        case NUM_FORMS:
            return action.payload;
        default:
            return state;
    }
}
