import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  ADD_INGREDIENT,
} from "../actions/ingredientsList";

const initialState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,
  ingredients: [],
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        itemsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        itemsFailed: false,
        items: action.items,
        itemsRequest: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, itemsFailed: true, itemsRequest: false };
    }
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          ...state.items.filter((item) => item._id === action._id),
        ],
      };
    }
    default: {
      return state;
    }
  }
};
