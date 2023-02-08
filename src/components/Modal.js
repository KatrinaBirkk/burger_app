import ModalOverlay from "./ModalOverlay";
import ReactDom from "react-dom";
import { useRef, useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

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
        <div
          className="mt-10 ml-10 mr-10"
          style={{
            display: "grid",
            alignItems: "center",
            height: 64,
            gridTemplateColumns: "580px 1fr",
            gap: 36,
          }}
        >
          <p className="text text_type_main-large" style={{}}>
            Детали ингредиента
          </p>
          <CloseIcon type="primary" onClick={onClose} />
        </div>

        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
