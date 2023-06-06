import InputField from "../components/InputField";
import PasswordInputField from "../components/PasswordInputField";
// import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../services/actions/login";
import { getUserInfo } from "../services/actions/userInfo";

function ProfilePage() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const token = localStorage.getItem("RToken");
  console.log(token);

  const handleClick = () => {
    dispatch(logout(token));
  };

  // setValue({ ...form, name, email });

  const { name, email } = useSelector((state) => state.userInfo);

  const [form, setValue] = useState({ name, email });

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

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
          name={"name"}
          placeholder={"Имя"}
          value={name}
          onChange={onChange}
        />
        <InputField
          name={"email"}
          placeholder={"Логин"}
          value={email}
          onChange={onChange}
        />
        <PasswordInputField
          name={"password"}
          placeholder={"Пароль"}
          value={"************"}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default ProfilePage;
