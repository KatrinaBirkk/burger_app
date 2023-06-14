import styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

const IngredientDetails = (items) => {
  const classNameDetails = styles.ingredientDetails;
  const classNameTable = styles.ingredientDetailsTable;

  console.log(items.items);

  const { id } = useParams();
  console.log(id);

  const item = items.items.find((item) => item._id === id);
  console.log(item);

  return (
    <div className={classNameDetails}>
      <img className="cardPicture" src={item.image_large} alt={item.name}></img>
      <p className="text text_type_main-medium">{item.name}</p>
      <div className={classNameTable}>
        <p className="text text_type_main-small text_color_inactive">
          Калории, ккал
        </p>
        <p className="text text_type_main-small text_color_inactive">
          Белки, г
        </p>
        <p className="text text_type_main-small text_color_inactive">Жиры, г</p>
        <p className="text text_type_main-small text_color_inactive">
          Углеводы, г
        </p>
        <p className="text text_type_main-small text_type_digits-default">
          {item.calories}
        </p>
        <p className="text text_type_main-small text_type_digits-default">
          {item.proteins}
        </p>
        <p className="text text_type_main-small text_type_digits-default">
          {item.fat}
        </p>
        <p className="text text_type_main-small text_type_digits-default">
          {item.carbohydrates}
        </p>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IngredientDetails;
