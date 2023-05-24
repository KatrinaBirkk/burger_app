import { _checkResponse } from "../../components/utils";

export const SUBMIT_INFO_REQUEST = "SUBMIT_INFO_REQUEST";
export const SUBMIT_INFO_SUCCESS = "SUBMIT_INFO_SUCCESS";
export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";

const API_URL = "https://norma.nomoreparties.space/api/auth/";

export function registerUser(email, password, name) {
  return function (dispatch) {
    dispatch({
      type: SUBMIT_INFO_REQUEST,
    });
    fetch(`${API_URL}register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then(_checkResponse)

      .then((res) => {
        if (res && res.success) {
          console.log(res);
          dispatch({
            type: SUBMIT_INFO_SUCCESS,
            email: res.user.email,
            token: res.accessToken,
            name: res.user.name,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

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

      .then((res) => {
        if (res && res.success) {
          console.log(res);
          dispatch({
            type: AUTH_SUCCESS,
            email: res.user.email,
            refreshToken: res.refreshToken,
            accessToken: res.accessToken,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
