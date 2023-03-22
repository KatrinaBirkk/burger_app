// import { getIngredientsRequest } from "../API";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const INCREASE_INGREDIENT = "INCREASE_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const REPLACE_INGREDIENT = "REPLACE_INGREDIENT";
export const INCREASE_INGREDIENT_BUN = "INCREASE_INGREDIENT_BUN";

const API_URL = "https://norma.nomoreparties.space/api/ingredients";

export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            items: res.data,
          });
          // console.log(res.data);
        } else {
          // console.log("ELSE");
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          });
        }
      })
      .catch((err) => {
        // console.log("catch");
        // Если сервер не вернул данных, также отправляем экшен об ошибке
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
      });
  };
}
