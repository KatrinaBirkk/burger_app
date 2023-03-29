const Counter = ({ number }) => {
  if (number)
    return (
      <div
        style={{
          width: 32,
          height: 32,
          right: 0,
          top: 0,
          backgroundColor: "#4C4CFF",
          borderRadius: "50%",
          position: "absolute",
        }}
      >
        <p
          style={{ textAlign: "center" }}
          className="text text_type_digits-default mt-1"
        >
          {number}
        </p>
      </div>
    );
};

export default Counter;
