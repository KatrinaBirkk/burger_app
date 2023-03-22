import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
// import { useState } from "react";
import { useDrag } from "react-dnd";
import { DELETE_INGREDIENT } from "../services/actions/ingredientsList";
import { useDispatch } from "react-redux";

const BurgerConstructorElement = (item) => {
  const dispatch = useDispatch();
  const _id = item._id;
  const id = item.id;

  const [{ opacity }, ref] = useDrag({
    type: "pickedIngredients",
    item: { _id },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const deleteIngredient = () => {
    dispatch({
      type: DELETE_INGREDIENT,
      _id,
      id,
    });
  };
  return (
    <div
      ref={ref}
      style={{
        opacity,
        display: "flex",
        gap: "16px",
        alignItems: "center",
        width: 568,
      }}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        thumbnail={item.image}
        price={item.price}
        text={item.name}
        handleClose={deleteIngredient}
      />
    </div>
    // </div>
  );
};

export default BurgerConstructorElement;
