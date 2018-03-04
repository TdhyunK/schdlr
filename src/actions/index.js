import axios from 'axios';
import querystring from 'querystring';

export const NUM_FORMS = "NUM_FORMS"; 
export const GET_POSTS = "NUM_FORMS";
// const ROOT_URL = "http://schdlr.herokuapp.com/api";
const ROOT_URL = "http://localhost:8080/api";

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
    const distrib = values['distrib-0']['value'];
    const timeslot =  !values['timeslot-0']['value'] ? null : values['timeslot-0']['value'];
    const wc = !values['wc-0']['value'] ? null : values['wc-0']['value'];
    const request = axios
        .post(`${ROOT_URL}/getForms/`, querystring.stringify({timeslot: timeslot, distrib: distrib, wc: wc}));
    return {
        type: GET_POSTS,
        payload: request
    };
}
