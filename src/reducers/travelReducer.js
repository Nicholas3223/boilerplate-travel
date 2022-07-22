import { FETCH_TRAVEL_ITEMS, FETCH_ERROR } from "../actions/types";

const initialState = {
  travelData: [],
  fetchError: '',
};

const menuReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TRAVEL_ITEMS:
      return {
        ...state,
        travelData: action.payload,
      }
    case FETCH_ERROR:
      return {
        ...state,
        fetchError: action.payload.toString(),
      }
    default:
      return state;
  }
};

export default menuReducer;