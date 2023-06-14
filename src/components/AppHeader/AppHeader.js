import NavButton from "./NavButton";
import LogoPicture from "./LogoPicture";
import styles from "./app-header.module.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  const navigate = useNavigate();

  const location = useLocation();
  // console.log(location.pathname);

  return (
    <header className={styles.container}>
      <nav className={styles.navMenu}>
        <NavButton
          className={
            location.pathname === "/"
              ? styles.button_active
              : styles.button_inactive
          }
          type={`${location.pathname === "/" ? "primary" : "secondary"}`}
          text="Конструктор"
          iconName={BurgerIcon}
          onClick={() => {
            navigate("/");
          }}
        />
        <NavButton
          text="Лента заказов"
          iconName={ListIcon}
          className={
            location.pathname === "/order-list"
              ? styles.button_active
              : styles.button_inactive
          }
          type={`${
            location.pathname === "/order-list" ? "primary" : "secondary"
          }`}
        />
        <LogoPicture />
        <NavButton
          className={
            location.pathname === "/profile"
              ? styles.button_active
              : styles.button_inactive
          }
          text="Личный кабинет"
          iconName={ProfileIcon}
          type={`${location.pathname === "/profile" ? "primary" : "secondary"}`}
          onClick={() => {
            navigate("/login");
          }}
        />
      </nav>
    </header>
  );
};

export default AppHeader;
