import React, { useState,  useContext } from "react";
import { foodContex } from "../App";
import { Link } from 'react-router-dom';


function Cart() {
    const context = useContext(foodContex)
    let [cartPrice] = useState(0) // or let artPrice=0;
//Removing the product in cart price
    const handleRemove = (element) => {
        context.cart.splice(context.cart.indexOf(element),1);
        context.setCartValue(context.cart.length)

    }

    return <div className="product-wrapper">
       {
           context.cart.length>0?<>
           <h2>You have Ordered:</h2>
        {
            context.cart.map((element, index) => {
                cartPrice = cartPrice+Number(element.price)
                return <div className="product-item-wrapper" key={index}>
                    <div className="product-details">
                        <h3>{element.name}</h3>
                        <div className="product-price">&#x20B9;{element.price}</div>
                        <div className="product-description">{element.description}</div>
                        <button className="product-btn" onClick={() => handleRemove(element)}>Remove</button>
                    </div>
                    <div className="product-image">
                        <img src={element.image} alt={element.name}></img>
                    </div>
                </div>

            })
        }
         {/* calculating the product price */}
           <div className="placeholder-wraper">
               <div className="product-price">Total Price:&#x20B9;{cartPrice}</div>
               <Link to="/"><button className="product-btn-placeholder" onClick={()=>{
                   context.setCart([])
                   context.setCartValue(0)
               }}>Place order</button></Link>
           </div>
           </>:<h2>Your Cart is Empty !</h2>
       }
       </div>;
}

export default Cart;
