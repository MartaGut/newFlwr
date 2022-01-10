import { combineReducers } from 'redux';
import flowersReducer from './flowerReducer';
import sightingsReducer from './sightingsReducer';
import authReducer from './authReducer';

export default combineReducers({
    flowers: flowersReducer,
    sightings: sightingsReducer,
    users: authReducer
})