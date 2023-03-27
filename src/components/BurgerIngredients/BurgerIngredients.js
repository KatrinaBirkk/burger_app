import ProdCard from "./ProdCard";
import "./prodcardsSection.css";
import SubMenu from "../BurgerConstructor/SubMenu";
import "./burgerIngredientsContainer.css";
import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../services/actions/ingredientsList";

const BurgerIngredients = () => {
  const dispatch = useDispatch();

  const [current, setCurrent] = useState("one");

  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);

  const handleClick = (myRef, arg) => {
    myRef.current?.scrollIntoView({ behavior: "smooth" });
    setCurrent(arg);
  };

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const { items, itemsRequest, itemsFailed } = useSelector(
    (state) => state.items
  );

  if (itemsFailed) {
    return <p>Произошла ошибка при получении данных</p>;
  } else if (itemsRequest) {
    return <p>Загрузка...</p>;
  } else {
    return (
      <>
        <div className="burgerIngredientsContainer">
          <h1 className="text text_type_main-large mb-5 mt-10">
            Соберите бургер
          </h1>
          {
            <>
              <div style={{ display: "flex" }}>
                <Tab
                  // value="one"
                  active={current === "one"}
                  onClick={() => handleClick(one, "one")}
                >
                  Булки
                </Tab>
                <Tab
                  // value="two"
                  active={current === "two"}
                  onClick={() => handleClick(two, "two")}
                >
                  Соусы
                </Tab>
                <Tab
                  active={current === "three"}
                  onClick={() => handleClick(three, "three")}
                >
                  Начинки
                </Tab>
              </div>
            </>
          }
          <section
            style={{
              width: 600,
              height: 756,
              overflowY: "scroll",
            }}
          >
            <section ref={one} id="section_bun">
              <h2 className="text text_type_main-medium mt-10">Булки</h2>
              <div className="prodcards_section">
                {items
                  .filter((item) => item.type === "bun")
                  .map((item) => (
                    <ProdCard key={item._id} {...item} />
                  ))}
              </div>
            </section>
            <section ref={two} id="section_sauce">
              <h2 className="text text_type_main-medium mt-10">Соусы</h2>
              <div className="prodcards_section">
                {items
                  .filter((item) => item.type === "sauce")
                  .map((item) => (
                    <ProdCard key={item._id} {...item} />
                  ))}
              </div>
            </section>
            <section ref={three} id="section_main">
              <h2 className="text text_type_main-medium mt-10">Начинки</h2>
              <div className="prodcards_section">
                {items
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
  }
};

BurgerIngredients.propTypes = {
  type: PropTypes.string,
  _id: PropTypes.number,
};

export default BurgerIngredients;
