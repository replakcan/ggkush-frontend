/* eslint-disable no-unused-vars */
import axios from "axios";

export const SET_AUTH = "SET_AUTH";

export const setAuth = (users) => ({
  type: SET_AUTH,
  payload: users,
});

export const userLogin = (data) => {
  return async (dispatch, getState) => {
    axios({
      method: "post",
      data: data,
      url: "http://localhost:9000/ggkush/auth/login",
    })
      .then((res) => {
        dispatch({
          type: SET_AUTH,
          payload: res.data,
        });
      })
      .catch((e) => console.error(e.response.data.message));
  };
};
