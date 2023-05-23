import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
// import { useNavigate } from "react-router-dom";

const NavButton = (props) => {
  return (
    <Button
      className={styles.button_inactive}
      htmlType="button"
      type="secondary"
      size="medium"
      onClick={props.onClick}
    >
      <props.iconName type="secondary" />
      <p className="text text_type_main-default">{props.text}</p>
    </Button>
  );
};

export default NavButton;
