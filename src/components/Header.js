import React from "react";
import { useContext } from "react";
import { foodContex } from "../App";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  let context = useContext(foodContex);
  return (
    <div className="header-wrapper">
      <div className="head-title">Food ordering portal!</div>
      <div className="head-cart">
        <Link to="/cart">
          <ShoppingCartIcon />
        </Link>
        <span className="count">{context.cartValue}</span>
      </div>
    </div>
  );
}

export default Header;
