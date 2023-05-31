import {
  AUTH_REQUEST_SUCCESS,
  AUTH_REQUEST,
  AUTH_REQUEST_FAILED,
} from "../actions/login";

const initialState = {
  name: null,
  email: null,
  token: null,
  accessToken: null,
  refreshToken: null,
  authFailed: false,
  authRequest: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST: {
      return {
        ...state,
        authRequest: true,
      };
    }
    case AUTH_REQUEST_SUCCESS: {
      return {
        ...state,
        name: action.name,
        email: action.email,
        refreshToken: action.refreshToken,
        accessToken: action.accessToken,
        authFailed: false,
        authRequest: false,
      };
    }
    case AUTH_REQUEST_FAILED: {
      return {
        ...state,
        authRequest: false,
        authFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
