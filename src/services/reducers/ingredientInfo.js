import { GET_INFO, WRITE_INFO } from "../actions/ingredientInfo";

const initialState = {
  info: {},
};

export const ingredientInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO: {
      return {
        ...state,
        info: action.info,
      };
    }
    case WRITE_INFO: {
      return {
        info: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
