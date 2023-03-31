import NavButton from "./NavButton";
import LogoPicture from "./LogoPicture";
import styles from "./app-header.module.css";

import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  return (
    <header>
      <div className={styles.container}>
        <nav className={styles.navMenu}>
          <NavButton text="Конструктор" iconName={BurgerIcon} />
          <NavButton text="Лента заказов" iconName={ListIcon} />
          <LogoPicture />
          <NavButton text="Личный кабинет" iconName={ProfileIcon} />
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
