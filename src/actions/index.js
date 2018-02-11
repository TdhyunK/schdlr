import axios from 'axios';

export const NUM_FORMS = "NUM_FORMS"; 
const ROOT_URL = "http://localhost:8080/api";

export function submitNumForms( numOfForms ){
    return{
        type: NUM_FORMS,
        payload: parseInt(numOfForms)
    };
}

/* export function getClasses( ){

} */
