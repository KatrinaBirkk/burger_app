import {
  AUTH_REQUEST_SUCCESS,
  AUTH_REQUEST,
  SUBMIT_INFO_REQUEST,
  SUBMIT_INFO_SUCCESS,
  ACCESS_REQUEST,
  ACCESS_REQUEST_SUCCESS,
} from "../actions/userInfo";

const initialState = {
  email: null,
  name: null,
  userInfoRequest: false,
  userInfoRequestFailed: false,
  token: null,
  accessToken: null,
  refreshToken: null,
  accessRequest: false,
};

export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_INFO_REQUEST: {
      return {
        ...state,
        userInfoRequest: true,
      };
    }
    case SUBMIT_INFO_SUCCESS: {
      return {
        ...state,
        email: action.email,
        token: action.token,
        name: action.name,
        userInfoRequestFailed: false,
        userInfoRequest: false,
      };
    }
    case AUTH_REQUEST: {
      return {
        ...state,
        authRequest: true,
      };
    }
    case AUTH_REQUEST_SUCCESS: {
      return {
        ...state,
        email: action.email,
        refreshToken: action.refreshToken,
        accessToken: action.accessToken,
        userInfoRequestFailed: false,
        userInfoRequest: false,
      };
    }
    case ACCESS_REQUEST: {
      return {
        ...state,
        accessRequest: true,
      };
    }
    case ACCESS_REQUEST_SUCCESS: {
      return {
        ...state,
        accessRequest: false,
        name: action.name,
        email: action.email,
      };
    }
    default: {
      return state;
    }
  }
};
