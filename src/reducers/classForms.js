import { GET_POSTS } from "../actions/index";

export default function(state={}, action){
    switch(action.type){
        case GET_POSTS:
            return action.payload.data.data;
        default:
            return state;
    }
}
