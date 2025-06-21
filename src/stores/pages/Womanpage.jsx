import React from "react";
import Navbar from "../components/Navbar";
import { womanData } from "../data/woman";
import { Link } from "react-router-dom";

const Womanpage = () => {
  return (
    <>
      <Navbar />
      <div className="pagesection">
        {womanData.map((item) => {
          return (
            <div>
              <Link to={`/woman/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt="" />
                </div>

                <div className="promodel">
                  {item.brand},{item.category}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Womanpage;
