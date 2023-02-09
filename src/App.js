import "./App.css";
// import "./navButton.css";
// import "./BurgerIngredients/burgerIngredientsContainer.css";
// import "./ingredientsList.css";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";

import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import { useEffect, useState } from "react";
// import Modal from "./components/Modal";
// import ModalOverlay from "./components/ModalOverlay";

const API_URL = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const [data, setData] = useState([]);

  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //     async function fetchData() {
  //       setLoading(true);
  //       try {
  //         const response = await fetch(API_URL);
  //         const json = await response.json();
  //         console.log(json);
  //         const data = json.data;
  //         console.log(data);
  //         setData(data);
  //       } catch (error) {
  //         setError(error);
  //       }
  //       setLoading(false);
  //     }
  //     fetchData();
  //   }, []);

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }
  //   if (error) {
  //     return <div>Error: {error.message}</div>;
  //   }
  //   if (!data) {
  //     return null;
  //   }
  //   return (
  //     <div className="App">
  //       <nav>
  //         <AppHeader />
  //       </nav>
  //       <main>
  //         <div className="menuScreen">
  //           <BurgerIngredients data={data} />
  //           <BurgerConstructor data={data} />
  //         </div>
  //       </main>
  //       <footer></footer>
  //     </div>
  //   );
  // }

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((list) => {
        // console.log("list");
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
