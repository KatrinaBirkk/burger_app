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
          setCookie("token", res.accessToken);
          setCookie("authChecked", true);
          localStorage.setItem("name", name);
          localStorage.setItem("password", password);
          localStorage.setItem("login", email);
          localStorage.setItem("RToken", res.refreshToken);
          console.log(res);
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
      .catch((error) => {
        console.log(error);
      });
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
          console.log(res);
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

export function updateUserInfo(name, email) {
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
          console.log(res);
          dispatch({
            type: UPDATE_INFO_SUCCESS,
            name: res.user.name,
            email: res.user.email,
          });
        } else {
          dispatch({
            type: UPDATE_INFO_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_INFO_FAILED,
        });
      });
  };
}
