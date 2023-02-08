const IngredientDetails = ({ props }) => {
  console.log(props);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        height: 538,
        gap: 16,
      }}
    >
      <img
        className="cardPicture"
        src={props.image_large}
        alt={props.name}
      ></img>
      <p className="text text_type_main-medium">{props.name}</p>
    </div>
  );
};

export default IngredientDetails;
