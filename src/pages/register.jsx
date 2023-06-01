import InputField from "../components/InputField";
import PasswordInputField from "../components/PasswordInputField";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/actions/userInfo";
import { useDispatch } from "react-redux";
import { useState } from "react";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setValue] = useState({ name: "", email: "", password: "" });

  const handleClick = () => {
    dispatch(registerUser(form.email, form.password, form.name));
  };
  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Регистрация</h3>
      <InputField
        placeholder={"Name"}
        name={"name"}
        onChange={onChange}
        value={form.name}
      />
      <InputField
        placeholder={"Email"}
        name={"email"}
        onChange={onChange}
        value={form.email}
      />
      <PasswordInputField
        placeholder={"Password"}
        name={"password"}
        onChange={onChange}
        value={form.password}
      />
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={handleClick}
      >
        Зарегистрироваться
      </Button>
      <ul className={styles.list}>
        {" "}
        <li className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?
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

export default RegisterPage;
