import styles from "./prod-card.module.css";

const Counter = ({ number }) => {
  if (number)
    return (
      <div className={styles.counter}>
        <p className="text text_type_digits-default mt-1">{number}</p>
      </div>
    );
};

export default Counter;
