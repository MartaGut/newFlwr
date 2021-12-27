import { GET_SIGHTINGS, SIGHTINGS_ERROR } from "../types";
import api from '../../apis/api';

export const getSightings = () => async dispatch => {

    try {
        const response = await api.get('/sightings');
        dispatch({
            type: GET_SIGHTINGS,
            payload: response.data.sightings
        })
    }

    catch (e) {
        dispatch({
            type: SIGHTINGS_ERROR,
            payload: console.log(e),
        })
    }
}