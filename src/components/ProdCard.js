fetch("");

const ProdCard = (props) => {
  return (
    <div className="mt-6 mb-10 ml-4 mr-3">
      <img className="cardPicture" src="" alt="name"></img>
      <div style={{ display: "flex" }} className="mt-1 mb-1">
        <p className="text text_type_main-default">{props.price}</p>
        <props.iconName />
      </div>
      <p className="text text_type_main-default">{props.title}</p>
    </div>
  );
};

export default ProdCard;
