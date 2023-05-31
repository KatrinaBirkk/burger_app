import InputField from "../components/InputField";
import PasswordInputField from "../components/PasswordInputField";
// import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProfilePage() {
  // const navigate = useNavigate();

  const onChange = (e) => {
    // setValue({ ...form, [e.target.name]: e.target.value });
    setValue({ ...form, name, email });
  };
  const { name, email, password } = useSelector((state) => state.user);
  // console.log(name);
  // console.log(email);
  localStorage.setItem("name", name);
  const [form, setValue] = useState({ name, email, password });

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <h3 className="text text_type_main-large mb-6 mt-4">Профиль</h3>
        <h3 className="text text_type_main-large mb-6 mt-4">История заказов</h3>
        <h3 className="text text_type_main-large mb-6 mt-4">Выход</h3>
      </div>
      <div className={styles.form}>
        <InputField placeholder={"Имя"} value={name} onChange={onChange} />
        <InputField placeholder={"Логин"} value={email} onChange={onChange} />
        <PasswordInputField
          placeholder={"Пароль"}
          value={localStorage.getItem("password")}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default ProfilePage;
