import { ADD_INGREDIENT, DEL_INGREDIENT } from "../actions/constructorList";

const initialState = {
  ingredients: [],
  items: [],
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          ...state.items.filter((item) => item.id === action.id),
        ],
      };
    }
    default: {
      return state;
    }
  }
};
