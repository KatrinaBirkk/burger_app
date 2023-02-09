import NavButton from "./NavButton";
import LogoPicture from "./LogoPicture";
import "../AppHeader/appHeader.css";

import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  return (
    <div className="container">
      <div className="navMenu">
        <NavButton text="Конструктор" iconName={BurgerIcon} />
        <NavButton text="Лента заказов" iconName={ListIcon} />
        <LogoPicture />
        <NavButton text="Личный кабинет" iconName={ProfileIcon} />
      </div>
    </div>
  );
};

export default AppHeader;
