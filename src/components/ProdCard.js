import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Counter from "./Counter";
import "../prodCard.css";
import Modal from "./Modal";
import IngredientDetails from "./IngredientDetails";
import { useState } from "react";

const ProdCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(!isOpen);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { image, name, price } = props;
  return (
    <div className="prodCard" onClick={openModal}>
      <Modal open={isOpen} onClose={closeModal}>
        <IngredientDetails props={props} />
      </Modal>
      <img className="cardPicture" src={image} alt={name}></img>
      <Counter />
      <div style={{ display: "flex" }} className="mt-1 mb-1">
        <p className="text text_type_digits-default mr-2">{price}</p>
        <CurrencyIcon />
      </div>
      <p
        className="text text_type_main-default"
        style={{
          textAlign: "center",
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default ProdCard;
