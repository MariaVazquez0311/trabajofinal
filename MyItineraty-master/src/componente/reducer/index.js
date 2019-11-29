import { combineReducers } from 'redux';
import reducer from './cityReducer';
import itineraryReducer from './itineraryReducer';
// import authReducer from './authReducer';

export default combineReducers({
  city: reducer,
  itinerary: itineraryReducer,
//   auth: authReducer
});