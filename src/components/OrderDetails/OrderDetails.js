import "./orderDetails.css";
import { useSelector } from "react-redux";

const OrderDetails = () => {
  const { order, sendRequest, sendFailed } = useSelector(
    (state) => state.items
  );

  if (sendFailed) {
    return <p>Произошла ошибка при получении данных</p>;
  } else if (sendRequest) {
    return <p>Загрузка...</p>;
  } else {
    return (
      <>
        <div className="orderDetailsContainer">
          <p className="text text_type_digits-large mt-4 mb-8">
            {order.order.number}
          </p>
          <p className="text text_type_main-medium mb-15">
            Идентификатор заказа
          </p>
          <img src="../../../images/done.png" alt="Значок галочка" />
          <p className="text text_type_main-small  mt-15">
            Ваш заказ начали готовить
          </p>
          <p className="mb-30 text_color_inactive">
            Дождитесь готовности на орбитальной станции
          </p>
        </div>
      </>
    );
  }
};

export default OrderDetails;
