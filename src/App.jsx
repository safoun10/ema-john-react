import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Shop from "./components/shop/shop";

function App() {
  const [count, setCount] = useState(0);

  return(
      <div className="App">
        <Header></Header>
        <Shop></Shop>
      </div>
    )
}

export default App;
