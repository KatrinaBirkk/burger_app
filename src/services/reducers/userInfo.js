import {
  SUBMIT_INFO_REQUEST,
  SUBMIT_INFO_SUCCESS,
  // ACCESS_REQUEST,
  // ACCESS_REQUEST_SUCCESS,
  // ACCESS_REQUEST_FAILED,
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
        email: action.email,
        token: action.token,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        name: action.name,
        userInfoRequestFailed: false,
        userInfoRequest: false,
      };
    }

    // case ACCESS_REQUEST: {
    //   return {
    //     ...state,
    //     accessRequest: true,
    //   };
    // }
    // case ACCESS_REQUEST_SUCCESS: {
    //   return {
    //     ...state,
    //     accessRequest: false,
    //     accessFailed: false,
    //     name: action.name,
    //     email: action.email,
    //   };
    // }
    // case ACCESS_REQUEST_FAILED: {
    //   return { ...state, accessFailed: true, accessRequest: false };
    // }
    default: {
      return state;
    }
  }
};
