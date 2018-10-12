import { createStore, combineReducers } from 'redux'
import placeReducer from './reducers/PlaceReducer'

const initialState = {
  placeName: '',
  places: []
};


const rootReducer = combineReducers({
  places: placeReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;