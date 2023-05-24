import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";

const PasswordInputField = (props) => {
  // const [value, setValue] = useState("");
  // const onChange = (e) => {
  //   setValue(e.target.value);
  // };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PasswordInput
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        extraClass="mb-2"
      />
      {/* <PasswordInput
        onChange={onChange}
        value={props.value}
        name={props.name}
        icon="EditIcon"
      /> */}
    </div>
  );
};

export default PasswordInputField;
