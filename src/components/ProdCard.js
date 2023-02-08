import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Counter from "./Counter";
import "../prodCard.css";

const ProdCard = (props) => {
  const { image, name, price } = props;
  return (
    <div className="prodCard">
      <img className="cardPicture" src={image} alt={name}></img>
      <Counter />
      <div style={{ display: "flex" }} className="mt-1 mb-1">
        <p className="text text_type_digits-default mr-2">{price}</p>
        <CurrencyIcon />
      </div>
      <p
        className="text text_type_main-default"
        style={{
          textAlign: "center",
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default ProdCard;
