import React, { useState, useEffect, useContext } from "react";
import { foodContex } from "../App";
import { useNavigate } from 'react-router-dom';


function Pizza() {
    const context = useContext(foodContex);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        if (context.data.length > 0) {
            setProducts(context.data[0].subItemsData.subItems);
        }
        else {
            navigate("/")
        }
    };
    return <div className="product-wrapper">
        <h2>Testy Pizza</h2>
        {
            products.map((element, index) => {
                return <div className="product-item-wrapper" key={index}>
                    <div className="product-details">
                        <h4>{element.name}</h4>
                        <div className="product-price">&#x20B9;{element.price}</div>
                        <div className="product-description">{element.description}</div>
                        <button className="product-btn" onClick={() => {
                            context.cart.push(element)
                            context.setCartValue(context.cart.length)
                        }}>order now</button>
                    </div>
                    <div className="product-image">
                        <img src={element.image} alt={element.name}></img>
                    </div>
                </div>

            })
        }
    </div>;
}

export default Pizza;
