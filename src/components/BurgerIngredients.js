import ProdCard from "./ProdCard";
import "../prodcards_section.css";
import SubMenu from "./SubMenu";
// import { useState } from "react";
// import Modal from "./Modal";
// import IngredientDetails from "./IngredientDetails";

const BurgerIngredients = ({ data }) => {
  return (
    <>
      <div className="burgerIngredientsContainer">
        <h1 className="text text_type_main-large mb-5 mt-10">
          Соберите бургер
        </h1>
        <SubMenu />
        <section
          style={{
            width: 600,
            height: 756,
            overflowY: "scroll",
          }}
        >
          <section id="section_1">
            <h2 className="text text_type_main-medium mt-10">Булки</h2>
            <div className="prodcards_section">
              {data
                .filter((item) => item.type === "bun")
                .map((item) => (
                  <ProdCard key={item._id} {...item} />
                ))}
            </div>
          </section>
          <section id="section_2">
            <h2 className="text text_type_main-medium mt-10">Соусы</h2>
            <div className="prodcards_section">
              {data
                .filter((item) => item.type === "sauce")
                .map((item) => (
                  <ProdCard key={item._id} {...item} />
                ))}
            </div>
          </section>
          <section id="section_3">
            <h2 className="text text_type_main-medium mt-10">Начинки</h2>
            <div className="prodcards_section">
              {data
                .filter((item) => item.type === "main")
                .map((item) => (
                  <ProdCard key={item._id} {...item} />
                ))}
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default BurgerIngredients;
