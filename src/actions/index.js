import axios from 'axios';

export const NUM_FORMS = "NUM_FORMS"; 
export const GET_POSTS = "NUM_FORMS";
const ROOT_URL = "http://localhost:8080/api";

export function submitNumForms( numOfForms ){
    return{
        type: NUM_FORMS,
        payload: parseInt(numOfForms)
    };
}

export function getClasses( values ){
    const request = axios
        .post(`${ROOT_URL}/getForms`, (values));
    return {
        type: GET_POSTS,
        payload: request
    };
}
