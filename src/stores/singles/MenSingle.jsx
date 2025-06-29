import React from "react";
import { menData } from "../data/men";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../content/CartContext";

const MenSingle = () => {
  const { id } = useParams(); //used to fetch id from data

  const { addToCart, cartItems } = useCart();
  const product = menData.find((item) => item.id === id);

  console.log(id);

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-image">
          <img src={product.image} alt="" />
        </div>

        <div className="ind-details space">
          <div className="ind-company">
            <h2>{product.company}</h2>
          </div>

          <div className="ind-model space">
            <h3>{product.model}</h3>
          </div>

          <div className="ind-price space">
            <h2>{product.price}</h2>
          </div>

          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={() => addToCart(product)}>Add Cart</button>
        </div>
      </div>
    </>
  );
};

export default MenSingle;
