import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Counter from "./Counter";
import "./prodCard.Module.css";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

const ProdCard = ({ ...item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const _id = item._id;

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
      <Modal open={isOpen} onClose={closeModal} ModalTitle="Детали ингредиента">
        <IngredientDetails data={item} />
      </Modal>
      <div style={{ opacity }}>
        <div className="prodCard" onClick={openModal}>
          <img
            ref={ref}
            className="cardPicture"
            src={item.image}
            alt={item.name}
          ></img>
          <div style={{ display: "flex" }} className="mt-1 mb-1">
            <p className="text text_type_digits-default mr-2">{item.price}</p>
            <CurrencyIcon />
          </div>
          <Counter number={item.counter} />
          <p
            className="text text_type_main-default"
            style={{
              textAlign: "center",
            }}
          >
            {item.name}
          </p>
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
