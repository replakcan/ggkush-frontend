import { SET_AUTH } from "../actions/userActions";

const initialState = {
    user_auth: {
        username: "test@is.com",
        password: "123Alper"
    }
}

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                user_auth: action.payload
            }
        default:
            return state;
    }
}