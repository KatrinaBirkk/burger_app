import { useState, useEffect } from "react";
import ProdCard from "./ProdCard";
// import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const ProdCards = (props) => {
  const [prodcards, setProdcards] = useState([]);
  useEffect(() => {
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => res.json())
      .then((prodcards) => {
        const prodcardsdata = prodcards.data;
        setProdcards(prodcardsdata);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      {prodcards.map((prodcard) => (
        <ProdCard key={prodcard._id} {...prodcard} />
      ))}
    </div>
  );
};

export default ProdCards;
