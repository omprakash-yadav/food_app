import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import Burger from "./components/Burger";
import Header from "./components/Header";
import Cart from "./components/Cart";

const url = "https://fod-app.herokuapp.com/food";
export const foodContex = React.createContext();

function App() {
  let [data, setData] = useState([]);
  let [cart, setCart] = useState([]);
  let [cartValue, setCartValue] = useState(cart.length);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let res = await axios.get(url);
    console.log(res.data);
    setData(res.data);
  };

  return (
    <div>
      <BrowserRouter>
        <foodContex.Provider
          value={{ data, cart, setCart, cartValue, setCartValue }}
        >
          <Header></Header>
          <Routes>
            <Route path="/burger" element={<Burger />} />
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </foodContex.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
