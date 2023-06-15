import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";
// import AppHeader from "../components/AppHeader/AppHeader";
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "../components/App/app.module.css";

function HomePage() {
  return (
    <div className={styles.app}>
      <DndProvider backend={HTML5Backend}>
        <main className={styles.menuScreen}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DndProvider>
    </div>
  );
}

export default HomePage;
