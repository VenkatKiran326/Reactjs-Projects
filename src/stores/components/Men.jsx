import React from "react";
import { menData } from "../data/men";

export const Men = () => {
  const firstFiveImage = menData.slice(0, 5);

  return (
    <>
      <div className="protitle">
        <h2>Men's</h2>
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
