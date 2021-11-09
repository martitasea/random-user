import apiActionTypes, {
  apiProfilesSuccess
} from './actions';

const BASE_URL = 'https://randomuser.me/api';

export const ENDPOINTS = {
  results: `${BASE_URL}?results=8`,
};

const GET_PROFILES = (url) => {
  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    })
  }).then(response => {
    if (response.status === 200 && response.ok) {
      return response.json();
    } else {
      return Promise.reject( {
        status: response.status,
        message: response.statusText
      });
    }
  });
};


const apiMiddleware = () => {
  return store => next => action => {
    switch (action.type) {
    case apiActionTypes.API_GET_PROFILES:
      return GET_PROFILES(ENDPOINTS.results)
        .then(apiProfilesSuccess)
        .then(store.dispatch)
        .then(() => next(action));
    }
    return next(action);
  };
};

export default apiMiddleware();