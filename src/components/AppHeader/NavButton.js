import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

const NavButton = (props) => {
  return (
    <Button
      className={props.className}
      htmlType="button"
      type="secondary"
      size="medium"
      onClick={props.onClick}
    >
      <props.iconName type={props.type} />
      <p className="text text_type_main-default">{props.text}</p>
    </Button>
  );
};

export default NavButton;
