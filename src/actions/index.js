import axios from 'axios';

export const NUM_FORMS = "NUM_FORMS"; 

export function submitNumForms( numOfForms ){
    return{
        type: NUM_FORMS,
        payload: parseInt(numOfForms)
    };
}
