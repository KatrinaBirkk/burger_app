import ProdCard from "./ProdCard";
import "./prodcardsSection.css";
import SubMenu from "../BurgerConstructor/SubMenu";
import "./burgerIngredientsContainer.css";
import PropTypes from "prop-types";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../services/actions/ingredientsList";

const BurgerIngredients = () => {
  const dispatch = useDispatch();

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
                {items
                  .filter((item) => item.type === "bun")
                  .map((item) => (
                    <ProdCard key={item._id} {...item} />
                  ))}
              </div>
            </section>
            <section id="section_2">
              <h2 className="text text_type_main-medium mt-10">Соусы</h2>
              <div className="prodcards_section">
                {items
                  .filter((item) => item.type === "sauce")
                  .map((item) => (
                    <ProdCard key={item._id} {...item} />
                  ))}
              </div>
            </section>
            <section id="section_3">
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
