/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import * as redux from 'react-redux'
 import { render, screen } from '@testing-library/react';
 import '@testing-library/jest-dom';
 
 import App from './App';

 const travelMockData = {
  type: "FETCH_TRAVEL_ITEMS",
  payload: {
    data: [
      {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
    ],
  }
};
 
jest.mock('./actions/travelActions', () => ({
  fetchTravelItems: () => travelMockData,
}));
 
const mockAppState = {
  travelReducer: {
    travelData: {
      data: [
        {
          userId: 1,
          id: 1,
          title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          userId: 1,
          id: 2,
          title: "qui est esse",
          body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
      ],
    },
    fetchError: '',
  },
};
 
 const mockDispatch = jest.fn();
 jest.mock('react-redux', () => ({
   useSelector: jest.fn().mockImplementation(() => {}),
   useDispatch: () => mockDispatch,
 }));
 
 test('renders the App component with title visible', () => {
   jest
     .spyOn(redux, 'useSelector')
     .mockImplementation((callback) => callback(mockAppState));
   render(
       <App/>
   );

  const title = screen.getByText(/Boilerplate app/);
  expect(title).toBeVisible();
 });