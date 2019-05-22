
import { GET_ERRORS } from '../types';

const initialState = {
    globalError: "error al accceder al dispositivo"
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ERRORS:
            return action.payload

        default:
            return state
    }

}