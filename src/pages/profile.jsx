import InputField from "../components/InputField";
import PasswordInputField from "../components/PasswordInputField";
// import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../services/actions/login";

function ProfilePage() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("RToken");
  console.log(token);

  const handleClick = () => {
    dispatch(logout(token));
  };

  const onChange = (e) => {
    // setValue({ ...form, [e.target.name]: e.target.value });
    setValue({ ...form, name, email });
  };
  const { name, email, password } = useSelector((state) => state.user);
  // console.log(name);
  // console.log(email);

  const [form, setValue] = useState({ name, email, password });

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <h3 className="text text_type_main-large mb-6 mt-4">Профиль</h3>
        <h3 className="text text_type_main-large mb-6 mt-4">История заказов</h3>
        <h3
          className="text text_type_main-large mb-6 mt-4"
          onClick={handleClick}
        >
          Выход
        </h3>
      </div>
      <div className={styles.form}>
        <InputField
          placeholder={"Имя"}
          value={localStorage.getItem("name")}
          onChange={onChange}
        />
        <InputField
          placeholder={"Логин"}
          value={localStorage.getItem("login")}
          onChange={onChange}
        />
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
