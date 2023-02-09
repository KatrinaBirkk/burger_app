import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ReactDom from "react-dom";
import { useRef, useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import "./modal.css";

const Modal = ({ open, children, onClose, ModalTitle }) => {
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
      <div className="modalContainer">
        <div className="modalHeader mt-10 ml-10 mr-10">
          <p className="text text_type_main-large">{ModalTitle}</p>
          <button
            style={{
              backgroundColor: "transparent",
              borderStyle: "none",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
