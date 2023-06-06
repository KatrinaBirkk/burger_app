import {
  SUBMIT_INFO_REQUEST,
  SUBMIT_INFO_SUCCESS,
  GET_INFO_REQUEST,
  GET_INFO_SUCCESS,
  // GET_INFO_FAILED,
} from "../actions/userInfo";

const initialState = {
  email: null,
  name: null,
  userInfoRequest: false,
  userInfoRequestFailed: false,
  token: null,
  accessToken: null,
  refreshToken: null,
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

    default: {
      return state;
    }
  }
};
