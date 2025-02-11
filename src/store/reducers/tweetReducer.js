import { SET_TWEETS } from "../actions/tweetActions";

const initialState = {
    tweets: []
}

export default function TweetReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TWEETS:
            return {
                ...state,
                tweets: action.payload
            }
        default:
            return state;
    }
}