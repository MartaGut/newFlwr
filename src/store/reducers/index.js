import { combineReducers } from 'redux';
import flowersReducer from './flowerReducer';
import sightingsReducer from './sightingsReducer';

export default combineReducers({
    flowers: flowersReducer,
    sightings: sightingsReducer
})