import NavButton from "./NavButton";
import LogoPicture from "./LogoPicture";
import styles from "./app-header.module.css";
import { useNavigate } from "react-router-dom";

import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.container}>
      <nav className={styles.navMenu}>
        <NavButton text="Конструктор" iconName={BurgerIcon} />
        <NavButton text="Лента заказов" iconName={ListIcon} />
        <LogoPicture />
        <NavButton
          text="Личный кабинет"
          iconName={ProfileIcon}
          onClick={() => {
            navigate("/login");
          }}
        />
      </nav>
    </header>
  );
};

export default AppHeader;
