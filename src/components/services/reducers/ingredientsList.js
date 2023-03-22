import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  ADD_INGREDIENT,
  INCREASE_INGREDIENT,
  DELETE_INGREDIENT,
  REPLACE_INGREDIENT,
  INCREASE_INGREDIENT_BUN,
} from "../actions/ingredientsList";

import uuid from "react-uuid";

const initialState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,
  order: [],
  bun: [],
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
    case REPLACE_INGREDIENT: {
      const filteredItems = state.items.filter(
        (item) => item._id === action._id
      );
      return {
        ...state,
        items: [
          ...state.items.map((item) => {
            if (item._id === action._id) {
              return {
                ...item,
                counter: !item.counter ? action.counter : item.counter,
              };
            }
            return {
              ...item,
              counter: 0,
            };
          }),
        ],
        bun: [...filteredItems],
      };
    }
    case ADD_INGREDIENT: {
      const filteredItems = state.items.filter(
        (item) => item._id === action._id
      );
      const filteredItemsNew = filteredItems.map((filteredItem) => {
        return { ...filteredItem, id: uuid() };
      });
      return {
        ...state,
        items: [
          ...state.items.map((item) => {
            if (item._id === action._id) {
              return {
                ...item,
                // counter: action.counter,
                counter: !item.counter ? action.counter : item.counter,
              };
            }
            return item;
          }),
        ],
        ingredients: [...state.ingredients, ...filteredItemsNew],
      };
    }
    case INCREASE_INGREDIENT: {
      return {
        ...state,
        items: [...state.items].map((item) =>
          item._id === action._id ? { ...item, counter: ++item.counter } : item
        ),
      };
    }
    case INCREASE_INGREDIENT_BUN: {
      return {
        ...state,
        items: [...state.items].map((item) =>
          item._id === action._id ? { ...item, counter: 2 } : item
        ),
      };
    }

    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter(
          (ingredient) => ingredient.id !== action.id
        ),
        items: [...state.items].map((item) =>
          item._id === action._id ? { ...item, counter: --item.counter } : item
        ),
      };
    }
    default: {
      return state;
    }
  }
};
