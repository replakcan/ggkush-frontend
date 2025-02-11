/* eslint-disable no-unused-vars */
import axios from "axios";

export const SET_TWEETS = "SET_TWEETS";

export const setTweets = (tweets) => ({
    type: SET_TWEETS,
    payload: tweets,
})

export const fetchTweets = () => {
    return async (dispatch, getState) => {
        axios.get("http://localhost:9000/ggkush/tweets")
            .then((res) => {
                dispatch({
                    type: SET_TWEETS,
                    payload: res.data
                })
            })
            .catch((e) => console.log(e))
    }
}