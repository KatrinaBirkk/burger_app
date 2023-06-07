// import InputField from "../components/InputField";
// import PasswordInputField from "../components/PasswordInputField";
// import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../services/actions/login";
import { getUserInfo, updateUserInfo } from "../services/actions/userInfo";
import {
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function ProfilePage() {
  const { email, name } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);
  const [form, setValue] = useState({ email, name });
  // console.log(form);
  // console.log(form.name);
  // console.log(name);

  // console.log(form.email);
  // console.log(email);

  const inputRef = useRef(null);

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  const onClick = () => {
    dispatch(updateUserInfo(form.email, form.name));
  };

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const token = localStorage.getItem("RToken");
  console.log(token);

  const handleClick = () => {
    dispatch(logout(token));
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
        <Input
          name={"name"}
          placeholder={"Имя"}
          value={form.name}
          icon={"EditIcon"}
          onChange={onChange}
          onIconClick={onIconClick}
          ref={inputRef}
        />
        <Input
          name={"email"}
          placeholder={"Логин"}
          icon={"EditIcon"}
          value={form.email}
          onChange={onChange}
          onIconClick={onIconClick}
          ref={inputRef}
        />
        <PasswordInput
          name={"password"}
          placeholder={"Пароль"}
          value={"************"}
          icon={"EditIcon"}
          onChange={onChange}
          ref={inputRef}
        />
        <Button
          disabled={form.name !== name || form.email !== email ? false : true}
          onClick={onClick}
        >
          Сохранить
        </Button>
        <Button type={"secondary"}>Отменить</Button>
      </div>
    </div>
  );
}
export default ProfilePage;
