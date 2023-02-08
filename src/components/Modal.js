import ModalOverlay from "./ModalOverlay";
import ReactDom from "react-dom";
import { useRef, useEffect } from "react";

const Modal = ({ open, children, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleClick = (e) => {
      if (!modalRef.current) return;
      if (modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <ModalOverlay ref={modalRef} />
      <div
        style={{
          position: "fixed",
          width: 720,
          height: 718,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          border: 2,
          borderStyle: "solid",
          borderColor: "#4C4CFF",
          backgroundColor: "#1C1C21",
          zIndex: 10,
        }}
      >
        <p>Order Details window</p>
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
