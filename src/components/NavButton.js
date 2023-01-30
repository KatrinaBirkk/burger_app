const NavButton = (props) => {
  return (
    <div>
      <button className="navButton">
        <props.iconName />
        <p className="buttonText">{props.text}</p>
      </button>
    </div>
  );
};

export default NavButton;
