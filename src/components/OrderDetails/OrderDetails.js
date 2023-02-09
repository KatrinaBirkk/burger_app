import "./orderDetails.css";

const OrderDetails = () => {
  return (
    <div className="orderDetailsContainer">
      <p className="text text_type_digits-large mt-4 mb-8">034536</p>
      <p className="text text_type_main-medium mb-15">Идентификатор заказа</p>
      <img src="../../../images/done.png" alt="Значок галочка" />
      <p className="text text_type_main-small  mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="mb-30 text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};
export default OrderDetails;
