import axios from 'axios';
import querystring from 'querystring';

export const NUM_FORMS = "NUM_FORMS"; 
export const GET_POSTS = "NUM_FORMS";
// const ROOT_URL = "http://schdlr.herokuapp.com/api";
const ROOT_URL = "http://localhost:8080/api";

/**
 * Action to create a post request to fetch valid classes
 */
export function getClasses( values ){
    const timeslot =  values['timeslot']['value'];
    const distrib = values['distrib']['value'];
    const wc = values['wc']['value'];
    const request = axios
        .post(`${ROOT_URL}/getForms/`, querystring.stringify({timeslot: timeslot, distrib: distrib, wc: wc}));
    return {
        type: GET_POSTS,
        payload: request
    };
}
