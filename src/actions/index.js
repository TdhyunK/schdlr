import axios from 'axios';

export const NUM_FORMS = "NUM_FORMS"; 
export const GET_POSTS = "NUM_FORMS";
const ROOT_URL = "http://schdlr.herokuapp.com/api";

/**
 * Action to submit how many classes you want to pick
 */
export function submitNumForms( numOfForms ){
    return{
        type: NUM_FORMS,
        payload: parseInt(numOfForms)
    };
}

/**
 * Action to create a post request to fetch valid classes
 */
export function getClasses( values ){
    const request = axios
        .post(`${ROOT_URL}/getForms`, (values));
    return {
        type: GET_POSTS,
        payload: request
    };
}
