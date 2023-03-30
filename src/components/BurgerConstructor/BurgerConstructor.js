import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorElement from "./BurgerConstructorElement";
import styles from "./burger-constructor.module.css";
import { totalPriceSelector } from "../utils";
import Modal from "../Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useDrop } from "react-dnd";
import OrderDetails from "../OrderDetails/OrderDetails";
import PropTypes from "prop-types";
import {
  ADD_INGREDIENT,
  INCREASE_INGREDIENT,
  REPLACE_INGREDIENT,
  INCREASE_INGREDIENT_BUN,
} from "../../services/actions/ingredientsList";
import { getOrderNumber } from "../../services/actions/ingredientsList";

const BurgerConstructor = () => {
  const { ingredients } = useSelector((state) => state.items);
  const { bun } = useSelector((state) => state.items);

  const totalPrice = useSelector(totalPriceSelector);

  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useDispatch();

  const moveIngredientBun = (item) => {
    dispatch({
      type: REPLACE_INGREDIENT,
      ...item,
      counter: 1,
    });
    dispatch({
      type: INCREASE_INGREDIENT_BUN,
      ...item,
      counter: 0,
    });
  };

  const moveIngredientMain = (item) => {
    dispatch({
      type: ADD_INGREDIENT,
      ...item,
      counter: 0,
    });
    dispatch({
      type: INCREASE_INGREDIENT,
      ...item,
      counter: 0,
    });
  };

  const move = (item) => {
    if (item.item.type === "bun") {
      moveIngredientBun(item);
    } else {
      moveIngredientMain(item);
    }
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredients",
    drop(item) {
      move(item);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const handleClick = () => {
    const data = [...ingredients, ...bun].reduce((arrayId, item) => {
      return arrayId.push(item), arrayId;
    }, []);
    dispatch(getOrderNumber(data));
    openModal();
  };

  const className = styles.burgerConstructor;
  const classNameBun = styles.constructorBunElement;
  const classNameMain = styles.constructorMainElement;
  const classNameMainField = styles.constructorMainField;
  const classNameTopIngredient = styles.constructorTopIngredient;
  const classNameBottomIngredient = styles.constructorBottomIngredient;
  const classNameIngredientText = styles.ingredientText;

  return (
    <section className={className} ref={dropTarget}>
      <div className={classNameMainField}>
        <div className={`${classNameBun} ${isHover ? styles.onHoverTop : ""}`}>
          {bun.length === 0 ? (
            <div className={classNameTopIngredient}>
              <p className={classNameIngredientText}>
                Добавьте булку из ингредиентов слева
              </p>
            </div>
          ) : (
            bun.map((item, index) => (
              <ConstructorElement
                key={item.id}
                index={index}
                thumbnail={item.image}
                price={item.price}
                text={`${item.name} (верх)`}
                isLocked={true}
                type="top"
              />
            ))
          )}
        </div>
        <div
          className={`${classNameMain} ${isHover ? styles.onHoverMiddle : ""}`}
        >
          {ingredients.map((item, index) => (
            <BurgerConstructorElement key={item.id} index={index} {...item} />
          ))}
        </div>
        <div
          className={`${classNameBun} ${isHover ? styles.onHoverBottom : ""}`}
        >
          {bun.length === 0 ? (
            <div className={classNameBottomIngredient}>
              <p className={classNameIngredientText}>
                Добавьте булку из ингредиентов слева
              </p>
            </div>
          ) : (
            bun.map((item, index) => (
              <ConstructorElement
                key={item.id}
                index={index}
                thumbnail={item.image}
                price={item.price}
                text={`${item.name} (низ)`}
                isLocked={true}
                type="bottom"
              />
            ))
          )}
        </div>
      </div>
      <div className="mr-4">
        <span className="text text_type_digits-medium mr-10">
          {!totalPrice ? 0 : totalPrice}
          <CurrencyIcon></CurrencyIcon>
        </span>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleClick}
        >
          Оформить заказ
        </Button>
        <Modal open={isOpen} onClose={closeModal} ModalTitle="">
          <OrderDetails />
        </Modal>
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
