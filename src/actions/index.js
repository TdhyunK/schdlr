import axios from 'axios';

export const NUM_FORMS = "NUM_FORMS"; 

export function createForms ( numOfForms ){
    return{
        type: NUM_FORMS,
        payload: numOfForms
    };
}
