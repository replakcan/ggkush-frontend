/* eslint-disable no-unused-vars */
import axios from "axios";

export const SET_TWEETS = "SET_TWEETS";
export const SET_PEOPLE = "SET_PEOPLE";

export const setTweets = (tweets) => ({
  type: SET_TWEETS,
  payload: tweets,
});

export const setPeople = (people) => ({
    type: SET_PEOPLE,
    payload: people,
  });

export const fetchTweets = (email, password) => {
  return async (dispatch, getState) => {
    await axios({
      method: "get",
      url: "http://localhost:9000/ggkush/tweets",
      auth: {
        username: email,
        password: password,
      },
    })
      .then((res) => {
        dispatch({
          type: SET_TWEETS,
          payload: res.data,
        });
      })
      .catch((e) => console.error(e));
  };
};

export const fetchPeople = (email, password) => {
    return async (dispatch, getState) => {
      await axios({
        method: "get",
        url: "http://localhost:9000/ggkush/users",
        auth: {
          username: email,
          password: password,
        },
      })
        .then((res) => {
          dispatch({
            type: SET_PEOPLE,
            payload: res.data,
          });
        })
        .catch((e) => console.error(e));
    };
  };