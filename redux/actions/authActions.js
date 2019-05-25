import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from '../../utils/utils'
import { API_URL } from '../../config/config';
import { GET_ERRORS, SET_CURRENT_USER } from '../types'

//* Registers the user and stores the token
export const register = (newUser) => (dispatch) => {
    axios
        .post(API_URL + "/api/user/register", newUser)
        .then((res) => {
            //* Save token to local storage
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            //* Set token to Auth header
            setAuthToken(token);
            //* Decode token to get user Data
            const decodedUser = jwt_decode(token);
            dispatch({
                type: SET_CURRENT_USER,
                payload: decodedUser
            })

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