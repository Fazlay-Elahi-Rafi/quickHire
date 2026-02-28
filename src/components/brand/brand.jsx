import React from "react";

import brandData from "../../data/brand.json";

const Brand = () => {
  return (
    <>
      <div className="brand">
        <div className="container px-sm-0">
          <div className="row">
            <h6 className="fs-18 brand__text">Companies we helped grow</h6>
            <ul className="brand__list">
              {brandData.map((item, i) => (
                <li key={i}>
                  <a href="#">
                    <img className="img-fluid" src={item.src} alt={item.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
