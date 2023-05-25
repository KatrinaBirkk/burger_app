// import { useNavigate } from "react-router-dom";

export const totalPriceSelector = (state) => {
  const {
    items: { items },
  } = state;
  return items.reduce((acc, item) => acc + item.price * item.counter, 0);
};

export const _checkResponse = (res) => {
  if (res.ok || res.success) {
    console.log(res);
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name, value, props) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function deleteCookie(name) {
  setCookie(name, null, { expires: -1 });
}

// export function NavigateToPage(path) {
//   const navigate = useNavigate();
//   navigate(path);
// }
