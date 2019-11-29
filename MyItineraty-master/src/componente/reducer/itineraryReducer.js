import {GET_ITINERARY} from '../action/type';

const initialState={
  itineraris:[]
}

export default function (stateintinerary=initialState,action){
  switch (action.type){
    case GET_ITINERARY:
      return{
        ...stateintinerary,
        itineraris:action.payload
      };
      default:
        return stateintinerary;
  }
}