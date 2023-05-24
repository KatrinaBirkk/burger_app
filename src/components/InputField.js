import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef, useState } from "react";

const InputField = (props) => {
  // const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };
  return (
    <Input
      type={props.text}
      placeholder={props.placeholder}
      // onChange={(e) => setValue(e.target.value)}
      onChange={props.onChange}
      icon={"CurrencyIcon"}
      value={props.value}
      name={props.name}
      error={false}
      ref={inputRef}
      onIconClick={onIconClick}
      errorText={"Ошибка"}
      size={"default"}
      extraClass="ml-1"
    />
  );
};

export default InputField;
