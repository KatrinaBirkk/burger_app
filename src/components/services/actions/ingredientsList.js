export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const INCREASE_INGREDIENT = "INCREASE_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const REPLACE_INGREDIENT = "REPLACE_INGREDIENT";
export const INCREASE_INGREDIENT_BUN = "INCREASE_INGREDIENT_BUN";
export const SUBMIT_ORDER_SUCCESS = "SUBMIT_ORDER_SUCCESS";
export const SUBMIT_ORDER_REQUEST = "SUBMIT_ORDER_REQUEST";
export const COMBINE_INGREDIENTS = "COMBINE_INGREDIENTS";
export const SUBMIT_ORDER_FAILED = "SUBMIT_ORDER_FAILED";
export const UPDATE_LIST = "UPDATE_LIST";

const API_URL = "https://norma.nomoreparties.space/api/ingredients";

export function getOrderNumber(info) {
  return function (dispatch) {
    dispatch({
      type: SUBMIT_ORDER_REQUEST,
    });
    fetch(`https://norma.nomoreparties.space/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: info,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: SUBMIT_ORDER_SUCCESS,
            order: res,
          });
        }
      })

      .catch((error) => {
        console.error(error);
      });
  };
}

export function sortListItems(list) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_LIST,
      ingredients: [...list],
    });
  };
}

export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            items: res.data,
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
      });
  };
}

// export function listenScroll() {
//   return function(dispatch) {
//     dispatch({
//     type: MEASURE_SCROLL

//   }
// }
