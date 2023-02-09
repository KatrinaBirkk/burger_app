import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorElement from "./BurgerConstructorElement";
import Modal from "../Modal/Modal";
import { useState } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";

const BurgerConstructor = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
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
          text={data[0].name}
          price={data[0].price}
          thumbnail={data[0].image}
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
          text={data[0].name}
          price={data[0].price}
          thumbnail={data[0].image}
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
        <Modal open={isOpen} onClose={closeModal} ModalTitle="">
          <OrderDetails />
        </Modal>
      </div>
    </section>
  );
};

export default BurgerConstructor;
