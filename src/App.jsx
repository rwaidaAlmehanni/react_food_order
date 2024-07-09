
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { MealsContextProvider } from "./store/mealsContext";
import { UserCartProgrssProvider } from "./store/progressContext";
function App() {
  return (
    <UserCartProgrssProvider>
      <MealsContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </MealsContextProvider>
    </UserCartProgrssProvider>
  );
}

export default App;
