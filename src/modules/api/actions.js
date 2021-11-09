import keyMirror from 'keymirror';
import {createAction} from 'redux-actions';

const apiActionTypes = keyMirror({
  API_GET_PROFILES: null,
  API_GET_PROFILES_SUCCESS: null,
  API_GET_PROFILES_ERROR: null,
});

export default apiActionTypes;

export const apiGetProfiles = createAction(apiActionTypes.API_GET_PROFILES);
export const apiProfilesSuccess = createAction(apiActionTypes.API_GET_PROFILES_SUCCESS);
export const apiProfilesError = createAction(apiActionTypes.API_GET_PROFILES_ERROR);