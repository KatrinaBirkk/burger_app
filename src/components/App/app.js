import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <header>
        <AppHeader />
      </header>
      <DndProvider backend={HTML5Backend}>
        <main className={styles.menuScreen}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DndProvider>
    </div>
  );
}

export default App;
