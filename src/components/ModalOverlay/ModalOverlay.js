import { forwardRef } from "react";
import "./modalOverlay.css";

const ModalOverlay = forwardRef((props, ref) => (
  <div ref={ref} className="modalOverlay"></div>
));

export default ModalOverlay;
