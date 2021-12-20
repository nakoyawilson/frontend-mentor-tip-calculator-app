import React from "react";
import "./App.css";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
};

export default App;
