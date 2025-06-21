import React from "react";
import { menData } from "../data/men";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Menpage = () => {
  return (
    <>
      <Navbar />
      <div className="pagesection">
        {menData.map((item) => {
          return (
            <div>
              <Link to={`/men/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt="" />
                </div>
              </Link>
              <div className="promodel">
                {item.brand},{item.category}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menpage;
