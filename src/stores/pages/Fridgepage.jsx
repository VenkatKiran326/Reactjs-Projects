import React from "react";
import Navbar from "../components/Navbar";
import { fridgeData } from "../data/fridge";
import { Link } from "react-router-dom";

const Fridgepage = () => {
  return (
    <>
      <Navbar />
      <div className="pagesection">
        {fridgeData.map((item) => {
          return (
            <div>
              <Link to={`/fridge/${item.id}`}>
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

export default Fridgepage;
