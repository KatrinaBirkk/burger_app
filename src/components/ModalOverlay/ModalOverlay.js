import { forwardRef } from "react";
import styles from "./modalOverlay.module.css";

const ModalOverlay = forwardRef((props, ref) => (
  <div ref={ref} className={styles.modalOverlay}></div>
));

export default ModalOverlay;
