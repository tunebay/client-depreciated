import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import { updateTrackName } from '../../../src/actions/hub/uploaded-track-actions';
import { UPDATE_TRACK_NAME } from '../../../src/actions/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Uploaded track actions', () => {
  it('dispatches update track name', () => {
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(updateTrackName('Name', 1));
    const actions = store.getActions();
    console.log(actions);
    expect(actions[0]).to.include({ type: UPDATE_TRACK_NAME, payload: 'Name', trackId: 1 });
  });
});
