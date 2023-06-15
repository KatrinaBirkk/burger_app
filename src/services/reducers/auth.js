import {
  AUTH_CHECKING_REQUEST,
  AUTH_CHECKING_SUCCESS,
  AUTH_CHECKING_FAILED,
} from "../actions/auth";

const initialState = {
  authChecked: null,
};

export const authChecking = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_CHECKING_REQUEST: {
      return {
        ...state,
        authChecked: false,
      };
    }
    case AUTH_CHECKING_SUCCESS: {
      return {
        ...state,
        authChecked: true,
      };
    }
    case AUTH_CHECKING_FAILED: {
      return {
        ...state,
        authChecked: false,
      };
    }
    default: {
      return state;
    }
  }
};
