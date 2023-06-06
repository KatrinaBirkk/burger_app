import { _checkResponse } from "../../components/utils";

export const AUTH_CHECKING_REQUEST = "AUTH_CHECKING_REQUEST";
export const AUTH_CHECKING_SUCCESS = "AUTH_CHECKING_SUCCESS";
export const AUTH_CHECKING_FAILED = "AUTH_CHECKING_FAILED";

const API_URL = "https://norma.nomoreparties.space/api/auth/";

export function userAuthentification(email, password) {
  return function (dispatch) {
    dispatch({
      type: AUTH_CHECKING_REQUEST,
    });
    fetch(`${API_URL}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(_checkResponse)

      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: AUTH_CHECKING_SUCCESS,
            authChecked: true,
          });
        } else {
          dispatch({
            type: AUTH_CHECKING_FAILED,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: AUTH_CHECKING_FAILED,
        });
      });
  };
}
