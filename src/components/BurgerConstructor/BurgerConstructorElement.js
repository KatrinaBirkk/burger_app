import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
// import { useState } from "react";

const BurgerConstructorElement = (record) => {
  // const [isLocked, setIsLocked] = useState("");

  // if (record.type === "bun") {
  //   setIsLocked(!isLocked);
  // }

  // // const locker = `${isLocked ? "true" : ""} `;
  // const type = `${isLocked ? "top" : ""} `;

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <DragIcon type="primary" />
      <ConstructorElement {...record} />
    </div>
  );
};

export default BurgerConstructorElement;
