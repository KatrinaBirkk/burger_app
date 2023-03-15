import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  ADD_INGREDIENT,
  INCREASE_INGREDIENT,
  DELETE_INGREDIENT,
  REPLACE_INGREDIENT,
} from "../actions/ingredientsList";

const initialState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,
  bun: [
    {
      calories: 643,
      carbohydrates: 85,
      fat: 26,
      image: "https://code.s3.yandex.net/react/code/bun-01.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
      name: "Флюоресцентная булка R2-D3",
      price: 988,
      type: "bun",
      __v: 1,
      _id: "60d3b41abdacab0026a733c7",
    },
  ],
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
      return {
        ...state,
        bun: [...state.items.filter((item) => item._id === action._id)],
      };
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
    case INCREASE_INGREDIENT: {
      return {
        ...state,
        items: [...state.items].map((item) =>
          item._id === action._id ? { ...item, __v: ++item.__v } : item
        ),
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter(
          (item) => item._id !== action._id
        ),
        items: [...state.items].map((item) =>
          item._id === action._id ? { ...item, __v: --item.__v } : item
        ),
      };
    }
    default: {
      return state;
    }
  }
};
