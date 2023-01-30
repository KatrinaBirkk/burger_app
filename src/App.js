import "./App.css";
import "./navButton.css";
import "./burgerConstructorContainer.css";
import "./ingredientsList.css";
import "./menuScreen.css";

import NavButton from "./components/NavButton";
import SubMenu from "./components/SubMenu";
import LogoPicture from "./components/LogoPicture";
// import ProdCard from "./components/ProdCard";
import ProdCards from "./components/ProdCards";
import {
  BurgerIcon,
  ConstructorElement,
  ListIcon,
  DragIcon,
  ProfileIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="container">
          <div className="navMenu">
            <NavButton text="Constructor" iconName={BurgerIcon} />
            <NavButton text="Order list" iconName={ListIcon} />
            <LogoPicture />
            <NavButton text="Account" iconName={ProfileIcon} />
          </div>
        </div>
      </nav>
      <main>
        <div className="menuScreen">
          <div className="burgerConstructorContainer">
            <h1 className="text text_type_main-large mb-5 mt-10">
              Соберите бургер
            </h1>
            <SubMenu />
            <ProdCards />
            {/* <h2 className="text text_type_main-medium mb-6 mt-10">Булки</h2>
            <ProdCard
              title="Название булки"
              price="133"
              iconName={CurrencyIcon}
            /> */}
          </div>
          <div className="ingredientsList">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                marginTop: "100px",
              }}
            >
              <ConstructorElement
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={200}
                // thumbnail={img}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <DragIcon type="primary" />
                  <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    // thumbnail={img}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <DragIcon type="primary" />
                  <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    // thumbnail={img}
                  />
                </div>
              </div>

              <ConstructorElement
                type="bottom"
                isLocked={true}
                text="Краторная булка N-200i (низ)"
                price={200}
                // thumbnail={img}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
              className="mt-10"
            >
              <span className="text text_type_digits-medium mr-10">
                610 <CurrencyIcon></CurrencyIcon>
              </span>
              <Button htmlType="button" type="primary" size="large">
                Оформить заказ
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
