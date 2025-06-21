import React from "react";
import { kitchenData } from "../data/kitchen";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Kitchenpage = () => {
  return (
    <>
      <Navbar />
      <div className="pagesection">
        {kitchenData.map((item) => {
          return (
            <div>
              <Link to={`/kitchen/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt="" />
                </div>
              </Link>
              <div className="promodel">
                {item.company},{item.model}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Kitchenpage;
