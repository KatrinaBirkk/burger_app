import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

const LogoPicture = () => {
  return (
    <div className={styles.logoPicture}>
      <Logo />
    </div>
  );
};

export default LogoPicture;
