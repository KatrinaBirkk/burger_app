import InputField from "../components/InputField";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { useDispatch } from "react-redux";
import { passwordRequest } from "../services/actions/login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const [form, setValue] = useState({ email: "" });
  // const [user, setUser] = useState(null);

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  // function checkResponse(res) {
  //   // console.log("checkResponse");
  //   // console.log(res);
  //   console.log(res.success);
  //   if (res && res.success) {
  //     navigate("/reset-password");
  //     return res;
  //   } else if (res && !res.success) {
  //     navigate("/");
  //     return res;
  //   }
  //   console.log("Error");
  // }

  // function sendEmail(res) {
  //   res.success ? navigate("/reset-password") : navigate("/");
  // }

  // const newPasswordRequest = async (email) => {
  //   return await fetch("https://norma.nomoreparties.space/api/password-reset", {
  //     method: "POST",
  //     mode: "cors",
  //     cache: "no-cache",
  //     credentials: "same-origin",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     redirect: "follow",
  //     referrerPolicy: "no-referrer",
  //     body: JSON.stringify({
  //       email: email,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => checkResponse(res));
  // };

  const newPasswordRequest = () => {
    dispatch(passwordRequest(form.email));
    navigate("/reset-password");
  };

  console.log(form.email);

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Восстановление пароля</h3>
      <InputField
        placeholder={"Укажите Email"}
        name={"email"}
        value={form.email}
        onChange={onChange}
      />
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={() => {
          newPasswordRequest(" ");
        }}
      >
        Восстановить
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

export default ForgotPasswordPage;
