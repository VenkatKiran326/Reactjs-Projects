import React from "react";
import { watchData } from "../data/watch";

const Watches = () => {
  const firstFiveImage = watchData.slice(0, 5);

  return (
    <>
      <div className="protitle">
        <h2>Watches</h2>
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

export default Watches;
