import React from "react";
import { watchData } from "../data/watch";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../content/CartContext";

const WatchesSingle = () => {
  const { id } = useParams();
  const product = watchData.find((item) => item.id == id);
  const { addToCart, cartItems } = useCart();

  //   console.log(id);
  //   console.log("heykkke");

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-image">
          <img src={product.image} alt="" />
        </div>

        <div className="ind-details">
          <div className="ind-company">
            <h2>{product.brand}</h2>
          </div>
          <div className="ind-model">
            <h2>{product.model}</h2>
          </div>
          <div className="ind-price">
            <h2>{product.price}</h2>
          </div>
          <div className="ind-desc space">
            <h2>{product.description}</h2>
          </div>
          <button onClick={() => addToCart(product)}>Add Cart</button>
        </div>
      </div>
    </>
  );
};

export default WatchesSingle;
