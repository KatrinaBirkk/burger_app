import styles from "./profile.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../services/actions/login";
import { useNavigate } from "react-router-dom";

function OrderHistoryPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("RToken");
  console.log(token);

  const handleClick = () => {
    dispatch(logout(token));
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <h3
          className="text text_type_main-large mb-6 mt-4 text_color_inactive"
          onClick={() => {
            navigate("/profile");
          }}
        >
          Профиль
        </h3>
        <h3 className="text text_type_main-large mb-6 mt-4">История заказов</h3>
        <h3
          className="text text_type_main-large mb-6 mt-4 text_color_inactive"
          onClick={handleClick}
        >
          Выход
        </h3>
      </div>
      <div className={styles.form}></div>
    </div>
  );
}
export default OrderHistoryPage;
