import {handleActions} from 'redux-actions';
import apiActionTypes from './actions';

const initialState = {
  profiles: []
};

const apiProfilesSuccess = (state, {payload}) => ({
  ...state,
  profiles: payload.results
});

const apiProfilesError = (state) => ({
  ...state,
  profiles: []
});

const apiReducer = handleActions({
  [apiActionTypes.API_GET_PROFILES_SUCCESS]: apiProfilesSuccess,
  [apiActionTypes.API_GET_PROFILES_ERROR]: apiProfilesError,
}, initialState);

export default apiReducer;