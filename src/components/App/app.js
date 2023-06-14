import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";
import AppHeader from "../AppHeader/AppHeader";
import ForgotPasswordPage from "../../pages/forgot-password";
import ResetPasswordPage from "../../pages/reset-password";
import ProfilePage from "../../pages/profile";
import OrderHistoryPage from "../../pages/order-history";
import IngredientsDetails from "../IngredientDetails/IngredientDetails";
import { OnlyUnAuth, OnlyAuth } from "../protected-route";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getIngredients } from "../../services/actions/ingredientsList";
import Modal from "../Modal/Modal";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const items = JSON.parse(localStorage.getItem("items"));
  console.log("items");
  console.log(items);

  const location = useLocation();
  const background = location.state?.background;

  const onModalClose = () => {
    navigate(background.pathname || "/", { replace: true });
  };

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<OnlyUnAuth component={<LoginPage />} />}
        />
        <Route
          path="/profile"
          element={<OnlyAuth component={<ProfilePage />} />}
        />
        <Route
          path="/register"
          element={<OnlyUnAuth component={<RegisterPage />} />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/forgot-password"
          element={<OnlyUnAuth component={<ForgotPasswordPage />} />}
        />
        <Route
          path="/reset-password"
          element={<OnlyUnAuth component={<ResetPasswordPage />} />}
        />
        <Route path="/order-history" element={<OrderHistoryPage />} />
        <Route
          path="ingredients/:id"
          element={<IngredientsDetails items={items} />}
        />
      </Routes>
      <Routes>
        <Route
          path="ingredients/:id"
          element={
            location.key !== "default" ? (
              <Modal ModalTitle="Детали ингредиента" onClose={onModalClose}>
                <IngredientsDetails items={items} />
              </Modal>
            ) : null
          }
        />
      </Routes>
      {/* <Routes>
       
      </Routes> */}
    </>
  );
}

export default App;
