import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorElement from "./BurgerConstructorElement";
import Modal from "./Modal";
import { useState } from "react";
import OrderDetails from "./OrderDetails";

const BurgerConstructor = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(!isOpen);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section
      className="ConstructorSection"
      style={{
        width: 600,
        height: 912,
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        gap: 40,
      }}
    >
      <div
        className="sections"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          gap: "16px",
          marginTop: "100px",
          marginRight: 16,
        }}
      >
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          // thumbnail={img}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            height: 464,
            overflowY: "scroll",
          }}
        >
          {data.map((record) => (
            <BurgerConstructorElement
              key={record._id}
              text={record.name}
              price={record.price}
              thumbnail={record.image}
            />
          ))}
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          // thumbnail={img}
        />
      </div>

      <div className="mr-4">
        <span className="text text_type_digits-medium mr-10">
          610 <CurrencyIcon></CurrencyIcon>
        </span>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={openModal}
        >
          Оформить заказ
        </Button>
        <Modal open={isOpen} onClose={closeModal}>
          <OrderDetails />
        </Modal>
      </div>
    </section>
  );
};

//     <div
//       className="sections"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         gap: "16px",
//         marginTop: "100px",
//         marginRight: 16,
//       }}
//     >
//       <ConstructorElement
//         type="top"
//         isLocked={true}
//         text="Краторная булка N-200i (верх)"
//         price={200}
//         // thumbnail={img}
//       />

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "16px",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             gap: "16px",
//             alignItems: "center",
//           }}
//         >
//           <DragIcon type="primary" />
//           <ConstructorElement
//             text="Краторная булка N-200i (верх)"
//             price={50}
//             // thumbnail={img}
//           />
//         </div>
//         <div
//           style={{
//             display: "flex",
//             gap: "16px",
//             alignItems: "center",
//           }}
//         >
//           <DragIcon type="primary" />
//           <ConstructorElement
//             text="Краторная булка N-200i (верх)"
//             price={50}
//             // thumbnail={img}
//           />
//         </div>
//       </div>

//       <ConstructorElement
//         type="bottom"
//         isLocked={true}
//         text="Краторная булка N-200i (низ)"
//         price={200}
//         // thumbnail={img}
//       />
//     </div>
//   );
// };

export default BurgerConstructor;
