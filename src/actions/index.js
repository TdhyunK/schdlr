import axios from 'axios';
import querystring from 'querystring';

export const GET_POSTS = "NUM_FORMS";
const ROOT_URL = "http://schdlr.herokuapp.com/api";
//const ROOT_URL = "http://localhost:8080/api";

/**
 * Action to create a post request to fetch valid classes
 */
export function getClasses(timeslot, distrib, wc){
    distrib = distrib == "null" ? null : distrib;
    wc = wc == "null" ? null : wc;
    const request = axios
        .post(`${ROOT_URL}/getForms/`, querystring.stringify({timeslot: timeslot, distrib: distrib, wc: wc}));
    return {
        type: GET_POSTS,
        payload: request
    };
}
