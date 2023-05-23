import InputField from "../components/InputField";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

function ResetPasswordPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Восстановление пароля</h3>
      <InputField placeholder={"Введите новый пароль"} />
      <InputField placeholder={"Введите код из письма"} />
      <Button htmlType="button" type="primary" size="medium">
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
