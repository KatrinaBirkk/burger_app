import styles from "./ingredient-details.module.css";

const IngredientDetails = (data) => {
  const classNameDetails = styles.ingredientDetails;
  const classNameTable = styles.ingredientDetailsTable;

  return (
    <div className={classNameDetails}>
      <img
        className="cardPicture"
        src={data.data.image_large}
        alt={data.data.name}
      ></img>
      <p className="text text_type_main-medium">{data.data.name}</p>
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
          {data.data.calories}
        </p>
        <p className="text text_type_main-small text_type_digits-default">
          {data.data.proteins}
        </p>
        <p className="text text_type_main-small text_type_digits-default">
          {data.data.fat}
        </p>
        <p className="text text_type_main-small text_type_digits-default">
          {data.data.carbohydrates}
        </p>
      </div>
    </div>
  );
};

export default IngredientDetails;
