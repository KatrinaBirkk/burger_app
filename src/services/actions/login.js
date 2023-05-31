import { _checkResponse, setCookie } from "../../components/utils";
import { AUTH_CHECKING_SUCCESS } from "./auth";

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_REQUEST_SUCCESS = "AUTH_SUCCESS";
export const AUTH_REQUEST_FAILED = "AUTH_REQUEST_FAILED";

const API_URL = "https://norma.nomoreparties.space/api/auth/";

export function authUser(email, password) {
  return function (dispatch) {
    dispatch({
      type: AUTH_REQUEST,
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
      // .then((res) => {
      //   console.log(res);
      //   if (res) {
      //     dispatch({
      //       type: AUTH_CHECKING_SUCCESS,
      //     });
      //   }
      // })

      .then((res) => {
        if (res && res.success) {
          console.log(res);
          dispatch({
            type: AUTH_CHECKING_SUCCESS,
          });
          setCookie("token", res.refreshToken);
          dispatch({
            type: AUTH_REQUEST_SUCCESS,
            name: res.user.name,
            email: res.user.email,
            refreshToken: res.refreshToken,
            accessToken: res.accessToken,
          });
        } else {
          dispatch({
            type: AUTH_REQUEST_FAILED,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: AUTH_REQUEST_FAILED,
        });
      });
  };
}
