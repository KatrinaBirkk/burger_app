// import AppHeader from "../components/AppHeader/AppHeader";
import InputField from "../components/InputField";
import PasswordInputField from "../components/PasswordInputField";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { authUser } from "../services/actions/login";
// import { userAuthentification } from "../services/actions/auth";
// import { setCookie } from "../components/utils";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setValue] = useState({ email: "", password: "" });
  // const [user, setUser] = useState(null);

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  // const loginRequest = () => {
  //   dispatch(authUser(form.email, form.password));
  //   console.log(form.password);
  // };

  // const { accessToken, refreshToken } = useSelector((state) => state.user);
  // console.log(accessToken);
  // console.log(refreshToken);

  const signIn = () => {
    dispatch(authUser(form.email, form.password));
  };

  // localStorage.setItem("token", accessToken);
  // let accessKey = localStorage.getItem("token");
  // accessKey > 0 ? console.log("success") : console.log("fail");
  // async function signIn() {
  //   let authResult = await LoginRequest();
  //   await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  //   if (accessToken) {
  //     console.log("success");
  //   } else {
  //     console.log("error");
  //   }

  // let promise = new Promise((loginRequest) => {
  //   setTimeout(() => loginRequest(), 1000);
  // });

  // let authResult = await loginRequest();
  // await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  // console.log(accessRequest, accessFailed);
  // if (accessFailed === true) {
  //   alert("Неверный логин или пароль");
  // } else {
  //   navigate("/profile");
  // }

  // const signIn = async () => {
  //   await loginRequest();
  //   if (accessFailed === true) {
  //     alert("Неверный логин или пароль");
  //     console.log(accessFailed);
  //   } else {
  //     console.log(accessFailed);
  //     navigate("/profile");
  //   }
  // };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Вход</h3>
      <InputField
        placeholder={"Логин"}
        name={"email"}
        value={form.email}
        onChange={onChange}
      />
      <PasswordInputField
        placeholder={"Пароль"}
        name={"password"}
        value={form.password}
        onChange={onChange}
      />
      <Button htmlType="button" type="primary" size="medium" onClick={signIn}>
        Войти
      </Button>
      <ul className={styles.list}>
        {" "}
        <li className="text text_type_main-default text_color_inactive">
          Вы новый пользователь?
          <span
            className={styles.link}
            onClick={() => {
              navigate("/register");
            }}
          >
            {" "}
            Зарегистрироваться
          </span>
        </li>
        <li className="text text_type_main-default text_color_inactive">
          Забыли пароль?
          <span
            className={styles.link}
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            {" "}
            Восстановить пароль
          </span>
        </li>
      </ul>
    </div>
  );
}

export default LoginPage;
