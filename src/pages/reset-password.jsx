import InputField from "../components/InputField";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPassword } from "../services/actions/login";
import { useState } from "react";

function ResetPasswordPage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [form, setValue] = useState({ password: "" });

  const token = localStorage.getItem("RToken");

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const submitNewPassword = () => {
    dispatch(resetPassword(form.password, token));
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Восстановление пароля</h3>
      <InputField
        placeholder={"Введите новый пароль"}
        name={"password"}
        value={form.password}
        onChange={onChange}
      />
      {/* <InputField placeholder={"Введите код из письма"} /> */}
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={submitNewPassword}
      >
        Сохранить
      </Button>
      <ul className={styles.list}>
        {" "}
        <li className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
          <span
            className={styles.link}
            onClick={() => {
              navigate("/login");
            }}
          >
            {" "}
            Войти
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ResetPasswordPage;
