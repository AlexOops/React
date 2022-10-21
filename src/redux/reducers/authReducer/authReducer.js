import {
    ERROR_LOGIN, ERROR_LOGOUT,
    ERROR_REGISTER,
    LOADING_LOGIN, LOADING_LOGOUT,
    LOADING_REGISTER,
    SUCCESS_LOGIN, SUCCESS_LOGOUT,
    SUCCESS_REGISTER
} from "../actionTypes";
import {auth} from "../../../servise/firebase";

const initialState = {
    loading: false,
    error: null,
    currentUser: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_LOGIN:
        case LOADING_REGISTER:
        case LOADING_LOGOUT:
            return {
                ...state,
                loading: true
            }

        case ERROR_LOGIN:
        case ERROR_LOGOUT:
        case ERROR_REGISTER:
            return {
                ...state,
                error: action.payload
            }

        case SUCCESS_LOGIN:
        case SUCCESS_REGISTER:
            return {
                ...state,
                currentUser: action.payload
            }

        case SUCCESS_LOGOUT:
            return {
                ...state,
                currentUser: state.currentUser = null
            }

        default:
            return state;
    }
}

export const registerInitiate = (email, password, displayName) => {
    return (dispatch) => {
        dispatch({type: LOADING_REGISTER})
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile({displayName: displayName}).then(r => console.log(r))
                dispatch({type: SUCCESS_REGISTER, payload: user})
            })
            .catch((error) => dispatch({type: ERROR_REGISTER, payload: error.toString()}))
    }
}

export const loginInitiate = (email, password) => {
    return (dispatch) => {
        dispatch({type: LOADING_LOGIN})
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch({type: SUCCESS_LOGIN, payload: user})
            })
            .catch((error) => dispatch({type: ERROR_LOGIN, payload: error.toString()}))
    }
}

export const logoutInitiate = () => {
    return (dispatch) => {
        dispatch({type: LOADING_LOGOUT})
        auth
            .signOut()
            .then(() => {
                dispatch({type: SUCCESS_LOGOUT})
            })
            .catch((error) => dispatch({type: ERROR_LOGOUT, payload: error.toString()}))
    }
}