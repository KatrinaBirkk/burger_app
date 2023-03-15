import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorElement from "./BurgerConstructorElement";

import Modal from "../Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import { useDrop } from "react-dnd";
import OrderDetails from "../OrderDetails/OrderDetails";
import PropTypes from "prop-types";
import {
  ADD_INGREDIENT,
  INCREASE_INGREDIENT,
  REPLACE_INGREDIENT,
} from "../services/actions/ingredientsList";
// import { store } from "../../components/store";

const BurgerConstructor = (openModal, isOpen, closeModal) => {
  const { ingredients } = useSelector((state) => state.items);
  const { bun } = useSelector((state) => state.items);

  console.log("bun");
  console.log(bun);
  console.log("ingredients");
  console.log(ingredients);

  const dispatch = useDispatch();

  const moveIngredient = (item) => {
    item._id === "60d3b41abdacab0026a733c6" ||
    item._id === "60d3b41abdacab0026a733c7"
      ? // item.type === "bun"
        dispatch({
          type: REPLACE_INGREDIENT,
          ...item,
        })
      : dispatch({
          type: ADD_INGREDIENT,
          ...item,
        });
    dispatch({
      type: INCREASE_INGREDIENT,
      ...item,
    });
  };

  // const replaceIngredient = (item) => {
  //   dispatch({
  //     type: INCREASE_INGREDIENT,
  //     ...item,
  //   });
  // };

  const [, dropTarget] = useDrop({
    accept: "ingredients",
    drop(_id) {
      moveIngredient(_id);
      // increaseIngredient(_id);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  return (
    <section
      className="ConstructorSection"
      ref={dropTarget}
      style={{
        marginTop: 100,
        height: 912,
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        gap: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          gap: 16,
        }}
      >
        {bun.map((item, index) => (
          <ConstructorElement
            key={index}
            thumbnail={item.image}
            price={item.price}
            text={item.name}
            isLocked={true}
            type="top"
          />
        ))}
        <div
          style={{
            // minHeight: 200,
            width: 568,
            height: 464,
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center",
          }}
        >
          {ingredients.map((item, index) => (
            <BurgerConstructorElement key={index} {...item} />
          ))}
        </div>
        {bun.map((item, index) => (
          <ConstructorElement
            key={index}
            thumbnail={item.image}
            price={item.price}
            text={item.name}
            isLocked={true}
            type="bottom"
          />
        ))}
      </div>
      <div className="mr-4">
        <span className="text text_type_digits-medium mr-10">
          610 <CurrencyIcon></CurrencyIcon>
        </span>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          // onClick={openModal}
        >
          Оформить заказ
        </Button>
        {/* <Modal open={isOpen} onClose={closeModal} ModalTitle="">
          <OrderDetails />
        </Modal> */}
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default BurgerConstructor;
