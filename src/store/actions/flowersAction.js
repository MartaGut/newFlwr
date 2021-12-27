import { GET_FLOWERS, FLOWERS_ERROR } from '../types';
import api from '../../apis/api';

export const getFlowers = () => async dispatch => {

    try {
        const response = await api.get('/flowers')
        dispatch({
            type: GET_FLOWERS,
            payload: response.data.flowers
        })
    }

    catch (e) {
        dispatch({
            type: FLOWERS_ERROR,
            payload: console.log(e),
        })
    }
} 