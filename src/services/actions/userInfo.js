import { _checkResponse, setCookie, getCookie } from "../../components/utils";

export const SUBMIT_INFO_REQUEST = "SUBMIT_INFO_REQUEST";
export const SUBMIT_INFO_SUCCESS = "SUBMIT_INFO_SUCCESS";
export const ACCESS_REQUEST = "ACCESS_REQUEST";
export const ACCESS_REQUEST_SUCCESS = "ACCESS_REQUEST_SUCCESS";
export const ACCESS_REQUEST_FAILED = "ACCESS_REQUEST_FAILED";

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

export function getAccess() {
  return function (dispatch) {
    dispatch({
      type: ACCESS_REQUEST,
    });
    fetch(`${API_URL}user`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Barrier" + getCookie("token"),
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    })
      .then(_checkResponse)
      .then((res) => {
        if (res && res.success) {
          console.log(res);
          dispatch({
            type: ACCESS_REQUEST_SUCCESS,
            name: res.user.name,
            email: res.user.email,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ACCESS_REQUEST_FAILED,
        });
      });
  };
}
