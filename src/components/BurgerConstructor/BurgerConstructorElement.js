import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { DELETE_INGREDIENT } from "../../services/actions/ingredientsList";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { sortListItems } from "../../services/actions/ingredientsList";
import PropTypes from "prop-types";
import styles from "./burger-constructor.module.css";

const BurgerConstructorElement = (item, index) => {
  const { ingredients } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const _id = item._id;
  const id = item.id;

  index = item.index;

  const [{ opacity }, dragRef] = useDrag({
    type: "items",
    item: { index },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  function moveIngredientsList(dragIndex, hoverIndex) {
    const dragItem = ingredients[dragIndex];
    const hoverItem = ingredients[hoverIndex];
    // Swap places of dragItem and hoverItem in the pets array
    // setPets((pets) => {
    const updatedList = [...ingredients];

    updatedList[dragIndex] = hoverItem;
    updatedList[hoverIndex] = dragItem;
    dispatch(sortListItems(updatedList));
  }

  const [, dropRef] = useDrop({
    accept: "items",
    hover: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      // if dragging down, continue only when hover is smaller than middle Y
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      // if dragging up, continue only when hover is bigger than middle Y
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveIngredientsList(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  // Join the 2 refs together into one (both draggable and can be dropped on)
  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  const deleteIngredient = () => {
    dispatch({
      type: DELETE_INGREDIENT,
      _id,
      id,
    });
  };
  return (
    <div ref={dragDropRef} className={styles.container} style={{ opacity }}>
      <DragIcon type="primary" />
      <ConstructorElement
        thumbnail={item.image}
        price={item.price}
        text={item.name}
        handleClose={deleteIngredient}
      />
    </div>
  );
};

export const item = PropTypes.shape({
  calories: PropTypes.number,
  carbohydrates: PropTypes.number,
  fat: PropTypes.number,
  image: PropTypes.string,
  image_large: PropTypes.string,
  image_mobile: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  proteins: PropTypes.number,
  type: PropTypes.string,
  __v: PropTypes.number,
  _id: PropTypes.string,
});

export default BurgerConstructorElement;
