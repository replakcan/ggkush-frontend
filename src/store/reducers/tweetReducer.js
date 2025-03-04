import { SET_TWEETS, SET_PEOPLE } from "../actions/tweetActions";

const initialState = {
  tweets: [],
  people: [],
};

export default function TweetReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TWEETS:
      return {
        ...state,
        tweets: action.payload,
      };
    case SET_PEOPLE:
      return {
        ...state,
        people: action.payload,
      };
    default:
      return state;
  }
}
