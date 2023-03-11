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
      // return { todos: [...state.todos, action.payload] };
      // console.log(action);
      return {
        // ...state,
        info: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
