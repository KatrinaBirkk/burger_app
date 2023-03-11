import { ADD_INGREDIENT, DEL_INGREDIENT } from "../actions/constructorList";

const initialState = {
  ingredients: [
    // {
    //   calories: 420,
    //   carbohydrates: 53,
    //   fat: 24,
    //   image: "https://code.s3.yandex.net/react/code/bun-02.png",
    //   name: "Краторная булка N-200i",
    //   price: 1255,
    //   _id: "60d3b41abdacab0026a733c6",
    // },
  ],
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
