import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import Moviesection from "./Components/Moviesection";
import Mozaique from "./Components/Mozaique";
import OpinionSection from "./Components/OpinionSection";
import BuyProduct from "./Components/BuyProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <Moviesection />
      <Feature />
      <Mozaique />
      <OpinionSection />
      <BuyProduct />
    </div>
  );
}

export default App;
