/* eslint-disable no-unused-vars */
import axios from "axios";

export const SET_USERS = "SET_USERS";

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users,
})

export const fetchUsers = () => {
    return async (dispatch, getState) => {
        axios.get("http://localhost:9000/ggkush/users")
            .then((res) => {
                dispatch({
                    type: SET_USERS,
                    payload: res.data
                })
            })
            .catch((e) => console.log(e))
    }
}