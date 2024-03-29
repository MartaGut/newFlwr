import { GET_FLOWERS } from '../types';


const initialState = {
    flowers: [],
    loading: true
}

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_FLOWERS:
            return {
                ...state,
                flowers: action.payload,
                loading: false
            }
        default: return state;
    }
}