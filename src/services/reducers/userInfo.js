import {
  SUBMIT_INFO_REQUEST,
  SUBMIT_INFO_SUCCESS,
  GET_INFO_REQUEST,
  GET_INFO_SUCCESS,
  UPDATE_INFO_REQUEST,
  UPDATE_INFO_SUCCESS,
  UPDATE_INFO_FAILED,
  NEW_ACCESS_TOKEN_REQUEST,
  NEW_ACCESS_TOKEN_SUCCESS,
  NEW_ACCESS_TOKEN_FAILED,
} from "../actions/userInfo";

const initialState = {
  email: null,
  name: null,
  userInfoRequest: false,
  userInfoRequestFailed: false,
  token: null,
  accessToken: null,
  refreshToken: null,
  updateInfoRequest: null,
};

export const getUserInfo = (state = initialState, action) => {
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
        name: action.name,
        email: action.email,
        token: action.token,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        userInfoRequestFailed: false,
        userInfoRequest: false,
      };
    }
    case GET_INFO_REQUEST: {
      return {
        ...state,
        userInfoRequest: true,
      };
    }
    case GET_INFO_SUCCESS: {
      return {
        ...state,
        name: action.name,
        email: action.email,
        userInfoRequestFailed: false,
        userInfoRequest: false,
      };
    }
    case UPDATE_INFO_REQUEST: {
      return {
        ...state,
        updateInfoRequest: true,
      };
    }
    case UPDATE_INFO_SUCCESS: {
      return {
        ...state,
        name: action.name,
        email: action.email,
        updateInfoRequest: false,
      };
    }
    case UPDATE_INFO_FAILED: {
      return {
        ...state,
        updateInfoRequest: false,
      };
    }
    case NEW_ACCESS_TOKEN_REQUEST: {
      return {
        ...state,
      };
    }
    case NEW_ACCESS_TOKEN_SUCCESS: {
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    }
    case NEW_ACCESS_TOKEN_FAILED: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
