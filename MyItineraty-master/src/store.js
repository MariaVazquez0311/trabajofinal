// import { combineReducers } from "redux";
// import citiesReducer from "./componente/reducer/cityReducer";
// const rootReducer = combineReducers({cities: citiesReducer});
// export default rootReducer;
import { createStore,  applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './componente/reducer/index';

const initialState={};
const middleWare =[thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);


export default store;