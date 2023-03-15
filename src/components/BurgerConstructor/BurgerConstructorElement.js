import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
// import { useState } from "react";
import { useDrag } from "react-dnd";
import { DELETE_INGREDIENT } from "../services/actions/ingredientsList";
import { useDispatch } from "react-redux";

const BurgerConstructorElement = ({ _id, price, name, image, type }) => {
  // const [isLocked, setIsLocked] = useState("");

  // if (record.type === "bun") {
  //   setIsLocked(!isLocked);
  // }

  // // const locker = `${isLocked ? "true" : ""} `;
  // const type = `${isLocked ? "top" : ""} `;
  const dispatch = useDispatch();

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
    });
  };
  return (
    // <div style={{ opacity }}>
    <div
      ref={ref}
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        width: 568,
      }}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        thumbnail={image}
        price={price}
        text={name}
        handleClose={deleteIngredient}
      />
    </div>
    // </div>
  );
};

export default BurgerConstructorElement;
