import { GET_SIGHTINGS } from "../types";

const initialStateSightings = {
    sightings: [],
    load: true
}

export default function (state = initialStateSightings, action) {

    switch (action.type) {
        case GET_SIGHTINGS:
            return {
                ...state,
                sightings: action.payload,
                loading: false
            }
        default:
            return state
    }
}