// const FancyButton = React.forwardRef((props, ref) => (
//   <button ref={ref} className="FancyButton">
//     {props.children}
//   </button>
// ));

import { forwardRef } from "react";

const ModalOverlay = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{
      position: "fixed",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      top: 0,
      left: 0,
      opacity: "60%",
      zIndex: 1,
    }}
  ></div>
));

export default ModalOverlay;
