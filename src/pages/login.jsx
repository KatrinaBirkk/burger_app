// import AppHeader from "../components/AppHeader/AppHeader";

// import PasswordInputField from "../components/PasswordInputField";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { authUser } from "../services/actions/login";
import {
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setValue] = useState({ email: "", password: "" });
  // const [user, setUser] = useState(null);

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const signIn = () => {
    dispatch(authUser(form.email, form.password));
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Вход</h3>
      <Input
        placeholder={"Логин"}
        name={"email"}
        value={form.email}
        onChange={onChange}
      />
      <PasswordInput
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
