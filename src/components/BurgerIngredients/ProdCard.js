import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Counter from "./Counter";
import styles from "./prod-card.module.css";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

const ProdCard = ({ ...item }) => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [{ opacity }, ref] = useDrag({
    type: "ingredients",
    item: { item },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <>
      {isOpen ? (
        <Modal
          // open={isOpen}
          onClose={closeModal}
          ModalTitle="Детали ингредиента"
        >
          <IngredientDetails data={item} />
        </Modal>
      ) : null}
      <div style={{ opacity }}>
        <div className={styles.prodCard} onClick={openModal}>
          <img
            ref={ref}
            className={styles.cardPicture}
            src={item.image}
            alt={item.name}
          ></img>
          <div className={styles.displayCard}>
            <p className="text text_type_digits-default mr-2">{item.price}</p>
            <CurrencyIcon />
          </div>
          <Counter number={item.counter} />
          <p className="text text_type_main-default">{item.name}</p>
        </div>
      </div>
    </>
  );
};

ProdCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};

export default ProdCard;
