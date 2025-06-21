import React from "react";
import { womanData } from "../data/woman";

const Woman = () => {
  const firstFiveImage = womanData.slice(0, 5);

  return (
    <>
      <div className="protitle">
        <h2>Woman's</h2>
      </div>

      <div className="prosection">
        {firstFiveImage.map((item) => {
          return (
            <div className="imagBox">
              <img className="proimg" src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Woman;
