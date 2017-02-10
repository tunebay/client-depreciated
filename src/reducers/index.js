import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth-reducer';
import profileReducer from './profile-reducer';
import uploadReducer from './hub/upload-reducer';
import sessionReducer from './session-reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  profile: profileReducer,
  upload: uploadReducer,
  session: sessionReducer
});

export default rootReducer;
