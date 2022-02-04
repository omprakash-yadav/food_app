import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { foodContex } from "../App";

function Home() {
  let context = useContext(foodContex);
  return (
    <div className="home-wrapper">
      {context.data.map((element, index) => {
        return (
          <Fragment key={index}>
            <Link to={`/` + element.name.toLowerCase()} className="item-link">
              <div className="item-wrapper">
                <img
                  src={element.image}
                  alt={element.name}
                  className="item-image"
                ></img>
                <div className="item-name">{element.name}</div>
              </div>
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
}

export default Home;
