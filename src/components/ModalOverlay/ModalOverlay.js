// const FancyButton = React.forwardRef((props, ref) => (
//   <button ref={ref} className="FancyButton">
//     {props.children}
//   </button>
// ));

import { forwardRef } from "react";
import "./modalOverlay.css";

const ModalOverlay = forwardRef((props, ref) => (
  <div ref={ref} className="modalOverlay"></div>
));

// const ModalOverlay = () => <div className="modalOverlay"></div>;

export default ModalOverlay;
