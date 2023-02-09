import "./ingredientDetails.css";

const IngredientDetails = ({ data }) => {
  console.log(data);
  return (
    <div className="ingredientDetails">
      <img className="cardPicture" src={data.image_large} alt={data.name}></img>
      <p className="text text_type_main-medium">{data.name}</p>
      <div className="ingredientDetailsTable">
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
          {data.calories}
        </p>
        <p className="text text_type_main-small text_type_digits-default">
          {data.proteins}
        </p>
        <p className="text text_type_main-small text_type_digits-default">
          {data.fat}
        </p>
        <p className="text text_type_main-small text_type_digits-default">
          {data.carbohydrates}
        </p>
      </div>
    </div>
  );
};

export default IngredientDetails;
