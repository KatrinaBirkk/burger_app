import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

const NavButton = (props) => {
  return (
    <Button
      className={styles.button_inactive}
      htmlType="button"
      type="secondary"
      size="medium"
    >
      <props.iconName type="secondary" />
      <p className="text text_type_main-default">{props.text}</p>
    </Button>
  );
};

export default NavButton;
