import { _checkResponse, setCookie, getCookie } from "../../components/utils";
import { AUTH_CHECKING_SUCCESS } from "./auth";

export const SUBMIT_INFO_REQUEST = "SUBMIT_INFO_REQUEST";
export const SUBMIT_INFO_SUCCESS = "SUBMIT_INFO_SUCCESS";
export const ACCESS_REQUEST = "ACCESS_REQUEST";
export const ACCESS_REQUEST_SUCCESS = "ACCESS_REQUEST_SUCCESS";
export const ACCESS_REQUEST_FAILED = "ACCESS_REQUEST_FAILED";
export const GET_INFO_SUCCESS = "GET_INFO_SUCCESS";
export const GET_INFO_REQUEST = "GET_INFO_REQUEST";
export const GET_INFO_FAILED = "GET_INFO_FAILED";
export const UPDATE_INFO_REQUEST = "UPDATE_INFO_REQUEST";
export const UPDATE_INFO_SUCCESS = "UPDATE_INFO_SUCCESS";
export const UPDATE_INFO_FAILED = "UPDATE_INFO_FAILED";
export const NEW_ACCESS_TOKEN_REQUEST = "NEW_ACCESS_TOKEN_REQUEST";
export const NEW_ACCESS_TOKEN_SUCCESS = "NEW_ACCESS_TOKEN_SUCCESS";
export const NEW_ACCESS_TOKEN_FAILED = "NEW_ACCESS_TOKEN_FAILED";

const API_URL = "https://norma.nomoreparties.space/api/auth/";

export function registerUser(name, email, password) {
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
        name: name,
        email: email,
        password: password,
      }),
    })
      .then(_checkResponse)

      .then((res) => {
        if (res && res.success) {
          setCookie("token", res.accessToken);
          setCookie("authChecked", true);
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          localStorage.setItem("RToken", res.refreshToken);

          dispatch({
            type: AUTH_CHECKING_SUCCESS,
          });
          dispatch({
            type: SUBMIT_INFO_SUCCESS,
            email: res.user.email,
            name: res.user.name,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          });
        }
      })
      .catch((error) => {});
  };
}

export function getUserInfo() {
  return function (dispatch) {
    dispatch({
      type: GET_INFO_REQUEST,
    });
    fetch(`${API_URL}user`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    })
      .then(_checkResponse)
      .then((res) => {
        if (res && res.success) {
          localStorage.setItem("name", res.user.name);
          localStorage.setItem("email", res.user.email);
          dispatch({
            type: GET_INFO_SUCCESS,
            name: res.user.name,
            email: res.user.email,
          });
        } else {
          dispatch({
            type: GET_INFO_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_INFO_FAILED,
        });
      });
  };
}

export function updateUserInfo(name, email, token) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_INFO_REQUEST,
    });
    fetch(`${API_URL}user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    })
      .then(_checkResponse)
      .then((res) => {
        if (res && res.success) {
          localStorage.setItem("name", res.user.name);
          localStorage.setItem("email", res.user.email);
          dispatch({
            type: UPDATE_INFO_SUCCESS,
            name: res.user.name,
            email: res.user.email,
          });
        }
      })
      .catch((err) => {
        dispatch(refreshAccessToken(token));
      });
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
    })
      .then(_checkResponse)
      .then((res) => {
        if (res && res.success) {
          setCookie("authChecked", true);
          setCookie("token", res.accessToken);
          localStorage.setItem("RToken", res.refreshToken);
          dispatch({
            type: NEW_ACCESS_TOKEN_SUCCESS,
          });
        } else {
          dispatch({
            type: NEW_ACCESS_TOKEN_FAILED,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: NEW_ACCESS_TOKEN_FAILED,
        });
      });
  };
}
