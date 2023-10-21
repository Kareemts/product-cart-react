import { useState } from "react";
import Header from "./Header.jsx";
import ProductAddingPage from "./ProductAddingPage";
import { ViewProducts } from "./ViewProducts.jsx";
import { Cart } from "./Cart.jsx";

function App() {
  const [selected, setSelected] = useState("new_product");

  return (
    <div className="App">
      <Header selected={selected} setSelected={setSelected} />

      {selected === "new_product" && <ProductAddingPage />}
      {selected === "view_product" && <ViewProducts />}
      {selected === "cart" && <Cart />}
    </div>
  );
}

export default App;
