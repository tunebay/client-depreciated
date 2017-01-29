import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth-reducer';
import profileReducer from './profile-reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  profile: profileReducer
});

export default rootReducer;
