import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";

const PasswordInputField = (props) => {
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
