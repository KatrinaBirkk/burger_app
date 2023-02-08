import "./App.css";
import "./navButton.css";
import "./burgerIngredientsContainer.css";
import "./ingredientsList.css";
import "./menuScreen.css";
import AppHeader from "./components/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients";

import BurgerConstructor from "./components/BurgerConstructor";
import { useEffect, useState } from "react";
// import Modal from "./components/Modal";
// import ModalOverlay from "./components/ModalOverlay";

const API_URL = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((list) => {
        console.log("list");
        const ingredientsList = list.data;
        setData(ingredientsList);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="App">
      <nav>
        <AppHeader />
      </nav>
      <main>
        <div className="menuScreen">
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
