import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ReactDom from "react-dom";
import { useRef, useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import PropTypes from "prop-types";

const Modal = ({ children, onClose, ModalTitle }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // if (!open) return;

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
  }, [onClose]);

  // if (!open) return null;
  const classNameModalHeader = styles.modalHeader;
  return ReactDom.createPortal(
    <>
      <ModalOverlay ref={modalRef} />
      <div className={styles.modalContainer}>
        <div className={classNameModalHeader}>
          <p className="text text_type_main-large">{ModalTitle}</p>
          <button className={styles.button} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  ModalTitle: PropTypes.string,
};

export default Modal;
