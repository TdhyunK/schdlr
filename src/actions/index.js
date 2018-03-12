import axios from 'axios';
import querystring from 'querystring';

export const NUM_FORMS = "NUM_FORMS"; 
export const GET_POSTS = "NUM_FORMS";
// const ROOT_URL = "http://schdlr.herokuapp.com/api";
const ROOT_URL = "http://localhost:8080/api";

/**
 * Action to create a post request to fetch valid classes
 */
export function getClasses(timeslot, distrib, wc){
    console.log(typeof timeslot);
    console.log(typeof distrib);
    console.log(typeof wc);
    const request = axios
        .post(`${ROOT_URL}/getForms/`, querystring.stringify({timeslot: timeslot, distrib: distrib, wc: wc}));
    return {
        type: GET_POSTS,
        payload: request
    };
}
