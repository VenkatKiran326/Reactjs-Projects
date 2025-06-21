import React from "react";
import { computerData } from "../data/computers";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Computerpage = () => {
  return (
    <>
      <Navbar />
      <div className="pagesection">
        {computerData.map((item) => {
          return (
            <div>
              <Link to={`/computers/${item.id}`}>
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

export default Computerpage;
