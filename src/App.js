import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTravelItems } from './actions/travelActions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTravelItems());
  }, []);
  const { travelData } = useSelector((state) => state.travelReducer);

  console.log('travelData', travelData);
  return (
    <div className="App">
      Boilerplate app
    </div>
  );
}

export default App;
