import React from "react";
import { forwardRef } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const SubMenu = forwardRef((props, ref) => {
  // console.log(functionScroll());
  // const [current, setCurrent] = React.useState("one");
  // console.log(ref);

  // const { functionScroll } = props;

  // const scrollRef = (value) => {
  //   // setCurrent();
  //   functionScroll(value);
  // };

  return (
    <div style={{ display: "flex" }}>
      {/* <Tab
        value="one"
        // active={current === "one"}
        onClick={functionScroll(one)}
      >
        Булки
      </Tab>
      <Tab
        value="two"
        // active={current === "two"}
        onClick={functionScroll(two)}
      >
        Соусы
      </Tab>
      <Tab
        value="three"
        // active={current === "three"}
        onClick={functionScroll(three)}
      >
        Начинки
      </Tab> */}
    </div>
  );
});

export default SubMenu;
