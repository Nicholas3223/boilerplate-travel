import * as types from '../../actions/types';

import travelReducer from '../travelReducer';

const initialState = {
  travelData: [],
  fetchError: "",
};

const travelMockData = {
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
};

test('Reducer returns the initial state', () => {
  expect(travelReducer(undefined, {})).toEqual(initialState);
})

test('Handles FETCH_TRAVEL_ITEMS', () => {
  expect(
    travelReducer([], {
      type: types.FETCH_TRAVEL_ITEMS,
      payload: travelMockData,
    })
  ).toEqual({
    travelData: travelMockData,
  })
});

test('Handles FETCH_ERROR', () => {
  expect(
    travelReducer([], {
      type: types.FETCH_ERROR,
      payload: 'TypeError: error fetching data',
    })
  ).toEqual({
    fetchError: 'TypeError: error fetching data',
  })
});