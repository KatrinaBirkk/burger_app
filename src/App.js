import "./App.css";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
// import "./navButton.css";
// import "./BurgerIngredients/burgerIngredientsContainer.css";
// import "./ingredientsList.css";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <nav>
        <AppHeader />
      </nav>
      <main>
        <DndProvider backend={HTML5Backend}>
          <div className="menuScreen">
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </DndProvider>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
