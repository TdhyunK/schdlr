import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import numForms from "./numForms";
import classForms from "./classForms"; 

const rootReducer = combineReducers({
    form: formReducer,
    numForms: numForms,
    classForms: classForms
});

export default rootReducer;
