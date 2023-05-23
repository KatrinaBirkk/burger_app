import InputField from "../components/InputField";
import PasswordInputField from "../components/PasswordInputField";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <h3 className="text text_type_main-large mb-6 mt-4">Профиль</h3>
        <h3 className="text text_type_main-large mb-6 mt-4">История заказов</h3>
        <h3 className="text text_type_main-large mb-6 mt-4">Выход</h3>
      </div>
      <div className={styles.form}>
        <InputField placeholder={"Имя"} value={"Mark"} />
        <InputField placeholder={"Логин"} value={"mail@stellar.burgers"} />
        <PasswordInputField placeholder={"Пароль"} value={"********"} />
      </div>
    </div>
  );
}

export default ProfilePage;
