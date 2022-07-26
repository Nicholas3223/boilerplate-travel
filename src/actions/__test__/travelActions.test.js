import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from '../travelActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
    travelData: {},
  fetchError: "",
};

const store = mockStore(initialState);

describe('async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('returns data after correct request from fetchTravelItems', () => {
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
      ]
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: travelMockData
      });
    });
    store.dispatch(actions.fetchTravelItems())
      .then(() => {
        const newState = store.getState();
        expect(newState.menuData).toBe(travelMockData)
      });
  });

  test('returns error after failed axios.get request for menuItems', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: 'TypeError: There was an error fetching your data'
      });
    });
    store.dispatch(actions.fetchTravelItems())
    .then(() => {
      const newState = store.getState();
      expect(newState.errorFetching).toBe('TypeError: There was an error fetching your data')
    });
  });
});
