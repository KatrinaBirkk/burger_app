import {
  _checkResponse,
  setCookie,
  deleteCookie,
} from "../../components/utils";
import { AUTH_CHECKING_SUCCESS } from "./auth";

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_REQUEST_SUCCESS = "AUTH_SUCCESS";
export const AUTH_REQUEST_FAILED = "AUTH_REQUEST_FAILED";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const PASSWORD_REQUEST = "PASSWORD_REQUEST";
export const SUBMIT_PASSWORD_REQUEST = "SUBMIT_PASSWORD_REQUEST";
export const NEW_ACCESS_TOKEN_REQUEST = "NEW_ACCESS_TOKEN_REQUEST";

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
          setCookie("authChecked", true);
          dispatch({
            type: AUTH_CHECKING_SUCCESS,
          });
          setCookie("token", res.accessToken);
          dispatch({
            type: AUTH_REQUEST_SUCCESS,
            name: res.user.name,
            email: res.user.email,
            refreshToken: res.refreshToken,
            accessToken: res.accessToken,
          });
          localStorage.setItem("name", res.user.name);
          localStorage.setItem("login", res.user.email);
          localStorage.setItem("RToken", res.refreshToken);
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

export function logout(token) {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    fetch(`${API_URL}logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    })
      .then(_checkResponse)
      .then((res) => {
        if (res && res.success) {
          console.log(res);
          setCookie("authChecked", false);
          deleteCookie("token");
          localStorage.removeItem("name");
          // localStorage.removeItem("password");
          localStorage.removeItem("login");
          // localStorage.removeItem("RToken");
        }
      });
  };
}

export function passwordRequest(email) {
  return function (dispatch) {
    dispatch({
      type: PASSWORD_REQUEST,
    });
    fetch("https://norma.nomoreparties.space/api/password-reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    }).then(_checkResponse);
  };
}

export function refreshAccessToken(token) {
  return function (dispatch) {
    dispatch({
      type: NEW_ACCESS_TOKEN_REQUEST,
    });
    fetch(`${API_URL}token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    }).then(_checkResponse);
  };
}

export function resetPassword(password, token) {
  return function (dispatch) {
    dispatch({
      type: SUBMIT_PASSWORD_REQUEST,
    });
    fetch("https://norma.nomoreparties.space/api/password-reset/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    }).then(_checkResponse);
  };
}
