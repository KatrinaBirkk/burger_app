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
  DEL_INGREDIENT,
} from "../services/actions/ingredientsList";
// import { store } from "../../components/store";

const BurgerConstructor = (openModal, isOpen, closeModal) => {
  const { ingredients } = useSelector((state) => state.items);
  // const { items } = useSelector((state) => state.items);

  console.log("ingredients");
  console.log(ingredients);

  const dispatch = useDispatch();

  const content = useMemo(() => {
    return ingredients.map((item, index) => {
      return <BurgerConstructorElement key={index} {...item} />;
    });
  }, [ingredients]);

  // console.log(_id)

  const moveIngredient = (item) => {
    dispatch({
      type: ADD_INGREDIENT,
      ...item,
    });
  };

  // const [{ isHover }, dropTarget] = useDrop({
  const [, dropTarget] = useDrop({
    accept: "ingredients",
    drop(_id) {
      moveIngredient(_id);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

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
          text="Bun"
          price="1000"
          // thumbnail={}
        />

        <div
          ref={dropTarget}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            height: 464,
            width: 500,
            overflowY: "scroll",
          }}
        >
          {content}
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Bun"
          price="1000"
          // thumbnail={data[0].image}
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
