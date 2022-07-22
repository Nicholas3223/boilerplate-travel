import axios from 'axios';
import { FETCH_TRAVEL_ITEMS, FETCH_ERROR } from '../actions/types';

export const fetchTravelItems = () => async(dispatch) => {
  try {
    console.log('hello from action')
    const fetchedData = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
      type: FETCH_TRAVEL_ITEMS,
      payload: fetchedData,
    })
  } catch (err) {
    dispatch({
      type: FETCH_ERROR,
      payload: err,
    })
  }
};
