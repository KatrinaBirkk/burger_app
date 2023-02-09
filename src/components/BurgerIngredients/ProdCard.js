import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Counter from "./Counter";
import "./prodCard.css";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useState } from "react";
import PropTypes from "prop-types";

const ProdCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { image, name, price } = props;
  return (
    <>
      <Modal open={isOpen} onClose={closeModal} ModalTitle="Детали ингредиента">
        <IngredientDetails data={props} />
      </Modal>
      <div className="prodCard" onClick={openModal}>
        <img className="cardPicture" src={image} alt={name}></img>
        <Counter number="1" />
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
    </>
  );
};

ProdCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};

export default ProdCard;
