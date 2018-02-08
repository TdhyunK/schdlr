import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import numForms from "./numForms";

const rootReducer = combineReducers({
    form: formReducer,
    numForms: numForms
});

export default rootReducer;
