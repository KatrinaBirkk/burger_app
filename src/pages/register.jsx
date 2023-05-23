import InputField from "../components/InputField";
import PasswordInputField from "../components/PasswordInputField";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Регистрация</h3>
      <InputField placeholder={"Name"} />
      <InputField placeholder={"Email"} />
      <PasswordInputField placeholder={"Password"} />
      <Button htmlType="button" type="primary" size="medium">
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
