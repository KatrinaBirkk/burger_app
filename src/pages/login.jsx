// import AppHeader from "../components/AppHeader/AppHeader";
import InputField from "../components/InputField";
import PasswordInputField from "../components/PasswordInputField";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { authUser } from "../services/actions/userInfo";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setValue] = useState({ email: "", password: "" });

  const handleClick = () => {
    dispatch(authUser(form.email, form.password));
    console.log(form.email);
  };
  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

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
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={handleClick}
      >
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
