import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from '../../utils/utils'
import { API_URL } from '../../config/config';
import { GET_ERRORS, SET_CURRENT_USER } from '../types'

//* Set logged user
export const setCurrentUser = (userData) => {
    return {
        type: SET_CURRENT_USER,
        payload: userData
    };
};

//* Registers the user and stores the token || Login existing users
export const register_login = (newUser, login = false) => (dispatch) => {
    let URL = API_URL + '/api/user/register';

    if (login) {
        URL = API_URL + '/api/user/login'
    }

    axios
        .post(URL, newUser)
        .then((res) => {
            //* Save token to local storage
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            //* Set token to Auth header
            setAuthToken(token);
            //* Decode token to get user Data
            const decodedUser = jwt_decode(token);
            dispatch(dispatch(setCurrentUser(decodedUser)));
        })
        .catch((error) => {
            dispatch({
                type: GET_ERRORS,
                payload: error.response
            })
        })
}

//* Checks if an email is available
export const isEmailAvailable = (email) => (dispatch) => {
    axios
        .post(API_URL + "/api/user/check-email", email)
        .then((res) => {
            console.log(res.data.message)
            dispatch({
                type: GET_ERRORS,
                payload: {}
            })
        })
        .catch((error) => {
            console.error(error.response.data)
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data
            })
        })
}

//* Lougout user, remove token from local storage and delete user data from redux store
export const logoutUser = () => (dispatch) => {
	//remove token from local storage
	localStorage.removeItem('jwtToken');
	//remove Auth header for future request
	setAuthToken(false);
	// Set current user to {} this will set isAuthenticated to false
	dispatch(setCurrentUser({}));
};

export const clearCurrentProfile = () => (dispatch) => {
	dispatch(setCurrentUser({}));
};