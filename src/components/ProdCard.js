// fetch("https://norma.nomoreparties.space/api/ingredients")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const ProdCard = (props) => {
  const { image, name, price } = props;
  return (
    <div
      className="mt-6 mb-10 ml-4 mr-3"
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
      }}
    >
      <img className="cardPicture" src={image} alt={name}></img>
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
