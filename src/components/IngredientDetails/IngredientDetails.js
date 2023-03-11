import "./ingredientDetails.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../services/actions/ingredientInfo";
import { store } from "../../components/store";

const IngredientDetails = (data) => {
  // const { info } = useSelector((state) => state.items);
  console.log("__________");
  console.log(data.data);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getInfo());
  // }, [dispatch]);

  // console.log(info);

  // const currentState = store.getState();
  // const info_data = currentState.info.info;
  // console.log(info);
  return (
    <div className="ingredientDetails">
      <img
        className="cardPicture"
        src={data.data.image_large}
        alt={data.data.name}
      ></img>
      <p className="text text_type_main-medium">{data.data.name}</p>
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
