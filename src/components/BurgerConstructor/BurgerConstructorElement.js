import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
// import { useState } from "react";
import { useDrag } from "react-dnd";

const BurgerConstructorElement = ({ _id, price, name, image }) => {
  // const [isLocked, setIsLocked] = useState("");

  // if (record.type === "bun") {
  //   setIsLocked(!isLocked);
  // }

  // // const locker = `${isLocked ? "true" : ""} `;
  // const type = `${isLocked ? "top" : ""} `;

  const [{ opacity }, ref] = useDrag({
    type: "pickedIngredients",
    item: { _id },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <div style={{ opacity }}>
      <div
        ref={ref}
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <DragIcon type="primary" />
        <ConstructorElement thumbnail={image} price={price} text={name} />
      </div>
    </div>
  );
};

export default BurgerConstructorElement;
