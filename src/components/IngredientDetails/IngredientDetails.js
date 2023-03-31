import styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";

const IngredientDetails = (props) => {
  const classNameDetails = styles.ingredientDetails;
  const classNameTable = styles.ingredientDetailsTable;

  return (
    <div className={classNameDetails}>
      <img
        className="cardPicture"
        src={props.data.image_large}
        alt={props.data.name}
      ></img>
      <p className="text text_type_main-medium">{props.data.name}</p>
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
          {props.data.calories}
        </p>
        <p className="text text_type_main-small text_type_digits-default">
          {props.data.proteins}
        </p>
        <p className="text text_type_main-small text_type_digits-default">
          {props.data.fat}
        </p>
        <p className="text text_type_main-small text_type_digits-default">
          {props.data.carbohydrates}
        </p>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IngredientDetails;
