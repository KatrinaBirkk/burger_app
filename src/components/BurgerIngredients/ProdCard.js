import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Counter from "./Counter";
import "./prodCard.css";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

const ProdCard = ({ _id, price, name, image, __v, type, ...items }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(items);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [{ opacity }, ref] = useDrag({
    type: "ingredients",
    item: { _id },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  // const { image, name, price } = props;

  return (
    <>
      <Modal open={isOpen} onClose={closeModal} ModalTitle="Детали ингредиента">
        <IngredientDetails data={{ _id, name, price, ...items }} />
        {/* <IngredientDetails /> */}
      </Modal>
      <div style={{ opacity }}>
        <div ref={ref} className="prodCard" onClick={openModal}>
          {/* <div className="prodCard" onClick={openModal(image, name, price)}> */}
          <img className="cardPicture" src={image} alt={name}></img>
          <Counter number={_id === "60d3b41abdacab0026a733c7" ? ++__v : __v} />
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
