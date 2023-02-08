import NavButton from "./NavButton";
import LogoPicture from "./LogoPicture";
import "../App.css";

import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  return (
    <div className="container">
      <div className="navMenu">
        <NavButton text="Constructor" iconName={BurgerIcon} />
        <NavButton text="Order list" iconName={ListIcon} />
        <LogoPicture />
        <NavButton text="Account" iconName={ProfileIcon} />
      </div>
    </div>
  );
};

export default AppHeader;
