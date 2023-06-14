import styles from "./profile.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../services/actions/login";
import { updateUserInfo } from "../services/actions/userInfo";
import {
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let email = localStorage.getItem("email");
  let name = localStorage.getItem("name");

  const [form, setValue] = useState({ name, email });

  const cancelChanges = () => {
    let email = localStorage.getItem("email");
    let name = localStorage.getItem("name");
    // console.log(name);
    // console.log(email);
    setValue({ name, email });
  };

  // console.log(form.name);
  // console.log(name);

  // console.log(form.email);
  // console.log(email);

  const formSubmit = () => {
    dispatch(updateUserInfo(form.name, form.email, token));
  };

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const token = localStorage.getItem("RToken");
  console.log(token);

  const handleClick = () => {
    dispatch(logout(token));
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <h3 className="text text_type_main-large mb-6 mt-4">Профиль</h3>
        <h3
          className="text text_type_main-large mb-6 mt-4 text_color_inactive"
          onClick={() => {
            navigate("/order-history");
          }}
        >
          История заказов
        </h3>
        <h3
          className="text text_type_main-large mb-6 mt-4 text_color_inactive"
          onClick={handleClick}
        >
          Выход
        </h3>
      </div>
      <div className={styles.form}>
        <EmailInput
          onChange={onChange}
          value={form.name}
          disabled={false}
          error={false}
          name={"name"}
          placeholder="Логин"
          isIcon={true}
          extraClass="mb-2"
        />
        <EmailInput
          onChange={onChange}
          value={form.email}
          name={"email"}
          isIcon={false}
        />
        <PasswordInput
          name={"password"}
          placeholder={"Пароль"}
          value={"************"}
          icon={"EditIcon"}
        />
        <div>
          <Button htmlType={"reset"} type={"secondary"} onClick={cancelChanges}>
            Отменa
          </Button>
          <Button
            htmlType={"submit"}
            // disabled={form.name !== name || form.email !== email ? false : true}
            onClick={formSubmit}
          >
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
