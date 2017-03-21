import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import {
  updateTrackName,
  updateSingleStatus,
  updateTrackPrice
} from '../../../src/actions/hub/uploaded-track-actions';
import {
  UPDATE_TRACK_NAME,
  UPDATE_SINGLE_STATUS,
  UPDATE_TRACK_PRICE
} from '../../../src/actions/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Uploaded track actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('dispatches update track name', () => {
    store.dispatch(updateTrackName('Name', 1));
    const actions = store.getActions();
    expect(actions[0]).to.include({ type: UPDATE_TRACK_NAME, payload: 'Name', trackId: 1 });
  });

  it('dispatches update single status', () => {
    store.dispatch(updateSingleStatus(true, 1));
    const actions = store.getActions();
    expect(actions[0]).to.include({ type: UPDATE_SINGLE_STATUS, payload: true, trackId: 1 });
  });

  it('dispatches update single status', () => {
    store.dispatch(updateTrackPrice(0.79, 1));
    const actions = store.getActions();
    expect(actions[0]).to.include({ type: UPDATE_TRACK_PRICE, payload: 0.79, trackId: 1 });
  });
});
