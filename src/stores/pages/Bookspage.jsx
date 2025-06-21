import React from "react";
import { booksData } from "../data/books";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Bookspage = () => {
  return (
    <>
      <Navbar />
      <div className="pagesection">
        {booksData.map((item) => {
          return (
            <div>
              <Link to={`/books/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt="" />
                </div>
              </Link>
              <div className="promodel">
                {item.author},{item.category}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Bookspage;
